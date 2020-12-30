import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MidiaService {

  constructor(private http: HttpClient) { }

  uploadPhoto(file: File): Observable<any> {
    let data: FormData = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'vn57rnbc')
    data.append('cloud_name', 'dklzevfxp')

    return this.http.post('https://api.cloudinary.com/v1_1/dklzevfxp/image/upload', data)
  }

  editPhoto(file: File): Observable<any> {
    let data: FormData = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'vn57rnbc')
    data.append('cloud_name', 'dklzevfxp')

    return this.http.put('https://api.cloudinary.com/v1_1/dklzevfxp/image/upload', data)
  }
}
