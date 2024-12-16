import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../shared/data-access/http.service';
import { Promo } from '../../../shared/interfaces/promos.interface';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-form-store',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-store.component.html',
  styleUrl: './form-store.component.css',
  providers: [CurrencyPipe],
})
export default class FormStoreComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(HttpService);
  private fb = inject(FormBuilder);
  private currencyPipe = inject(CurrencyPipe);

  promoId: string | null = null;
  promos: Promo[] = [];
  selectedPromo: Promo | null = null;

  orderForm!: FormGroup;
  quantities: number[] | null = [
    30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180,
  ]; // Opciones de cantidad
  locations = [
    { value: 0, label: 'Córdoba Capital (Sin costo)' },
    { value: 4000, label: 'Villa Allende (+$4,000)' },
    { value: 4000, label: 'La Calera (+$4,000)' },
    { value: 4000, label: 'Mendiolaza (+$4,000)' },
  ];

  ngOnInit(): void {
    this.promoId = this.route.snapshot.paramMap.get('id');

    this.service.getPromos().subscribe((promos) => {
      this.promos = promos;
      const promo = this.promos.find(
        (promo) => promo.id.toString() === this.promoId
      );
      if (promo) this.selectedPromo = promo;
      if (this.selectedPromo?.id == 4) {
        this.quantities = [60];
      }
    });

    this.orderForm = this.fb.group({
      quantity: [null, Validators.required],
      price: ['', Validators.required],
      location: [null, Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    });
  }

  submitOrder(): void {
    if (this.orderForm.valid) {
      const orderData = this.orderForm.value;
      console.log('Pedido realizado:', orderData);

      // Puedes enviar los datos a un servicio o backend
      alert('Pedido confirmado con éxito!');
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

  calculateTotalPrice(): string {
    const quantity: number = this.orderForm.get('quantity')?.value || 0;
    let locationCost: number = Number(this.orderForm.get('location')?.value) || 0;
  
    if (!this.selectedPromo || !quantity) {
      return this.currencyPipe.transform(0, 'ARS') || '$0';
    }
  
    let priceXQuantity: number = 0;
  
    switch (quantity) {
      case 30:
        priceXQuantity = (this.selectedPromo.price_x_30 ?? 0) + locationCost;
        break;
      case 45:
        priceXQuantity = (this.selectedPromo.price_x_45 ?? 0) + locationCost;
        break;
      default:
        if (this.selectedPromo.price_x_60) {
          priceXQuantity =
            (this.selectedPromo.price_x_60 / 60) * quantity + locationCost;
        }
        break;
    }
    console.log(priceXQuantity);
    
    return (
      this.currencyPipe.transform(priceXQuantity, 'ARS', 'symbol', '1.0-2') || '$0'
    );
  }
  
}
