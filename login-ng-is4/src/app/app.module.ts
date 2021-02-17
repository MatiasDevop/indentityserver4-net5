import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule, OidcConfigService } from 'angular-auth-oidc-client';

import { AppComponent } from './app.component';
import { configureAuth } from './auth/auth-config.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot(),
    //AuthConfigModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [
    OidcConfigService,
    {
       provide : APP_INITIALIZER,
       useFactory: configureAuth,
       deps: [OidcConfigService],
       multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
