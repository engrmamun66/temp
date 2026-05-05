import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist } from '../PushMissingRoutes';

const prefix = 'default-pages/';

export function pushResetPassword(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Reset Password',
        page_key:       EnumPageKes.reset_password,
        route_path:     '/reset-password',
        content_path:   prefix + 'customer-reset-password.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
