import { RskRoute, EnumPageKes, RentMyPage, EnumDefautlsPageSlugs } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';


export function pushProductsList(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    let page: RentMyPage | null = findRentmyPage(rentmyPages, EnumDefautlsPageSlugs.products_list.replace(/^\/+/, ''))
    if(page){
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.products_list,
            route_path:     EnumDefautlsPageSlugs.products_list,
            content_path:   `pages/${page.slug}`,
            content_source: 'api', 

        }, { "force_push": true });
        
    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Products',
            page_key:       EnumPageKes.products_list,
            route_path:     EnumDefautlsPageSlugs.products_list,
            content_path:   prefix + 'products-list.html',
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
    
}
