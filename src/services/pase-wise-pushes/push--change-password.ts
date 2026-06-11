import { RskRoute, EnumPageKes, RentMyPage, EnumDefautlsPageSlugs } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';

export function pushChangePassword(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    const page = findRentmyPage(rentmyPages, EnumDefautlsPageSlugs.customer_change_password.replace(/^\/+/, ''));
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.customer_change_password,
            route_path:     EnumDefautlsPageSlugs.customer_change_password,
            content_path:   `pages/${page.slug}`,
            content_source: 'api',
        }, { force_push: true });
    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Change Password',
            page_key:       EnumPageKes.customer_change_password,
            route_path:     EnumDefautlsPageSlugs.customer_change_password,
            content_path:   prefix + 'customer-change-password.html',
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
}
