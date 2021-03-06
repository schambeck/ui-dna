import config from '../../auth_config.json';

const { domain, clientId, audience, apiUri, apiNotificationUri, appUri, errorPath, scope } = config as {
  domain: string;
  clientId: string;
  audience?: string;
  apiUri: string;
  apiNotificationUri: string;
  appUri: string;
  errorPath: string;
  scope: string;
};

export const environment = {
  production: false,
  urlBase: 'http://localhost:8080',
  urlBaseNotification: 'http://localhost:9000',
  pollingTimer: 5000,
  auth: {
    domain,
    clientId,
    ...(audience && audience !== 'YOUR_API_IDENTIFIER' ? { audience } : null),
    redirectUri: appUri,
    errorPath,
    scope
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`, `${apiNotificationUri}/*`]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
