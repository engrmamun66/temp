import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import { ApiClient } from '../../services/ApiClient';
import { EnumDefautlsPageSlugs } from '../../interfaces';
import { logToFile } from '../../utils/fileLogger';
import { prefix } from '../../services/PushMissingRoutes';

const SET_CONTENT_HTML = path.resolve(process.cwd(), 'public', 'api-contents', 'set-content.app.html');
const V2_PAGES_DIR     = path.resolve(process.cwd(), 'public', prefix);

const setContentSource = () => fs.readFileSync(SET_CONTENT_HTML, 'utf-8');

function serializeState(value: unknown): string {
    return JSON.stringify(value)
        .replace(/</g,  '\\u003c')
        .replace(/>/g,  '\\u003e')
        .replace(/&/g,  '\\u0026')
}

function listV2HtmlFiles(): string[] {
    try {
        return fs.readdirSync(V2_PAGES_DIR).filter(f => f.endsWith('.html')).sort();
    } catch {
        return [];
    }
}

export class SetContentController {
    private api: ApiClient;

    constructor() {
        this.api = ApiClient.getInstance();
    }

    page = async (req: Request, res: Response): Promise<void> => {
        const subdomain = req.context.subdomain;
        try {
            const [storeResult, rentmyPages] = await Promise.all([
                this.api.getOrFetchStoreResult(subdomain),
                this.api.getRentmyPages(subdomain),
            ]);

            const enumSlugs = Object.entries(EnumDefautlsPageSlugs).map(([key, value]) => ({ key, value }));
            const htmlFiles = listV2HtmlFiles();

            const initialState = serializeState({
                subdomain,
                store_id:    storeResult.store.id,
                location_id: storeResult.location.id,
                enumSlugs,
                rentmyPages,
                htmlFiles,
                htmlFilesPrefix: prefix,
                saveUrl: '/api/_/set-content',
            });

            const html = setContentSource().split('${initialState}').join(initialState);
            res.status(200).type('text/html').send(html);
        } catch (err) {
            logToFile('[SetContentController.page error]', err);
            res.status(500).send('Failed to load set-content page');
        }
    };

    savePage = async (req: Request, res: Response): Promise<void> => {
        const subdomain = req.context.subdomain;
        const { name, slug, contents, html_file, page_id, existing } = req.body as {
            name:       string;
            slug:       string;
            contents?:  string;
            html_file?: string;
            page_id?:   number | null;
            existing?:  Record<string, unknown> | null;
        };

        if (!name || !slug) {
            res.status(400).json({ error: 'name and slug are required' });
            return;
        }

        try {
            const storeResult = await this.api.getOrFetchStoreResult(subdomain);

            // Merge html_file into contents JSON
            let contentsJson: Record<string, unknown> = { heading: '', content: '' };
            if (contents) {
                try { contentsJson = JSON.parse(contents); } catch { /* keep default */ }
            }
            if (html_file) contentsJson.html_file = html_file;
            const mergedContents = JSON.stringify(contentsJson);

            const payload = {
                ...(existing ?? {}),
                ...(page_id ? { id: page_id } : {}),
                store_id:         storeResult.store.id,
                location:         storeResult.location.id,
                name,
                slug,
                contents:         mergedContents,
                meta_description: (existing?.meta_description as string) ?? '',
                meta_keyword:     (existing?.meta_keyword     as string) ?? '',
                meta_title:       (existing?.meta_title       as string) ?? '',
                canonical_url:    (existing?.canonical_url    as string) ?? '',
                status:           (existing?.status           as number) ?? 1,
                type:             (existing?.type             as string) ?? 'page',
                tags:             (existing?.tags             as unknown[]) ?? [],
                parent_id:        (existing?.parent_id        as null)    ?? null,
                featured_image:   (existing?.featured_image   as null)    ?? null,
                thumbnail_image:  (existing?.thumbnail_image  as null)    ?? null,
                children:         (existing?.children         as unknown[]) ?? [],
            }; 

            let result: unknown;
            if (page_id) {
                // if 
                result = await this.api.updateRentmyPage(subdomain, page_id, payload);
            } else {
                result = await this.api.createRentmyPage(subdomain, payload);
            }

            res.json({ success: true, result });
        } catch (err: unknown) {
            const axiosErr = err as { response?: { data?: unknown; status?: number }; message?: string };
            const detail   = axiosErr?.response?.data ?? axiosErr?.message ?? String(err);
            logToFile('[SetContentController.savePage error]', detail);
            res.status(500).json({ error: 'Failed to save page', detail });
        }
    };

    getPages = async (req: Request, res: Response): Promise<void> => {
        const subdomain = req.context.subdomain;
        try {
            const pages = await this.api.getRentmyPages(subdomain);
            res.json({ pages });
        } catch (err) {
            logToFile('[SetContentController.getPages error]', err);
            res.status(500).json({ error: 'Failed to fetch pages' });
        }
    };

    getTemplate = (req: Request, res: Response): void => {
        const file = req.query.file as string;
        if (!file || file.includes('..') || file.includes('/') || !file.endsWith('.html')) {
            res.status(400).json({ error: 'Invalid file name' });
            return;
        }
        const filePath = path.resolve(process.cwd(), 'public', 'themes', 'v2', file);
        try {
            const content = fs.readFileSync(filePath, 'utf-8');
            res.type('text/plain').send(content);
        } catch {
            res.status(404).json({ error: 'File not found' });
        }
    };
}
