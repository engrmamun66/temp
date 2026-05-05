import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist } from '../PushMissingRoutes';

export function pushBlog(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Blog',
        page_key:       EnumPageKes.blog,
        route_path:     '/blog',
        content_path:   'blogs',
        content_source: 'api',
        _source:        'force_pushed',
    });
}
