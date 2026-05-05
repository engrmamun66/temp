import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';

export function pushOrderComplete(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    const page = findRentmyPage(rentmyPages, 'order-complete');
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.order_complete,
            route_path:     '/' + page.slug,
            content_path:   `pages/${page.slug}`,
            content_source: 'api',
        }, { force_push: true });
    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Order Complete',
            page_key:       EnumPageKes.order_complete,
            route_path:     '/order-complete',
            content_path:   prefix + 'order-complete.html',
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
}
