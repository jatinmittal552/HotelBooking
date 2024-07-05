import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  resultedarray:any[]=[];

  constructor() { }

  setMessage(data:any){
    this.resultedarray.push(data)
  }

  getMessage(){
    return this.resultedarray;
  }
}
