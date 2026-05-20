import { RskRoute, EnumPageKes, RentMyPage, EnumDefautlsPageSlugs } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';


export function pushHome(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {

    let page: RentMyPage | null = findRentmyPage(rentmyPages, EnumDefautlsPageSlugs.home.replace(/^\/+/, ''))
    if(page){
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.home + '_________',
            route_path:     '/',
            content_path:  `pages/${page.slug}`,
            content_source: 'api',

        }, { "force_push": true });

    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Home',
            page_key:       EnumPageKes.home,
            route_path:     '/',
            content_path:   prefix + 'home.html',
            content_source: 'api',
            _source:        'force_pushed',
        }, {index: 0});
    }
 
}
