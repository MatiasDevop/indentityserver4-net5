import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AuthModule, LogLevel, OidcConfigService } from 'angular-auth-oidc-client';

export function configureAuth(oidcConfigService: OidcConfigService): () => Promise<any> {
    return () =>
        oidcConfigService.withConfig({
            clientId: 'weatherapp',
            stsServer: 'https://localhost:5443',
            responseType: 'code',
            redirectUrl: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            scope: 'openid profile weatherapi.read',
            silentRenew: true,
            logLevel: LogLevel.Debug,
        });
}
