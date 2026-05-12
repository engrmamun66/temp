import { RskRoute, EnumPageKes, RentMyPage, EnumDefautlsPageSlugs } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';

export function pushRegistration(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    const page = findRentmyPage(rentmyPages, 'registration');
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.registration,
            route_path:     EnumDefautlsPageSlugs.registration,
            content_path:   `pages/${page.slug}`,
            content_source: 'api',
        }, { force_push: true });
    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Registration',
            page_key:       EnumPageKes.registration,
            route_path:     EnumDefautlsPageSlugs.registration,
            content_path:   prefix + 'customer-registration.html',
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
}
