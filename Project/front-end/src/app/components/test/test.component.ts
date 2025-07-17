import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  arr = [1,2,3,4,5,6,7,8,9]
  role = "admin"


  changeRole(){
    this.role="user"
  }
}
