import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist } from '../PushMissingRoutes';

const prefix = 'default-pages/';

export function pushChangePassword(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Change Password',
        page_key:       EnumPageKes.customer_change_password,
        route_path:     '/change-password',
        content_path:   prefix + 'customer-change-password.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
