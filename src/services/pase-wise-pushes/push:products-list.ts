import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, trimSlashes, prefix } from '../PushMissingRoutes';


export function pushProductsList(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    let page: RentMyPage | null = findRentmyPage(rentmyPages, 'products-list')
    if(page){
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.products_list,
            route_path:     '/' + page.slug,
            content_path:   `pages/${page.slug}`,
            content_source: 'api', 

        }, { "force_push": true });
        
    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Products',
            page_key:       EnumPageKes.products_list,
            route_path:     '/products-list',
            content_path:   prefix + 'products-list.html',
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
    
}
