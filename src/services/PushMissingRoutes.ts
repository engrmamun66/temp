import { RskRoute, EnumPageKes, Component, Slots, RentMyPage } from '../interfaces';
import { logToFile } from '../utils/fileLogger';
import { pushHome } from './pase-wise-pushes/push:home';
import { pushProductsList } from './pase-wise-pushes/push:products-list';
import { pushProductDetails } from './pase-wise-pushes/push:product-details';
import { pushPackageDetails } from './pase-wise-pushes/push:package-details';
import { pushCategory } from './pase-wise-pushes/push:category';
import { pushWishList } from './pase-wise-pushes/push:wish-list';
import { pushCart } from './pase-wise-pushes/push:cart';
import { pushCheckout } from './pase-wise-pushes/push:checkout';
import { pushOrderComplete } from './pase-wise-pushes/push:order-complete';
import { pushOrderDetails } from './pase-wise-pushes/push:order-details';
import { pushMembershipPlan } from './pase-wise-pushes/push:membership-plan';
import { pushRentmyDashboard } from './pase-wise-pushes/push:rentmy-dashboard';
import { pushLogin } from './pase-wise-pushes/push:login';
import { pushRegistration } from './pase-wise-pushes/push:registration';
import { pushResetPassword } from './pase-wise-pushes/push:reset-password';
import { pushPartnerLogin } from './pase-wise-pushes/push:partner-login';
import { pushPartnerRegistration } from './pase-wise-pushes/push:partner-registration';
import { pushCustomerProfile } from './pase-wise-pushes/push:customer-profile';
import { pushChangePassword } from './pase-wise-pushes/push:change-password';
import { pushChangeAvatar } from './pase-wise-pushes/push:change-avatar';
import { pushOrderHistory } from './pase-wise-pushes/push:order-history';
import { pushBlog } from './pase-wise-pushes/push:blog';
import { pushSingleBlog } from './pase-wise-pushes/push:single-blog';
import { pushDynamicPage } from './pase-wise-pushes/push:dynamic-page';
import { pushTermsAndConditions } from './pase-wise-pushes/push:terms-and-conditions';

const prefix = 'default-pages/'

export function pushMissingRoutes(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): RskRoute[]
{
    pushHome(routes, rentmyPages, subdomain);
    pushProductsList(routes, rentmyPages, subdomain);
    pushProductDetails(routes, rentmyPages, subdomain);
    pushPackageDetails(routes, rentmyPages, subdomain);
    pushCategory(routes, rentmyPages, subdomain);
    pushWishList(routes, rentmyPages, subdomain);
    pushCart(routes, rentmyPages, subdomain);
    pushCheckout(routes, rentmyPages, subdomain);
    pushOrderComplete(routes, rentmyPages, subdomain);
    pushOrderDetails(routes, rentmyPages, subdomain);
    pushMembershipPlan(routes, rentmyPages, subdomain);
    pushRentmyDashboard(routes, rentmyPages, subdomain);
    pushLogin(routes, rentmyPages, subdomain);
    pushRegistration(routes, rentmyPages, subdomain);
    pushResetPassword(routes, rentmyPages, subdomain);
    pushPartnerLogin(routes, rentmyPages, subdomain);
    pushPartnerRegistration(routes, rentmyPages, subdomain);
    pushCustomerProfile(routes, rentmyPages, subdomain);
    pushChangePassword(routes, rentmyPages, subdomain);
    pushChangeAvatar(routes, rentmyPages, subdomain);
    pushOrderHistory(routes, rentmyPages, subdomain);
    pushBlog(routes, rentmyPages, subdomain);
    pushSingleBlog(routes, rentmyPages, subdomain);
    pushDynamicPage(routes, rentmyPages, subdomain);
    pushTermsAndConditions(routes, rentmyPages, subdomain);

    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: 404 - Page Not Found',
        page_key:       EnumPageKes.not_found,
        route_path:     '/not-found',
        content_path:   prefix + 'not-found.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    return routes;
}


export function pushRouteIfNotExist(routes: RskRoute[], route: RskRoute, {index=0, force_push= false, subdomain = ''} = {}): void
{
    if(force_push){
        routes.push(route)
        setRouteComponent(route)
        return
    }
    const find = routes.find((item: RskRoute) => item.page_key === route.page_key);
    if (!find) {
        if (index >= 0) routes.splice(index, 0, route);
        else routes.push(route);
        setRouteComponent(route)
    }
}


export function setRouteComponent(route: RskRoute, wasFound = false): void
{
    let header_footer: Component[] = [
        {
            slot: Slots.header,
            files: ['header.html']
        },
        {
            slot: Slots.footer,
            files: ['footer.html']
        },
    ]

    if(!route.components) route.components = []

    route.components = [...header_footer, ...route.components]
}
