import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';

export function pushChangePassword(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    const page = findRentmyPage(rentmyPages, 'change-password');
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.customer_change_password,
            route_path:     '/' + page.slug,
            content_path:   `pages/${page.slug}`,
            content_source: 'api',
        }, { force_push: true });
    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Change Password',
            page_key:       EnumPageKes.customer_change_password,
            route_path:     '/change-password',
            content_path:   prefix + 'customer-change-password.html',
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
}
