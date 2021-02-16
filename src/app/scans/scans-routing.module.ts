import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScanListComponent} from './scan-list/scan-list.component';
import {ScansComponent} from './scans.component';
import {ScanComponent} from './scan/scan.component';

const routes: Routes = [
  {
    path: '',
    component: ScansComponent,
    children: [
      {
        path: 'scan-list',
        component: ScanListComponent
      },
      {
        path: 'scan',
        component: ScanComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScansRoutingModule { }
