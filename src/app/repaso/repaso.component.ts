import { Component } from '@angular/core';
import { Elementos } from '../services/interfaces/elementos';
@Component({
  selector: 'app-repaso',
  templateUrl: './repaso.component.html',
  styleUrl: './repaso.component.scss'
})
export class RepasoComponent {

  nombre: String = "Rodrigo"
  edad: number = 26
  alumnos: string[] = []
  curso: number | null = null
  grupo: string | undefined = undefined
  cambioColor: boolean = false
  escondeAlgo: boolean = false
  
  elementos: string[] = ["Primer elemento", "Segundo elemento", "Tercer elemento", "Cuarto Elemento"]
  
  elementos2: Elementos[] = [
    {id: 1, nombre: "Primer elemento"},
    {id: 2, nombre: "Segundo elemento"},
    {id: 3, nombre: "Tercer elemento"},
    {id: 4, nombre: "Cuarto Elemento"},
    {id: 5, nombre: "Quinto Elemento"}
  ]
  
  
  constructor( 
    //private nombreServicio: tipoDeServicio
  ) { //se instancia los microservicios que se vayan a usar

  }
  
  toggleColor(): void{
    this.cambioColor = !this.cambioColor
  }

  ocultarAlgo(): void{
    if(this.escondeAlgo == true){
      this.escondeAlgo = false
    }else{
      this.escondeAlgo = true
    }
  }
}
