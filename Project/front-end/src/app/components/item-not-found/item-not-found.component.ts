import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-not-found',
  standalone:true,
  templateUrl: './item-not-found.component.html',
  styleUrls: ['./item-not-found.component.css']
})
export class ItemNotFoundComponent {
  @Input() name!: string;
}
