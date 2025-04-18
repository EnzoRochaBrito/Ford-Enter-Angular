import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api/api.service';
import { Veiculo, Veiculos, VeiculosAPI } from '../../../utils/models/vehicle.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { VehicleData } from '../../../utils/models/vehicleData.model';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, CardComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  cardStyleDashboard = {'width': '20vw', 'height': '80%'}
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
      .pipe(debounceTime(300))
      .subscribe(vin => this.getVehicleDataById(String(vin)))

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
