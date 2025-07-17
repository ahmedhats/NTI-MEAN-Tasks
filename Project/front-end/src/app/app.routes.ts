import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AComponent } from './components/home/subComponents/a/a.component';
import { BComponent } from './components/home/subComponents/b/b.component';
import { CComponent } from './components/home/subComponents/c/c.component';
import { ProductsComponent } from './components/products/products.component';
import { GalleryComponent } from './components/gallery/gallery.component';

export const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent ,title:'Home🏠',
    children:[
        {path:'a',component:AComponent ,title:'A'},
        {path:'b',component:BComponent,title:'B'},
        {path:'c',component:CComponent,title:'C'}
    ]
  },
  { path: 'about', component: AboutComponent,title:'About🤝' },
  {path:'gallery',component:GalleryComponent,title:'Gallery🖼️'},
  { path: 'products', component: ProductsComponent,title:'Products🛒' },
  { path:'**',component:NotFoundComponent,title:'404🚷'}
];
    