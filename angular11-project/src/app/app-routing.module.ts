import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const routes: Routes = [
  { path: 'crisis', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true } )],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: (window as any).__POWERED_BY_QIANKUN__ ? '/app-angular11/' : '/' }
  ]
})
export class AppRoutingModule { }
