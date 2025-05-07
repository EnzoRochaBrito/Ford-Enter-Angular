import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api/api.service';
import { Veiculo, Veiculos, VeiculosAPI } from '../../../utils/models/vehicle/vehicle.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { VehicleData } from '../../../utils/models/vehicle/vehicleData.model';
import { UserComponent } from '../../components/user/user.component';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, CardComponent, CommonModule, ReactiveFormsModule, UserComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  cardStyleDashboard = {'width': '20vw'}
  cardStyleVin = {'width': 'max-content', 'height': 'max-content'}

  vehicles!: Veiculos;
  vehicleData!: VehicleData;
  selectedVehicle!: Veiculo;
  selectCarForm = new FormGroup({
    carSelect: new FormControl('')
  });

  searchCarVinForm = new FormGroup({
    vinInput: new FormControl('')
  })

  onChanges(){

    // https://www.digitalocean.com/community/tutorials/angular-reactive-forms-valuechanges
    
    this.selectCarForm.controls.carSelect.valueChanges.subscribe(id => { // mudar pelo select
      this.selectedVehicle = this.getVehicleById(Number(id));
    })

    this.searchCarVinForm.controls.vinInput.valueChanges // mudar pelo vin
      .pipe(debounceTime(300), filter((a:any) => a.trim().length > 19))
      .subscribe((vin:string) => this.getVehicleDataById(vin))

  }

  async ngOnInit(){
    this.vehicles = (await ApiService.vehicles()).vehicles;
    this.onChanges();
  }

  getVehicleById(id: number){
    return this.vehicles[id-1];
  }

  async getVehicleDataById(vin: string){
    this.vehicleData = await ApiService.vehiclesData(vin);
  }
  
}
