import { handleBlogPage } from './blogPageControl';
import { handleFilePage } from './filePageControl';
import { handleGenericApiPage } from './genericApiPageControl';
import { handleHomePage } from './homePageControl';
import { handleProductDetailsPage } from './productDetailsPageControl';
import { handleProductsListByCategoryPage } from './productsListByCategoryPageControl';
import { handleProductsListPage } from './productsListPageControl';
import { PageWiseControlContext, PageWiseControlResult } from './types';

export async function handlePageWiseControl(ctx: PageWiseControlContext): Promise<PageWiseControlResult> {
  const handlers = [
    handleFilePage,
    handleHomePage,
    handleProductsListPage,
    handleProductDetailsPage,
    handleProductsListByCategoryPage,
    handleBlogPage,
    handleGenericApiPage,
  ];

  
  for (const handler of handlers) {
    const result = await handler(ctx);
    console.log({handled_result: result});
    if (result.handled) return result;
  }

  console.log({handled_result: '__failed__'});
  return { handlerName: 'pageWiseControl.unhandled', handled: false };
}

export type { PageMetaOptions, PageWiseControlContext, PageWiseControlResult } from './types';
