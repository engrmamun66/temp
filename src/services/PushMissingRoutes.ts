import { RskRoute, EnumPageKes } from '../interfaces';
import { logToFile } from '../utils/fileLogger';

const prefix = 'defaults-pages/'

export function pushMissingRoutes(routes: RskRoute[]): RskRoute[]
{


    // ------ Home Route ------ //
    pushRouteIfNotExist(routes, {
        page_key: EnumPageKes.home, 
        route_path: '/', 
        content_path: prefix + 'home.html',
        content_source: 'file',
        _source: 'force_pushed',
    }, 0)

    return routes
}
 

function pushRouteIfNotExist(routes: RskRoute[], route: RskRoute, pushed_to_index: number): void
{
    let find = routes.find((item: RskRoute) => item.page_key === route.page_key)
    if(!find) {
        routes.splice(pushed_to_index, 0, route)
        logToFile(`[PUshMissingRoutes.ts] [route_pused] ${route.page_key}`)
    }
}