import { Injectable } from '@angular/core';
import axios from 'axios';
import { Veiculos, VeiculosAPI } from '../../../utils/models/vehicle.model';


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
  
  static async vehicles(): Promise<VeiculosAPI>{
    let vehicles = axios.get('http://localhost:3001/vehicles');
    
    vehicles.catch(reason => {
      alert(reason.response.data.message)
    })

    return (await vehicles.then()).data;
  }

}
