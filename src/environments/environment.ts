export const environment = {
  production: false,
  issuer: 'https://sch-srv-authorization.herokuapp.com/auth/realms/schambeck',
  redirectUri: 'http://localhost:4200/',
  urlBase: 'http://api-dna.localhost',
  urlBaseNotification: 'http://api-notification.localhost',
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
