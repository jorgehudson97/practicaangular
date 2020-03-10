import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ApiWeatherComponent } from './weathercomponent/apiweather.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostApiComponent } from './postcomponent/postapi.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'apiweather', component: ApiWeatherComponent},
  {path: 'postapi', component: PostApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
