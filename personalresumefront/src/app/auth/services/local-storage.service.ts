import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

 
  constructor() { }

  
  setItem(key: string, value: any): void {
    localStorage.setItem(key, value);
  }


  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

 
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

 
  clear(): void {
    localStorage.clear();
  }

  setOptions():Object{
    let options;
    let user:String | null= localStorage.getItem("user")
    let password:String | null= localStorage.getItem("password")

    return options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(user + ':' + password)
      })
    };
  }
}
