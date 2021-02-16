import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m  => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m  => m.HomeModule)
  },
  {
    path: 'scans',
    loadChildren: () => import('./scans/scans.module').then(m  => m.ScansModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m  => m.SearchModule)
  },
  {
    path: 'streams',
    loadChildren: () => import('./streams/streams.module').then(m  => m.StreamsModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
