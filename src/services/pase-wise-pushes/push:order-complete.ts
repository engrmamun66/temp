import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, prefix } from '../PushMissingRoutes';


export function pushOrderComplete(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Order Complete',
        page_key:       EnumPageKes.order_complete,
        route_path:     '/order-complete',
        content_path:   prefix + 'order-complete.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
