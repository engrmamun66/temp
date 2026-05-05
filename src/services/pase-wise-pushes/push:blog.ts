import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage } from '../PushMissingRoutes';

export function pushBlog(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    // const page = findRentmyPage(rentmyPages, 'blog');
    // if (page) {
    //     pushRouteIfNotExist(routes, {
    //         title:          `{{site_name}}:: ${page.name}`,
    //         page_key:       EnumPageKes.blog,
    //         route_path:     '/' + page.slug,
    //         content_path:   `pages/${page.slug}`,
    //         content_source: 'api',
    //     }, { force_push: true });
    // } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Blog',
            page_key:       EnumPageKes.blog,
            route_path:     '/blog',
            content_path:   'blogs',
            content_source: 'api',
            _source:        'force_pushed',
        });
    // }
}
