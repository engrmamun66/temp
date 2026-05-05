import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist } from '../PushMissingRoutes';

const prefix = 'default-pages/';

export function pushProductsList(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Products',
        page_key:       EnumPageKes.products_list,
        route_path:     '/products-list',
        content_path:   prefix + 'products-list.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
