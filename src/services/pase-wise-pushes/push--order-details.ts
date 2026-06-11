import { RskRoute, EnumPageKes, RentMyPage, EnumDefautlsPageSlugs } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';

export function pushOrderDetails(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    const page = findRentmyPage(rentmyPages, EnumDefautlsPageSlugs.order_details.replace(/^\/+/, ''));
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.order_details,
            route_path:     EnumDefautlsPageSlugs.order_details,
            content_path:   `pages/${page.slug}`,
            content_source: 'api',
        }, { force_push: true });
    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Order Complete',
            page_key:       EnumPageKes.order_details,
            route_path:     EnumDefautlsPageSlugs.order_details,
            content_path:   prefix + 'customer-order-details.html',
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
}