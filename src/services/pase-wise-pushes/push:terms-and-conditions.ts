import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist, findRentmyPage } from '../PushMissingRoutes';

export function pushTermsAndConditions(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    const page = findRentmyPage(rentmyPages, 'terms-and-conditions');
    if (page) {
        pushRouteIfNotExist(routes, {
            title:          `{{site_name}}:: ${page.name}`,
            page_key:       EnumPageKes.terms_and_conditions,
            route_path:     '/' + page.slug,
            content_path:   `pages/${page.slug}`,
            content_source: 'api',
        }, { force_push: true });
    } else {
        pushRouteIfNotExist(routes, {
            title:          '{{site_name}}:: Terms and Conditions',
            page_key:       EnumPageKes.terms_and_conditions,
            route_path:     '/terms-and-conditions',
            content_path:   'pages/terms-and-conditions',
            content_source: 'api',
            _source:        'force_pushed',
        });
    }
}
