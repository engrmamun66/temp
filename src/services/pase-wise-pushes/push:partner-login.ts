import { RskRoute, EnumPageKes, RentMyPage, EnumDefautlsPageSlugs } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';

export function pushPartnerLogin(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    const page = findRentmyPage(rentmyPages, 'partner-login');
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.partner_login,
            route_path:     EnumDefautlsPageSlugs.partner_login,
            content_path:   `pages/${page.slug}`,
            content_source: 'api',
        }, { force_push: true });
    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Partner Login',
            page_key:       EnumPageKes.partner_login,
            route_path:     EnumDefautlsPageSlugs.partner_login,
            content_path:   prefix + 'partner-login.html',
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
}
