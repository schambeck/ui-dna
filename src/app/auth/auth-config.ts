import { AuthConfig } from 'angular-oauth2-oidc';
import {environment} from "../../environments/environment";

export const authConfig: AuthConfig = {
  issuer: environment.issuer,
  clientId: 'newClient', // The "Auth Code + PKCE" client
  dummyClientSecret: 'newClientSecret',
  responseType: 'code',
  redirectUri: window.location.origin + '/index.html',
  scope: 'openid profile email read write', // Ask offline_access to support refresh token refreshes
  showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
  nonceStateSeparator : 'semicolon', // Real semicolon gets mangled by Duende ID Server's URI encoding
  requireHttps: false
};
