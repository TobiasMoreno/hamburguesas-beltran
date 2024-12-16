import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => import('./store.component')    
    },
    {
        path: 'shop/:id',
        loadComponent: () => import('./form-store/form-store.component')    
    }
] as Routes
