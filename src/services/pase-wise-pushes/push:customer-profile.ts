import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, prefix } from '../PushMissingRoutes';


export function pushCustomerProfile(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: My Profile',
        page_key:       EnumPageKes.customer_profile,
        route_path:     '/profile',
        content_path:   prefix + 'customer-profile.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
