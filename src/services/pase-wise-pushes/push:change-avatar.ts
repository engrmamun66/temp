import { RskRoute, EnumPageKes, RentMyPage, EnumDefautlsPageSlugs } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';

export function pushChangeAvatar(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    const page = findRentmyPage(rentmyPages, 'change-avatar');
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.customer_change_avatar,
            route_path:     EnumDefautlsPageSlugs.customer_change_avatar,
            content_path:   `pages/${page.slug}`,
            content_source: 'api',
        }, { force_push: true });
    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Change Avatar',
            page_key:       EnumPageKes.customer_change_avatar,
            route_path:     EnumDefautlsPageSlugs.customer_change_avatar,
            content_path:   prefix + 'customer-change-avatar.html',
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
}
