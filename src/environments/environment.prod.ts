import config from '../../auth_config.prod.json';

const { domain, clientId, audience, apiUri, apiNotificationUri, errorPath, scope } = config as {
  domain: string;
  clientId: string;
  audience?: string;
  apiUri: string;
  apiNotificationUri: string;
  errorPath: string;
  scope: string;
};

export const environment = {
  production: true,
  urlBase: 'https://sch-api-dna.herokuapp.com',
  urlBaseNotification: 'https://sch-api-notification.herokuapp.com',
  pollingTimer: 5000,
  auth: {
    domain,
    clientId,
    ...(audience && audience !== 'YOUR_API_IDENTIFIER' ? { audience } : null),
    redirectUri: window.location.origin,
    errorPath,
    scope
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`, `${apiNotificationUri}/*`]
  }
};
