import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/login.component';
//CORE_REFERENCE_IMPORT-travelRequestDialogComponent
import { travelRequestDialogComponent } from '../components/travelRequestDialog.component';
//CORE_REFERENCE_IMPORT-reportsComponent
import { reportsComponent } from '../components/reports.component';
//CORE_REFERENCE_IMPORT-draftsComponent
import { draftsComponent } from '../components/drafts.component';
//CORE_REFERENCE_IMPORT-profile_dialogComponent
import { profile_dialogComponent } from '../components/profile_dialog.component';
//CORE_REFERENCE_IMPORT-baseComponent
import { baseComponent } from '../components/base.component';
//CORE_REFERENCE_IMPORT-myformserviceService
import { myformserviceService } from '../services/myformservice/myformservice.service';
//CORE_REFERENCE_IMPORT-new_travel_requestComponent
import { new_travel_requestComponent } from '../components/new_travel_request.component';
//CORE_REFERENCE_IMPORT-view_travel_requestsComponent
import { view_travel_requestsComponent } from '../components/view_travel_requests.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-travelRequestDialogComponent
  travelRequestDialogComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-reportsComponent
  reportsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-draftsComponent
  draftsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-profile_dialogComponent
  profile_dialogComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-baseComponent
  baseComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-new_travel_requestComponent
  new_travel_requestComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-view_travel_requestsComponent
  view_travel_requestsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-myformserviceService
  myformserviceService,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'home',
    component: baseComponent,
    children: [
      { path: '', component: view_travel_requestsComponent },
      { path: 'new-request', component: new_travel_requestComponent },
    ],
  },
  { path: 'login', component: loginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
