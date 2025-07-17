import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input( {required:true} ) data!:string; //! => i promise that this isn't going to be null
  @Input() style!:string;
  @Input() function!:string;
}
