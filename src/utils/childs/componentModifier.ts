import { JSDOM } from 'jsdom';


export function mofifyComponentHTML(dom: JSDOM, layout: string, file: string): void {
    const { document } = dom.window;

    if(file === 'header.html'){
        modify_header_navigation(document)
    }

}



function modify_header_navigation(document: Document): void {

}