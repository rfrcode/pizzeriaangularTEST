import { Injectable } from '@angular/core';
// Correcto:
import { ValidatorsService } from '@pizzeria/validators'
// Incorrecto:
//import { ValidatorsService } from 'projects/pizzeria/validators/src/public-api'
// TODO estudiar módulos npm que empiezan por @ y resolver dependencias
// del mismo repositorio

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private service: ValidatorsService) {
    console.log(service)
  }
}
