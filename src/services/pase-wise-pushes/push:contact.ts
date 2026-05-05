import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';


export function pushContact(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {

    const page: RentMyPage | null = findRentmyPage(rentmyPages, 'contact');
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.contact,
            route_path:     '/contact',
            content_path:   `pages/${page.slug}`,
            content_source: 'api',
        }, { force_push: true });

    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Contact',
            page_key:       EnumPageKes.contact,
            route_path:     '/contact',
            content_path:   prefix + 'contact.html',
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
}
