import { AuthConfig } from 'angular-oauth2-oidc';
import {environment} from "../../environments/environment";

export const authConfig: AuthConfig = {
  issuer: environment.issuer,
  clientId: 'newClient', // The "Auth Code + PKCE" client
  dummyClientSecret: 'newClientSecret', // The "Auth Code + PKCE" client
  responseType: 'code',
  redirectUri: environment.redirectUri,
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  scope: 'openid write read', // Ask offline_access to support refresh token refreshes
  useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
  silentRefreshTimeout: 5000, // For faster testing
  timeoutFactor: 0.25, // For faster testing
  sessionChecksEnabled: true,
  showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
  nonceStateSeparator : 'semicolon' // Real semicolon gets mangled by Duende ID Server's URI encoding
};
