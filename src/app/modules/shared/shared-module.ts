import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Busy } from './busy/busy';
import { PlusButton } from './plus-button/plus-button';

@NgModule({
  declarations: [
    Header,
    Busy,
  ],
  imports: [
    CommonModule,
    PlusButton,
  ],
  exports: [
    Header,
    Busy,
   
  ],
})
export class SharedModule { }
