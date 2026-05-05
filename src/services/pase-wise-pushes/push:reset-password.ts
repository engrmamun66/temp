import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';

export function pushResetPassword(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    const page = findRentmyPage(rentmyPages, 'reset-password');
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.reset_password,
            route_path:     '/' + page.slug,
            content_path:   `pages/${page.slug}`,
            content_source: 'api',
        }, { force_push: true });
    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Reset Password',
            page_key:       EnumPageKes.reset_password,
            route_path:     '/reset-password',
            content_path:   prefix + 'customer-reset-password.html',
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
}
