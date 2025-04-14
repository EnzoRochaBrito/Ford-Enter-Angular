import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class ApiService {

  static async login(_nome: string, _senha: string){
    let _request = await fetch('http://localhost:3001/login', {
      method: "post",
      body: JSON.stringify({ nome : _nome, senha : _senha }
      )
    })
    
    let response = await _request.json();
    console.log(response)
  }

}
