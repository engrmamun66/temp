import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, prefix } from '../PushMissingRoutes';


export function pushCategory(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Category',
        page_key:       EnumPageKes.products_list_by_category,
        route_path:     '/category/:uuid',
        content_path:   {
            file: prefix + 'products-list.html',
            seo_end_point: '/stores/{subdomain}/meta/category',
        },
        content_source: 'file',
        _source:        'force_pushed',
    });
}
