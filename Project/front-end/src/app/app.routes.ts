import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AComponent } from './components/home/subComponents/a/a.component';
import { BComponent } from './components/home/subComponents/b/b.component';
import { CComponent } from './components/home/subComponents/c/c.component';
import { ProductsComponent } from './components/products/products.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MainComponent } from './components/main/main.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  { path: '', component:MainComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    { path: 'home', component: HomeComponent ,title:'Home🏠',
    children:[
          {path:'a',component:AComponent ,title:'A'},
          {path:'b',component:BComponent,title:'B'},
          {path:'c',component:CComponent,title:'C'},
          ]},
    { path: 'about', component: AboutComponent,title:'About🤝' },
    {path:'gallery',component:GalleryComponent,title:'Gallery🖼️'},
    { path: 'products', component: ProductsComponent,title:'Products🛍️' },  
    {path:'cart',component:CartComponent,title:'cart🛒'}  ,
  ]},
  {path:'',component:AuthComponent,children:[
    {path:'login',component:LoginComponent,title:'Login🚪'},
    {path:'signup',component:SignupComponent,title:'Create Account🧾'},
  ]},
  { path:'**',component:NotFoundComponent,title:'404🚷'}
];
    