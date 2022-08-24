export const environment = {
  production: false,
  issuer: 'http://localhost:9000/auth/realms/schambeck',
  redirectUri: 'http://localhost:4200/',
  urlBase: 'http://localhost:8080',
  urlBaseNotification: 'http://localhost:8090',
  pollingTimer: 5000
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
