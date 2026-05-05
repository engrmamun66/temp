import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { logToFile } from '../../utils/fileLogger';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';


export function pushCategory(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {

    const page: RentMyPage | null = findRentmyPage(rentmyPages, 'category-products');
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.products_list_by_category,
            route_path:     '/category/:uuid',
            content_path:  {
                seo_end_point: '/stores/{subdomain}/meta/category',
                api_endpoint: `pages/${page.slug}`,
            },
            content_source: 'api',
        }, { force_push: true });

    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Category',
            page_key:       EnumPageKes.products_list_by_category,
            route_path:     '/category/:uuid',
            content_path:   {
                file: prefix + 'products-list.html',
                seo_end_point: '/stores/{subdomain}/meta/category',
            },
            content_source: 'file',
            _source:        'force_pushed',
        });
    }
}