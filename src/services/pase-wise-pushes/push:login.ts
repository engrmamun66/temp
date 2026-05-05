import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, prefix } from '../PushMissingRoutes';


export function pushLogin(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Login',
        page_key:       EnumPageKes.login,
        route_path:     '/login',
        content_path:   prefix + 'customer-login.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
