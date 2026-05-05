import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist } from '../PushMissingRoutes';

export function pushTermsAndConditions(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Terms and Conditions',
        page_key:       EnumPageKes.terms_and_conditions,
        route_path:     '/terms-and-conditions',
        content_path:   'pages/terms-and-conditions',
        content_source: 'api',
        _source:        'force_pushed',
    });
}
