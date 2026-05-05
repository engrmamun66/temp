import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, prefix } from '../PushMissingRoutes';


export function pushOrderHistory(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Order History',
        page_key:       EnumPageKes.customer_order_history,
        route_path:     '/order-history',
        content_path:   prefix + 'customer-order-history.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
