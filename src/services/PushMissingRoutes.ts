import { RskRoute, EnumPageKes } from '../interfaces';
import { logToFile } from '../utils/fileLogger';

const prefix = 'defaults-pages/'

export function pushMissingRoutes(routes: RskRoute[]): RskRoute[]
{
    // ------ Home ---------------------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:       EnumPageKes.home,
        route_path:     '/',
        content_path:   prefix + 'home.html',
        content_source: 'api',
        _source:        'force_pushed',
    }, 0);

    // ------ Products list ------------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:       EnumPageKes.products_list,
        route_path:     '/products-list',
        content_path:   prefix + 'products-list.html',
        content_source: 'file',
        _source:        'force_pushed',
    });
 
    // ------ Product details ----------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.product_details,
        route_path: '/products/:url',
        _source:    'force_pushed',
    });

    // ------ Package details ----------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.package_details,
        route_path: '/packages/:url',
        _source:    'force_pushed',
    });

    // ------ Products list by category ------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.products_list_by_category,
        route_path: '/category/:uuid',
        _source:    'force_pushed',
    });

    // ------ Wish list ----------------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.wish_list,
        route_path: '/wish-list',
        _source:    'force_pushed',
    });

    // ------ Cart ---------------------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.cart,
        route_path: '/cart',
        _source:    'force_pushed',
    });

    // ------ Checkout ------------------------------------------------------ //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.checkout,
        route_path: '/checkout',
        _source:    'force_pushed',
    });

    // ------ Order complete ------------------------------------------------ //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.order_complete,
        route_path: '/order-complete',
        _source:    'force_pushed',
    });

    // ------ Order details ------------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.order_details,
        route_path: '/order-details/:id',
        _source:    'force_pushed',
    });

    // ------ Membership plan ----------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.membership_plan,
        route_path: '/membership-plan',
        _source:    'force_pushed',
    });

    // ------ Event management ---------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.event_management,
        route_path: '/event-management',
        _source:    'force_pushed',
    });

    // ------ Rentmy dashboard ---------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.rentmy_dashboard,
        route_path: '/rentmy-dashboard',
        _source:    'force_pushed',
    });

    // ------ Customer: login ----------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.login,
        route_path: '/login',
        _source:    'force_pushed',
    });

    // ------ Customer: registration ---------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.registration,
        route_path: '/registration',
        _source:    'force_pushed',
    });

    // ------ Customer: reset password -------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.reset_password,
        route_path: '/reset-password',
        _source:    'force_pushed',
    });

    // ------ Partner: login ------------------------------------------------ //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.partner_login,
        route_path: '/partner-login',
        _source:    'force_pushed',
    });

    // ------ Partner: registration ----------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.partner_registration,
        route_path: '/partner-registration',
        _source:    'force_pushed',
    });

    // ------ Customer: profile --------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.customer_profile,
        route_path: '/profile',
        _source:    'force_pushed',
    });

    // ------ Customer: change password ------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.customer_change_password,
        route_path: '/change-password',
        _source:    'force_pushed',
    });

    // ------ Customer: change avatar --------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.customer_change_avatar,
        route_path: '/change-avatar',
        _source:    'force_pushed',
    });

    // ------ Customer: order history --------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.customer_order_history,
        route_path: '/order-history',
        _source:    'force_pushed',
    });

    // ------ Customer: order dashboard ------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.customer_order_dashboard,
        route_path: '/dashboard',
        _source:    'force_pushed',
    });

    // ------ Customer: billing --------------------------------------------- //
    pushRouteIfNotExist(routes, {
        page_key:   EnumPageKes.customer_billing,
        route_path: '/billing',
        _source:    'force_pushed',
    });

    // ------ Not found ----------------------------------------------------- //
    pushRouteIfNotExist(routes, {
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
        logToFile(`[PushMissingRoutes.ts] [route_pushed] ${route.page_key}`);
    }
}
