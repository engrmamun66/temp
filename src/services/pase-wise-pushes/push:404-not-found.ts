import { RskRoute, EnumPageKes, RentMyPage, EnumDefautlsPageSlugs } from '../../interfaces';
import { pushRouteIfNotExist } from '../PushMissingRoutes';

export function pushNotFound(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: 404 - Page Not Found',
        page_key:       EnumPageKes.not_found,
        route_path:     EnumDefautlsPageSlugs.not_found,
        content_path:   '404.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
