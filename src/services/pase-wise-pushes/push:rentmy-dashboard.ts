import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist } from '../PushMissingRoutes';

const prefix = 'default-pages/';

export function pushRentmyDashboard(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Dashboard',
        page_key:       EnumPageKes.rentmy_dashboard,
        route_path:     '/rentmy-dashboard',
        content_path:   prefix + 'rentmy-dashboard.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
