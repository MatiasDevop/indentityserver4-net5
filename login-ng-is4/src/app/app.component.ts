import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'login-ng-is4';
  
  weatherData:{
    date:string,
    temperatureC: string,
    summary: string,
  }[];

  constructor(private oidcSecuriryService: OidcSecurityService,
    private http: HttpClient){
      
    }

  ngOnInit(): void {
    this.oidcSecuriryService
        .checkAuth()
        .subscribe((auth) => console.log('is authenticated', auth));
  }

  login(){
    this.oidcSecuriryService.authorize();
  }
  
  callApi(){
    const token = this.oidcSecuriryService.getIdToken();
    
    console.log(token);
    this.http.get('https://localhost:5445/WeatherForecast/', {
      headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
      }),
      responseType: 'json'
    })
      .subscribe((data: any) => {
        this.weatherData = data;
        console.log("api result:", data);
      });
  }

}
