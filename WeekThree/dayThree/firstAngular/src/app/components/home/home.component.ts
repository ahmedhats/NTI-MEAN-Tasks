import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // one way data binding , text interpolation{{}}
  name = "ahmed"
  greeting(name:string){
    return `Hello ${name}`
  }


  imgUrl = "/images/car.jpg"
  imgAlt ="Car images"
  customAtr = "custom Attribute"
}
