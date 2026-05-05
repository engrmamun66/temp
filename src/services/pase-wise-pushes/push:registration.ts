import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, prefix } from '../PushMissingRoutes';


export function pushRegistration(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Registration',
        page_key:       EnumPageKes.registration,
        route_path:     '/registration',
        content_path:   prefix + 'customer-registration.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
