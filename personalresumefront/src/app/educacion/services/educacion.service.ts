import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Education, EducationDto } from '../interfaces/educacion';
import { Observable, map, of, switchMap, throwError } from 'rxjs';
import { LocalStorageService } from 'src/app/auth/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EducacionService{

  private baseUrl:String =environment.baseUrl;
  private sectionUrl:String = "education";

  private options = {}

  constructor(private http:HttpClient,private localStorage:LocalStorageService) { }

  createEducation(educationDto : EducationDto):Observable<HttpEvent<Education>>{
    this.options = this.localStorage.setOptions();
    return this.http.post<HttpEvent<Education>>(`${this.baseUrl}/${this.sectionUrl}`, educationDto, this.options);
  }

  getEducationById(idEducation:String):Observable<Education>{
    return this.http.get<Education>(`${this.baseUrl}/${this.sectionUrl}/${idEducation}`);
  }

  getEducations():Observable<Education[]>{
    return this.http.get<Education[]>(`${this.baseUrl}/${this.sectionUrl}/all`);
  }

  updateEducation(idEducation:String,educationDto : EducationDto):Observable<HttpEvent<Education>>{
    this.options = this.localStorage.setOptions();
    return this.http.patch<HttpEvent<Education>>(`${this.baseUrl}/${this.sectionUrl}/${idEducation}`,educationDto,this.options);
  }

  deleteEducation(idEducation:String):Observable<HttpEvent<Education>>{
    this.options = this.localStorage.setOptions();
    return this.http.delete<HttpEvent<Education>>(`${this.baseUrl}/${this.sectionUrl}/${idEducation}`,this.options);
  }
}
