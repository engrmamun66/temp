import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist } from '../PushMissingRoutes';

const prefix = 'default-pages/';

export function pushPartnerRegistration(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Partner Registration',
        page_key:       EnumPageKes.partner_registration,
        route_path:     '/partner-registration',
        content_path:   prefix + 'partner-registration.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
