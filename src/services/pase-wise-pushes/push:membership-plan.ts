import { RskRoute, EnumPageKes, RentMyPage } from '../../interfaces';
import { pushRouteIfNotExist } from '../PushMissingRoutes';

const prefix = 'default-pages/';

export function pushMembershipPlan(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): void {
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Membership Plan',
        page_key:       EnumPageKes.membership_plan,
        route_path:     '/membership-plan',
        content_path:   prefix + 'membership-plan.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
}
