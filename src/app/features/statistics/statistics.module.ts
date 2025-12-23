import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { statisticsRoutes } from './statistics.routes';

import { GenderComponent } from './components/gender.component';
import { GeneralResultsComponent } from './components/general-results.component';
import { ResumeDataComponent } from './components/resume-data.component';
import { StatisticsPageComponent } from './pages/statistics-page.component';

@NgModule({
  declarations: [
    StatisticsPageComponent,
    ResumeDataComponent,
    GenderComponent,
    GeneralResultsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(statisticsRoutes)],
})
export class StatisticsModule {}
