import { JSDOM } from 'jsdom';
import { StoreResult } from '../../services/ApiClient';
import { RskRoute } from '../../interfaces';

export function mofifyComponentHTML(dom: JSDOM, layout: string, file: string, storeResult: StoreResult, route: RskRoute): void {
    const { document } = dom.window;
    
    set_logo(document, storeResult?.store?.logo ?? '');
    
    if(file.endsWith('.static.html')) return

    if (file === 'header.html') {
        modify_header_navigation(document);
    }
    if (file.includes('breadcrumbs/')) {
        modify_for_breadcrumb(document, route);
    }
}
 

function set_logo(document: Document, logoUrl: string): void {
    if (!logoUrl) return;
    document.querySelectorAll<HTMLImageElement>('img[data-selector="RENTMY_STORE_LOGO"]').forEach((img) => {
        img.src = logoUrl;
        img.classList.remove('hidden');
    });
}


function modify_header_navigation(document: Document): void {

}


function modify_for_breadcrumb(document: Document, route: RskRoute): void {
    let div = document.body.querySelector('div')
    if(div){
        div.setAttribute('data-pagekey', route.page_key)
    }
}