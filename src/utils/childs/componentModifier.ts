import { JSDOM } from 'jsdom';
import { StoreResult } from '../../services/ApiClient';

export function mofifyComponentHTML(dom: JSDOM, layout: string, file: string, storeResult?: StoreResult): void {
    const { document } = dom.window;

    set_logo(document, storeResult?.store?.logo ?? '');

    if (file === 'header.html') {
        modify_header_navigation(document);
    }
}

function set_logo(document: Document, logoUrl: string): void {
    if (!logoUrl) return;
    document.querySelectorAll<HTMLImageElement>('img[data-rskattr="RENTMY_STORE_LOGO"]').forEach((img) => {
        img.src = logoUrl;
    });
}


function modify_header_navigation(document: Document): void {

}