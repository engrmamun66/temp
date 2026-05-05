import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, prefix } from '../PushMissingRoutes';


export function pushPartnerLogin(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Partner Login',
        page_key:       EnumPageKes.partner_login,
        route_path:     '/partner-login',
        content_path:   prefix + 'partner-login.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
