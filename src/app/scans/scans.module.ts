import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScansRoutingModule } from './scans-routing.module';
import {ScansComponent} from './scans.component';
import {ScanListComponent} from './scan-list/scan-list.component';
import {ScanComponent} from './scan/scan.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ScansComponent,
    ScanListComponent,
    ScanComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ScansRoutingModule
  ]
})
export class ScansModule { }
