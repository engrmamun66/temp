import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist } from '../PushMissingRoutes';

const prefix = 'default-pages/';

export function pushChangeAvatar(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Change Avatar',
        page_key:       EnumPageKes.customer_change_avatar,
        route_path:     '/change-avatar',
        content_path:   prefix + 'customer-change-avatar.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
