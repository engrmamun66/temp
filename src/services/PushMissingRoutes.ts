import { RskRoute, Component, Slots, RentMyPage } from '../interfaces';
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
import { pushNotFound } from './pase-wise-pushes/push:404-not-found';

export const prefix = 'default-pages/'

export function pushMissingRoutes(routes: RskRoute[], rentmyPages: RentMyPage[], subdomain: string): RskRoute[]
{
    pushHome(routes, rentmyPages, subdomain);                 // route: /
    pushProductsList(routes, rentmyPages, subdomain);         // route: /products-list
    pushProductDetails(routes, rentmyPages, subdomain);       // route: /product-details -> /products/:url
    pushPackageDetails(routes, rentmyPages, subdomain);       // route: /package-details -> /packages/:url
    pushCategory(routes, rentmyPages, subdomain);             // route: /category-products -> /category/:uuid
    pushWishList(routes, rentmyPages, subdomain);             // route: /wish-list
    pushCart(routes, rentmyPages, subdomain);                 // route: /cart
    pushCheckout(routes, rentmyPages, subdomain);             // route: /checkout
    pushOrderComplete(routes, rentmyPages, subdomain);        // route: /order-complete
    pushOrderDetails(routes, rentmyPages, subdomain);         // route: /order-details -> /order-details/:id
    pushMembershipPlan(routes, rentmyPages, subdomain);       // route: /membership-plan
    pushRentmyDashboard(routes, rentmyPages, subdomain);      // route: /rentmy-dashboard
    pushLogin(routes, rentmyPages, subdomain);                // route: /login
    pushRegistration(routes, rentmyPages, subdomain);         // route: /registration
    pushResetPassword(routes, rentmyPages, subdomain);        // route: /reset-password
    pushPartnerLogin(routes, rentmyPages, subdomain);         // route: /partner-login
    pushPartnerRegistration(routes, rentmyPages, subdomain);  // route: /partner-registration
    pushCustomerProfile(routes, rentmyPages, subdomain);      // route: /profile
    pushChangePassword(routes, rentmyPages, subdomain);       // route: /change-password
    pushChangeAvatar(routes, rentmyPages, subdomain);         // route: /change-avatar
    pushOrderHistory(routes, rentmyPages, subdomain);         // route: /order-history
    pushBlog(routes, rentmyPages, subdomain);                 // route: /blog
    pushSingleBlog(routes, rentmyPages, subdomain);           // route: /blog/:slug
    pushDynamicPage(routes, rentmyPages, subdomain);          // route: /page/:rentmy_page_slug
    pushTermsAndConditions(routes, rentmyPages, subdomain);   // route: /terms-and-conditions
    pushNotFound(routes, rentmyPages, subdomain);             // route: /not-found

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

export function trimSlashes(slug: string): string {
    return slug.replace(/^\/+/, '').replace(/\/+$/, '')
}
 
export function findRentmyPage(rentmyPages: RentMyPage[], slug: string): RentMyPage | null
{   
    return rentmyPages.find(page => {
        slug = trimSlashes(slug)
        page.slug = trimSlashes(page.slug)
        return page.slug === slug
    }) || null
}
