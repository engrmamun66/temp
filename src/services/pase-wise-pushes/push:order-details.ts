import { RskRoute, EnumPageKes, RentMyPage, EnumDefautlsPageSlugs } from '../../interfaces';
import { pushRouteIfNotExist, prefix } from '../PushMissingRoutes';


export function pushOrderDetails(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Order Details',
        page_key:       EnumPageKes.order_details,
        route_path:     EnumDefautlsPageSlugs.order_details,
        content_path:   prefix + 'customer-order-details.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
