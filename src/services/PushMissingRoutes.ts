import { env } from '../config/env';
import { HomeLayoutOrder, Redirections } from '../types';
import { RskRoute, PageContent, HomeContent, HomeMeta, EnumPageKes } from '../interfaces';
import { logToFile } from '../utils/fileLogger';


export function pushMissingRoutes(routes: RskRoute[]): RskRoute[]
{
    pushRoute(EnumPageKes.home, routes)
    return routes
}


function pushRoute(key: EnumPageKes | string, routes: RskRoute[]){
    
}