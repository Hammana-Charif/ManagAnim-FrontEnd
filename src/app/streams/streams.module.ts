import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamsRoutingModule } from './streams-routing.module';
import {StreamsComponent} from './streams.component';
import {StreamComponent} from './stream/stream.component';
import {StreamListComponent} from './stream-list/stream-list.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    StreamsComponent,
    StreamComponent,
    StreamListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StreamsRoutingModule
  ]
})
export class StreamsModule { }
