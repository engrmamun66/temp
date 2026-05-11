import { StoreResult } from '../services/ApiClient';
import { RskRoute } from '../interfaces';
import { env } from '../config/env';
import { SessionOverrideService } from '../services/SessionOverrideService';
import { logToFile } from '../utils/fileLogger';

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
  build(storeResult: StoreResult, routes: RskRoute[], subdomain = ''): RentMyGlobal {
    const page: Record<string, string> = {};
    for (const route of routes) {
      page[route.page_key] = route.route_path.replace(/:([a-zA-Z_]+)/g, '{$1}');
    }
    const store = (storeResult?.store ?? {}) as Record<string, unknown>;
    const location = (storeResult?.location ?? {}) as Record<string, unknown>;
    const storeId = this.getScalar(store.id);
    const locationId = this.getScalar(location.id);
    const storeName = this.getString(store, 'slug') || this.getString(store, 'name') || subdomain;

    if (!storeId) {
      logToFile('[RentMyGlobalBuilder] missing store.id', { storeResult });
    }

    return {
      is_rsk: true,
      tailwind: true,
      store_id:     storeId,
      locationId:   locationId,
      store_name:   storeName,
      access_token: this.getString(store, 'token'),
      env: {
        API_BASE_URL:      SessionOverrideService.getInstance().getApiBaseUrl(env.API_BASE_URL),
        ASSET_URL:         SessionOverrideService.getInstance().getAssetUrl(env.ASSET_URL),
        PAYMENT_DOMAIN:    SessionOverrideService.getInstance().getPaymentDomain(env.PAYMENT_DOMAIN),
        AFFILIATE_SDK_URL: env.AFFILIATE_SDK_URL,
      },
      emDateTimePicker: {
        detailsPage_endDatePicker_displayIn:          'modal',
        detailsPage_useRangePicker_for_endDate:       true,
        detailsPage_endDate_allowRightSideTimePicker: true,
        afterAddtoCart_open_widget_datePicker:        false,

        colors: {
          primary_bg: '--brand-primary'
        }

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

  scriptTag(subdomain: string, global: RentMyGlobal, protocol: 'http' | 'https'): string {
    const domain = `${protocol}://${subdomain}.${env.CURRENT_DOMAIN}`;
    return [
      '<script>',
      `var DOMAIN = ${JSON.stringify(domain)};`,
      `var RENTMY_GLOBAL = ${JSON.stringify(global)};`,
      '</script>',
    ].join('\n');
  }

  private getScalar(value: unknown): string {
    return typeof value === 'string' || typeof value === 'number' ? String(value) : '';
  }

  private getString(record: Record<string, unknown>, key: string): string {
    const value = record[key];
    return typeof value === 'string' ? value : '';
  }
}
