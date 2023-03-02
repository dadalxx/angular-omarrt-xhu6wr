import { Component } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css'],
  providers: [{ provide: FlowerService, useValue: { emoji: '🌼' } }]
})
export class HostComponent {
  constructor(public flower: FlowerService) {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
