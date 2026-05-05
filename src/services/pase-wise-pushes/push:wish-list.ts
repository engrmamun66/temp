import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist } from '../PushMissingRoutes';

const prefix = 'default-pages/';

export function pushWishList(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Wish List',
        page_key:       EnumPageKes.wish_list,
        route_path:     '/wish-list',
        content_path:   prefix + 'wish-list.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
