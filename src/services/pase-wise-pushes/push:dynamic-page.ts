import { RskRoute, EnumPageKes, RentMyPage, EnumDefautlsPageSlugs } from '../../interfaces';
import { pushRouteIfNotExist } from '../PushMissingRoutes';

export function pushDynamicPage(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Dynamic page',
        page_key:       EnumPageKes.rentmy_dynamic_page,
        route_path:     '/page/:rentmy_page_slug',
        content_path:   '/pages/:rentmy_page_slug',
        content_source: 'api',
        _source:        'force_pushed',
    });
}
