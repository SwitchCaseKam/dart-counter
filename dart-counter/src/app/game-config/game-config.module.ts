import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameConfigRoutingModule } from './game-config-routing.module';
import { GameConfigComponent } from './game-config.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    GameConfigComponent
  ],
  imports: [
    CommonModule,
    GameConfigRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatListModule,
    MatSelectModule,
  ]
})
export class GameConfigModule { }
