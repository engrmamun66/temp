import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';

export function pushCustomerProfile(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    const page = findRentmyPage(rentmyPages, 'profile');
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.customer_profile,
            route_path:     '/' + page.slug,
            content_path:   `pages/${page.slug}`,
            content_source: 'api',
        }, { force_push: true });
    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: My Profile',
            page_key:       EnumPageKes.customer_profile,
            route_path:     '/profile',
            content_path:   prefix + 'customer-profile.html',
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
}
