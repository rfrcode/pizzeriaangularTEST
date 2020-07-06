import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { ValidatorsModule } from '@pizzeria/validators'


@NgModule({
  declarations: [CoreComponent],
  imports: [
    ValidatorsModule
  ],
  exports: [CoreComponent]
})
export class CoreModule { }
