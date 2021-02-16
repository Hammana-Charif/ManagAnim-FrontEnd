import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StreamsComponent} from './streams.component';
import {StreamComponent} from './stream/stream.component';
import {StreamListComponent} from './stream-list/stream-list.component';

const routes: Routes = [
  {
    path: '',
    component: StreamsComponent,
    children: [
      {
        path: 'stream',
        component: StreamComponent
      },
      {
        path: 'stream-list',
        component: StreamListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamsRoutingModule { }
