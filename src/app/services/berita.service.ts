import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeritaService {
  constructor(private http: HttpClient) { }

  public getBeritaTerbaru(): Observable<any> {
    return this.http.get(`https://honoredminute.backendless.app/api/data/berita?pageSize=10&sortBy=%60created%60%20desc&loadRelations=pejabat`);
  }
}
