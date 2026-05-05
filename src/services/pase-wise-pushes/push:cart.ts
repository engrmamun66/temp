import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, prefix } from '../PushMissingRoutes';


export function pushCart(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Cart',
        page_key:       EnumPageKes.cart,
        route_path:     '/cart',
        content_path:   prefix + 'cart.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
