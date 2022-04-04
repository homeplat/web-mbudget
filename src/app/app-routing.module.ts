import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: UnderConstructionComponent },
  // { path: 'summary/month', component: MonthSumaryComponent },
  // { path: 'summary/annual', component: UnderConstructionComponent },
  // { path: 'settings', component: SettingsComponent },
  // { path: 'test', component: EmptyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
