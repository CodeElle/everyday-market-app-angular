import { Injectable, inject } from '@angular/core';
import { CoreModule } from '../core-module';
import { Category } from '../../../model/category';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: CoreModule
})
export class Categories {
  // Alternative: private readonly http = inject(HttpClient);
  constructor(private readonly http: HttpClient) { }

  loadCategories(): Promise<Category[]> {
    return firstValueFrom(
      this.http.get<Category[]>(`${this.apiUri}products/categories`)
    );
  }
  private readonly apiUri = environment.marketApiBaseUri;

 
}
