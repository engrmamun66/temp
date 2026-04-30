import { Component, NavLink, RskRoute } from '../interfaces';
import { clearFileLogs, logToFile } from '../utils/fileLogger';

import { JSDOM } from 'jsdom';

export function mofifyComponentHTML(_dom: JSDOM, layout: string, file: string): void {
    const { document } = _dom.window;

    console.log('=====', {layout, file});
    if(file === 'header.html'){
        modify_header(document)
    }

}



function modify_header(document: Document): void {

}