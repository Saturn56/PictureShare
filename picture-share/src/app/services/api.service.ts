import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAssetUrl(url: string, authService: AuthenticationService): string {
    return `/api/${url}?authorization=${authService.user?.jwtToken}`;
}

public get(url: string): Observable<any> {
    return this.httpClient.get(`/api/${url}`);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
public post(url: string, data: { [key: string]: any }, options?: any): Observable<any> {
    return this.httpClient.post(`/api/${url}`, data, options);
}

public delete(url: string): Observable<any> {
    return this.httpClient.delete(`/api/${url}`);
}
}
