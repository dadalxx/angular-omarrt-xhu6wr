import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HostChildComponent } from './host-child.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    HostChildComponent
  ],
  exports: [
    HostChildComponent
  ]
})
export class HostChildModule {}