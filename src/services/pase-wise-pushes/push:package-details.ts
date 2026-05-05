import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist } from '../PushMissingRoutes';

const prefix = 'default-pages/';

export function pushPackageDetails(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Package Details',
        page_key:       EnumPageKes.package_details,
        route_path:     '/packages/:url',
        content_path:   {
            seo_end_point: '/stores/{subdomain}/meta/product-details',
            file: prefix + 'package-details.html',
        },
        content_source: 'api',
        _source:        'force_pushed',
    });
}
