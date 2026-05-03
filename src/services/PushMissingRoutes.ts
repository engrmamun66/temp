import { RskRoute, EnumPageKes, Component, Slots } from '../interfaces';
import { logToFile } from '../utils/fileLogger';

const prefix = 'default-pages/'

export function pushMissingRoutes(routes: RskRoute[], subdomain: string): RskRoute[]
{
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Home',
        page_key:       EnumPageKes.home,
        route_path:     '/',
        content_path:   prefix + 'home.html',
        content_source: 'api',
        _source:        'force_pushed',
    }, 0);


    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Products',
        page_key:       EnumPageKes.products_list,
        route_path:     '/products-list',
        content_path:   '/page/',
        content_source: 'api',
        _source:        'force_pushed',
    });

    
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Products',
        page_key:       EnumPageKes.products_list,
        route_path:     '/products-list',
        content_path:   prefix + 'products-list.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Product Details',
        page_key:       EnumPageKes.product_details,
        route_path:     '/products/:url',
        content_path:   prefix + 'product-details.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Package Details',
        page_key:       EnumPageKes.package_details,
        route_path:     '/packages/:url',
        content_path:   prefix + 'package-details.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Category',
        page_key:       EnumPageKes.products_list_by_category,
        route_path:     '/category/:uuid',
        content_path:   prefix + 'category.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Wish List',
        page_key:       EnumPageKes.wish_list,
        route_path:     '/wish-list',
        content_path:   prefix + 'wish-list.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Cart',
        page_key:       EnumPageKes.cart,
        route_path:     '/cart',
        content_path:   prefix + 'cart.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Checkout',
        page_key:       EnumPageKes.checkout,
        route_path:     '/checkout',
        content_path:   prefix + 'checkout.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Order Complete',
        page_key:       EnumPageKes.order_complete,
        route_path:     '/order-complete',
        content_path:   prefix + 'order-complete.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    // pushRouteIfNotExist(routes, {
    //     title:          '{{site_name}}:: Order Details',
    //     page_key:       EnumPageKes.order_details,
    //     route_path:     '/order-details/:id',
    //     content_path:   prefix + 'customer-order-details.html',
    //     content_source: 'file',
    //     _source:        'force_pushed',
    // });

    // pushRouteIfNotExist(routes, {
    //     title:          '{{site_name}}:: Membership Plan',
    //     page_key:       EnumPageKes.membership_plan,
    //     route_path:     '/membership-plan',
    //     content_path:   prefix + 'membership-plan.html',
    //     content_source: 'file',
    //     _source:        'force_pushed',
    // });

   

    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Dashboard',
        page_key:       EnumPageKes.rentmy_dashboard,
        route_path:     '/rentmy-dashboard',
        content_path:   prefix + 'rentmy-dashboard.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Login',
        page_key:       EnumPageKes.login,
        route_path:     '/login',
        content_path:   prefix + 'customer-login.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    // ------ Customer: registration ---------------------------------------- //
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Registration',
        page_key:       EnumPageKes.registration,
        route_path:     '/registration',
        content_path:   prefix + 'customer-registration.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    // ------ Customer: reset password -------------------------------------- //
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Reset Password',
        page_key:       EnumPageKes.reset_password,
        route_path:     '/reset-password',
        content_path:   prefix + 'customer-reset-password.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Partner Login',
        page_key:       EnumPageKes.partner_login,
        route_path:     '/partner-login',
        content_path:   prefix + 'partner-login.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Partner Registration',
        page_key:       EnumPageKes.partner_registration,
        route_path:     '/partner-registration',
        content_path:   prefix + 'partner-registration.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: My Profile',
        page_key:       EnumPageKes.customer_profile,
        route_path:     '/profile',
        content_path:   prefix + 'customer-profile.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    // // ------ Customer: change password ------------------------------------- //
    // pushRouteIfNotExist(routes, {
    //     title:          '{{site_name}}:: Change Password',
    //     page_key:       EnumPageKes.customer_change_password,
    //     route_path:     '/change-password',
    //     content_path:   prefix + 'customer-change-password.html',
    //     content_source: 'file',
    //     _source:        'force_pushed',
    // });

    // // ------ Customer: change avatar --------------------------------------- //
    // pushRouteIfNotExist(routes, {
    //     title:          '{{site_name}}:: Change Avatar',
    //     page_key:       EnumPageKes.customer_change_avatar,
    //     route_path:     '/change-avatar',
    //     content_path:   prefix + 'customer-change-avatar.html',
    //     content_source: 'file',
    //     _source:        'force_pushed',
    // });

    // // ------ Customer: order history --------------------------------------- //
    // pushRouteIfNotExist(routes, {
    //     title:          '{{site_name}}:: Order History',
    //     page_key:       EnumPageKes.customer_order_history,
    //     route_path:     '/order-history',
    //     content_path:   prefix + 'customer-order-history.html',
    //     content_source: 'file',
    //     _source:        'force_pushed',
    // });

    // // ------ Customer: order dashboard ------------------------------------- //
    // pushRouteIfNotExist(routes, {
    //     title:          '{{site_name}}:: My Dashboard',
    //     page_key:       EnumPageKes.customer_order_dashboard,
    //     route_path:     '/dashboard',
    //     content_path:   prefix + 'customer-dashboard.html',
    //     content_source: 'file',
    //     _source:        'force_pushed',
    // });

    // ------ Blog list --------------------------------------------------------- //
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Blog',
        page_key:       EnumPageKes.blog,
        route_path:     '/blog',
        // content_path:   prefix + 'blog.html',
        content_path:   'blog',
        content_source: 'api',
        _source:        'force_pushed',
    });

    // ------ Single blog ------------------------------------------------------- //
    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Blog',
        page_key:       EnumPageKes.singleBlog,
        route_path:     '/blog/:slug',
        content_path:   prefix + 'blog-details.html',
        content_source: 'file',
        _source:        'force_pushed',
    });

    // pushRouteIfNotExist(routes, {
    //     title:          '{{site_name}}:: Billing',
    //     page_key:       EnumPageKes.customer_billing,
    //     route_path:     '/billing',
    //     content_path:   prefix + 'customer-billing-details.html',
    //     content_source: 'file',
    //     _source:        'force_pushed',
    // });

    pushRouteIfNotExist(routes, {
        title:          '{{site_name}}:: Terms and Conditions',
        page_key:       EnumPageKes.terms_and_conditions,
        route_path:     '/terms-and-conditions',
        content_path:   'pages/terms-and-conditions',
        content_source: 'api',
        _source:        'force_pushed',
    });

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


function pushRouteIfNotExist(routes: RskRoute[], route: RskRoute, pushed_to_index: number = -1): void
{
    const find = routes.find((item: RskRoute) => item.page_key === route.page_key);
    if (!find) {
        if (pushed_to_index >= 0) routes.splice(pushed_to_index, 0, route);
        else routes.push(route);
        setRouteComponent(route)
    }
}


function setRouteComponent(route: RskRoute, wasFound = false): void
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

    if(route.page_key == EnumPageKes.home){
        // route.components.push({
        //     slot: Slots.homeSlider,
        //     files: ['slider.html']
        // })
    }
    else {
        // route.components.push({
        //     slot: Slots.afterNav,
        //     files: ['breadcrumbs/default']
        // })
    }
    // if(route.page_key == EnumPageKes.products_list){
    //     route.components.push({
    //         slot: Slots.afterNav,
    //         files: ['breadcrumbs/default']
    //     })
    // }

}
