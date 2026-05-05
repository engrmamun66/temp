import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist } from '../PushMissingRoutes';

const prefix = 'default-pages/';

export function pushCheckout(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Checkout',
        page_key:       EnumPageKes.checkout,
        route_path:     '/checkout',
        content_path:   prefix + 'checkout.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
