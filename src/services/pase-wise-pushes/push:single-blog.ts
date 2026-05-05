import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, prefix } from '../PushMissingRoutes';


export function pushSingleBlog(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Blog',
        page_key:       EnumPageKes.singleBlog,
        route_path:     '/blog/:slug',
        content_path:   prefix + 'blog-details.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
