import { App } from './app';
import { env } from './config/env';

class Server {
  private app: App;

  constructor() {
    this.app = new App();
  }

  start(): void {
    const httpServer = this.app.getExpress().listen(env.PORT, () => {
      console.log(`[Server] Running on port ${env.PORT} (${env.NODE_ENV})`);
      console.log(`[Server] Domain: ${env.CURRENT_DOMAIN} | Dev subdomain: ${env.SUBDOMAIN_FOR_DEV}`);
      console.log(`Server running at http://localhost:${env.PORT}`)
    });

    process.on('SIGTERM', () => {
      console.log('[Server] SIGTERM received – shutting down');
      httpServer.close(() => process.exit(0));
    });

    process.on('SIGINT', () => {
      console.log('[Server] SIGINT received – shutting down');
      httpServer.close(() => process.exit(0));
    });
  }
}

new Server().start();
