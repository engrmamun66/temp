import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist } from '../PushMissingRoutes';

const prefix = 'default-pages/';

export function pushProductDetails(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Product Details',
        page_key:       EnumPageKes.product_details,
        route_path:     '/products/:url',
        content_path:   {
            seo_end_point: '/stores/{subdomain}/meta/product-details',
            file: prefix + 'product-details.html',
        },
        content_source: 'api',
        _source:        'force_pushed',
    });
}
