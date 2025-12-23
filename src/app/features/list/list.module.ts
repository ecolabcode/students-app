import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { listRoutes } from './list.routes';
import { ListPageComponent } from './pages/list-page.component';

@NgModule({
  declarations: [ListPageComponent],
  imports: [CommonModule, ScrollingModule, RouterModule.forChild(listRoutes)],
})
export class ListModule {}
