import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
// import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HeaderPage } from '../pages/header/header';
import { FooterPage } from '../pages/footer/footer';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { DashboardListPage } from '../pages/dashboard-list/dashboard-list';
import { BoothListPage } from './../pages/booth-list/booth-list';
import { AddBoothPage } from './../pages/add-booth/add-booth';

import { ShaktiKendraListPage } from './../pages/shakti-kendra-list/shakti-kendra-list';
import { AddSkPage } from './../pages/add-sk/add-sk';

import { BoothSamitiReportPage } from './../pages/booth-samiti-report/booth-samiti-report';
import { ShaktiKendraReportPage } from './../pages/shakti-kendra-report/shakti-kendra-report';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { CommonServiceProvider } from '../providers/common-service/common-service';
import { AddBoothProvider } from '../providers/add-booth/add-booth';

@NgModule({
  declarations: [
    MyApp,
    HeaderPage,
    HomePage,
    FooterPage,
    ListPage,
    LoginPage,
    DashboardListPage,
    BoothListPage,
    AddBoothPage,
    ShaktiKendraListPage,
    AddSkPage,
    BoothSamitiReportPage,
    ShaktiKendraReportPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    // FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FooterPage,
    ListPage,
    LoginPage,
    DashboardListPage,
    BoothListPage,
    AddBoothPage,
    ShaktiKendraListPage,
    AddSkPage,
    BoothSamitiReportPage,
    ShaktiKendraReportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    CommonServiceProvider,
    AddBoothProvider
  ]
})
export class AppModule {}
