import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmobaComponent } from './amoba/amoba.component';
import { DinoComponent } from './dino/dino.component';
import { MemoryComponent } from './memory/memory.component';
import { TetrisComponent } from './tetris/tetris.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { Snake2Component } from './snake2/snake2.component';

const routes: Routes = [
  {path: 'snake2', component:Snake2Component},
  {path: 'dino', component:DinoComponent},
  {path: 'memory', component:MemoryComponent},
  {path: 'tictactoe', component:TictactoeComponent},
  {path: 'amoba', component: AmobaComponent},
  {path: 'tetromino', component:TetrisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
