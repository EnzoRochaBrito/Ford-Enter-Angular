import { Injectable } from '@angular/core';
import axios, { Axios, AxiosResponse } from 'axios';
import { SessionStorageService } from '../localstorage/sessionstorage.service';


@Injectable({
  providedIn: 'root',
})

export class ApiService {

  
  static async login(_nome: string, _senha: string){

    const credencial = {
      nome: _nome,
      senha: _senha
    }

    let value = axios.post('http://localhost:3001/login', credencial);

    value.catch(reason => {
      alert(reason.response.data.message)
    })

    return value.then();
  }

}
