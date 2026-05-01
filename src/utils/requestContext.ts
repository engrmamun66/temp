import { AsyncLocalStorage } from "async_hooks";

export const requestContext = new AsyncLocalStorage<{
  sessionId: string;
  cacheEnabled: boolean;
  requestOrigin: string;
}>();
