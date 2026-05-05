import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, prefix } from '../PushMissingRoutes';


export function pushHome(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Home',
        page_key:       EnumPageKes.home,
        route_path:     '/',
        content_path:   prefix + 'home.html',
        content_source: 'api',
        _source:        'force_pushed',
    }, {index: 0});
}
