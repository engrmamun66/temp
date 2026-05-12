import { RskRoute, EnumPageKes, RentMyPage, EnumDefautlsPageSlugs } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage, prefix } from '../PushMissingRoutes';


export function pushPackageDetails(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {

    let page: RentMyPage | null = findRentmyPage(rentmyPages, 'package-details')
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.package_details,
            route_path:     EnumDefautlsPageSlugs.package_details,
            content_path:  {
                seo_end_point: '/stores/{subdomain}/meta/product-details',
                api_endpoint: `pages/${page.slug}`,
            },
            content_source: 'api',
        }, { "force_push": true });

    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Package Details',
            page_key:       EnumPageKes.package_details,
            route_path:     EnumDefautlsPageSlugs.package_details,
            content_path:   {
                seo_end_point: '/stores/{subdomain}/meta/product-details',
                file: prefix + 'package-details.html',
            },
            content_source: 'api',
            _source:        'force_pushed',
        });
    }
}
