import { RskRoute, EnumPageKes, RentMyPage, EnumDefautlsPageSlugs } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';


export function pushProductDetails(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {

    let page: RentMyPage | null = findRentmyPage(rentmyPages, EnumDefautlsPageSlugs.product_details.replace(/^\/+/, ''))
    if(page){
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.product_details,
            route_path:     '/products/:url',
            content_path:  {
                seo_end_point: '/stores/{subdomain}/meta/product-details',
                api_endpoint: `pages/${page.slug}`
            },
            content_source: 'api',

        }, { "force_push": true });

    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Product Details',
            page_key:       EnumPageKes.product_details,
            route_path:     EnumDefautlsPageSlugs.product_details,
            content_path:   {
                seo_end_point: '/stores/{subdomain}/meta/product-details',
                file: prefix + 'product-details.html',
            },
            content_source: 'api',
            _source:        'force_pushed',
        });
    }
}
