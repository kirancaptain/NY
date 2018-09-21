import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from './pages/stats/stats.component';
import { ActivityComponent } from './pages/activity/activity.component';

const routes: Routes = [{
  path: 'stats',
  component: StatsComponent
}, {
  path: 'activity',
  component: ActivityComponent
},{
  path:'',
  redirectTo:'stats',
  pathMatch:'full'
},{
  path:'**',
  redirectTo:'stats',
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
