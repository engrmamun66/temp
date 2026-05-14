import { RskRoute, EnumPageKes, RentMyPage, EnumDefautlsPageSlugs } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';

export function pushCustomerBilling(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    const page = findRentmyPage(rentmyPages, EnumDefautlsPageSlugs.customer_billing.replace(/^\/+/, ''));
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.customer_billing,
            route_path:     EnumDefautlsPageSlugs.customer_billing,
            content_path:   `pages/${page.slug}`,
            content_source: 'api',
        }, { force_push: true });
    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Order History',
            page_key:       EnumPageKes.customer_billing,
            route_path:     EnumDefautlsPageSlugs.customer_billing,
            content_path:   prefix + 'customer-billing.html',
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
}
