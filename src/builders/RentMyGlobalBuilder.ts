import { StoreResult } from '../services/ApiClient';
import { RouteConfig } from '../interfaces/StoreConfig';
import { env } from '../config/env';

export interface RentMyGlobal {
  store_id: string;
  locationId: string;
  store_name: string;
  access_token: string;
  env: Record<string, unknown>;
  emDateTimePicker: Record<string, unknown>;
  google_map: Record<string, unknown>;
  home_url: string;
  product_pacakge_by_slug: boolean;
  contents: Record<string, unknown>;
  page: Record<string, string>;
  [key: string]: unknown;
}

export class RentMyGlobalBuilder {
  build(storeResult: StoreResult, routes: RouteConfig[]): RentMyGlobal {
    const page: Record<string, string> = {};
    for (const route of routes) {
      page[route.page_key] = route.page_slug.replace(/:([a-zA-Z_]+)/g, '{$1}');
    }

    return {
      store_id:     String(storeResult.store.id),
      locationId:   String(storeResult.location.id),
      store_name:   String(storeResult.store.name),
      access_token: storeResult.store.token,
      env: {},
      emDateTimePicker: {
        detailsPage_endDatePicker_displayIn:          'modal',
        detailsPage_useRangePicker_for_endDate:       true,
        detailsPage_endDate_allowRightSideTimePicker: true,
        afterAddtoCart_open_widget_datePicker:        false,
      },
      google_map: { zoom: 11 },
      home_url: '/',
      product_pacakge_by_slug: true,
      contents: {
        pages:              true,
        navigation:         true,
        use_dynamic_labels: true,
      },
      page,
    };
  }

  scriptTag(subdomain: string, global: RentMyGlobal): string {
    const domain = `https://${subdomain}.${env.CURRENT_DOMAIN}`;
    return [
      '<script>',
      `var DOMAIN = ${JSON.stringify(domain)};`,
      `var RENTMY_GLOBAL = ${JSON.stringify(global)};`,
      '</script>',
    ].join('\n');
  }
}
