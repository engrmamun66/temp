import { RskRoute, EnumPageKes } from '../interfaces';
import { logToFile } from '../utils/fileLogger';

const prefix = 'defaults-pages/'

export function pushMissingRoutes(routes: RskRoute[]): RskRoute[]
{
    // ------ Home ---------------------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:       EnumPageKes.home,
        route_path:     '/',
        content_path:   prefix + 'home.html',
        content_source: 'file',
        _source:        'force_pushed',
    }, 0);

    // ------ Products list ------------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:  EnumPageKes.products_list,
        route_path: '/products-list',
        _source:   'force_pushed',
    });

    // ------ Product details ----------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.product_details,
        route_path: '/products/:url',
        _source:    'force_pushed',
    });

    // ------ Package details ----------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.package_details,
        route_path: '/packages/:url',
        _source:    'force_pushed',
    });

    // ------ Products list by category ------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.products_list_by_category,
        route_path: '/category/:uuid',
        _source:    'force_pushed',
    });

    // ------ Not found ----------------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:       EnumPageKes.not_found,
        route_path:     '/not-found',
        content_path:   prefix + 'not-found.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    return routes;
}
 

function pushRouteIfNotExist(routes: RskRoute[], route: RskRoute, pushed_to_index: number = -1): void
{
    const find = routes.find((item: RskRoute) => item.page_key === route.page_key);
    if (!find) {
        if (pushed_to_index >= 0) routes.splice(pushed_to_index, 0, route);
        else routes.push(route);
        logToFile(`[PushMissingRoutes.ts] [route_pushed] ${route.page_key}`);
    }
}