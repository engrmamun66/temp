import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist } from '../PushMissingRoutes';

const prefix = 'default-pages/';

export function pushOrderDetails(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Order Details',
        page_key:       EnumPageKes.order_details,
        route_path:     '/order-details/:id',
        content_path:   prefix + 'customer-order-details.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
