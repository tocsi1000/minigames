import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TetrisComponent } from './tetris/tetris.component';
import { MemoryComponent } from './memory/memory.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { DinoComponent } from './dino/dino.component';
import { AmobaComponent } from './amoba/amoba.component';
import { HangmanComponent } from './hangman/hangman.component';
import { Snake2Component } from './snake2/snake2.component';

@NgModule({
  declarations: [
    AppComponent,
    TetrisComponent,
    MemoryComponent,
    TictactoeComponent,
    AmobaComponent,
    DinoComponent,
    HangmanComponent,
    Snake2Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
