import { RskRoute, EnumPageKes, RentMyPage, EnumDefautlsPageSlugs } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';

export function pushOrderHistory(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    const page = findRentmyPage(rentmyPages, EnumDefautlsPageSlugs.customer_order_history.replace(/^\/+/, ''));
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.customer_order_history,
            route_path:     EnumDefautlsPageSlugs.customer_order_history,
            content_path:   `pages/${page.slug}`,
            content_source: 'api',
        }, { force_push: true });
    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Order History',
            page_key:       EnumPageKes.customer_order_history,
            route_path:     EnumDefautlsPageSlugs.customer_order_history,
            content_path:   prefix + 'customer-order-history.html',
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
}
