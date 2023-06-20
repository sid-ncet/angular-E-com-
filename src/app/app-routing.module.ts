import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { WildcardrouteComponent } from './wildcardroute/wildcardroute.component';

const routes: Routes = [
  {
    component:ProductComponent,
    path: "product"
  },
  {
    component:CartComponent,
    path:"cart",
    canActivate:[AuthGuardGuard]
  },
  {
    // component:ProductComponent,
    path:"",redirectTo:"product",pathMatch:'full'
    
  },
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:SignupComponent,
    path:"signup"
  },
  {
    component:CardDetailsComponent,
    path:'cardDetail'
  },
  {
    component:WildcardrouteComponent,
    path:"**"

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  navigate: any;
  navigateByUrl(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
}
