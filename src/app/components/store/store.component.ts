import { Component, inject } from '@angular/core';
import { HttpService } from '../../shared/data-access/http.service';
import { Promo } from '../../shared/interfaces/promos.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export default class StoreComponent {
  private service = inject(HttpService);

  promos: Promo[] = []; 

  constructor() {
    this.service.getPromos().subscribe((data) => {
      this.promos = data;
    })
  }
}
