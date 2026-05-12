import { RskRoute, EnumPageKes, RentMyPage, EnumDefautlsPageSlugs } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';

export function pushWishList(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    const page = findRentmyPage(rentmyPages, EnumDefautlsPageSlugs.wish_list.replace(/^\/+/, ''));
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.wish_list,
            route_path:     EnumDefautlsPageSlugs.wish_list,
            content_path:   `pages/${page.slug}`,
            content_source: 'api',
        }, { force_push: true });
    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Wish List',
            page_key:       EnumPageKes.wish_list,
            route_path:     EnumDefautlsPageSlugs.wish_list,
            content_path:   prefix + 'wish-list.html',
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
}
