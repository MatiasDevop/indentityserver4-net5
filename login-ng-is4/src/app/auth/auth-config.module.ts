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
            //     stsServer: 'https://localhost:5443',//'my-super-sts',
        //     redirectUrl: window.location.origin,
        //     postLogoutRedirectUri: window.location.origin,
        //     clientId: 'interactive', //'please-enter-clientId',
        //     scope: 'openid profile weatherapi.read', // 'openid profile ' + your scopes
        //     responseType: 'code',
        //     silentRenew: true,
        //    // silentRenewUrl: window.location.origin + '/silent-renew.html',
        //     renewTimeBeforeTokenExpiresInSeconds: 10,
        });
}

// @NgModule({
//     imports: [AuthModule.forRoot()],
//     exports: [AuthModule],
//     providers: [
//         OidcConfigService,
//         {
//             provide: APP_INITIALIZER,
//             useFactory: configureAuth,
//             deps: [OidcConfigService],
//             multi: true,
//         },
//     ],
// })
// export class AuthConfigModule {}
