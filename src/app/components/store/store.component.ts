import { Component, inject } from '@angular/core';
import { HttpService } from '../../shared/data-access/http.service';
import { Promo } from '../../shared/interfaces/promos.interface';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export default class StoreComponent {
  private service = inject(HttpService);

  promos: Promo[] = []; 

  constructor() {
    this.service.getData().subscribe((data) => {
      this.promos = data;
    })
  }
}
