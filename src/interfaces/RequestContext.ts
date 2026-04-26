export interface RequestContext {
  subdomain: string;
  pageKey: string;
  pageSlug: string;
}

// Augment Express Request so req.context is typed throughout the app
declare global {
  namespace Express {
    interface Request {
      context: RequestContext;
    }
  }
}
