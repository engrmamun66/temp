import { RskRoute, EnumPageKes, RentMyPage, EnumDefautlsPageSlugs } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';

export function pushRentmyDashboard(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    const page = findRentmyPage(rentmyPages, EnumDefautlsPageSlugs.rentmy_dashboard.replace(/^\/+/, ''));
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.rentmy_dashboard,
            route_path:     EnumDefautlsPageSlugs.rentmy_dashboard,
            content_path:   `pages/${page.slug}`,
            content_source: 'api',
        }, { force_push: true });
    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Dashboard',
            page_key:       EnumPageKes.rentmy_dashboard,
            route_path:     EnumDefautlsPageSlugs.rentmy_dashboard,
            content_path:   prefix + 'rentmy-dashboard.html',
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
}
