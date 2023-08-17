import { Component, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-snake2',
  templateUrl: './snake2.component.html',
  styleUrls: ['./snake2.component.css']
})
export class Snake2Component implements OnInit {
  size:number[] = new Array(400);
  snake:number[]=[202,201,200];
  length:number=3;
  food:number;
  direction:string = 'right';
  newfield:number;
  myInterval;

  constructor() { }
  //snakehead szar még

  @HostListener('window:keydown.ArrowLeft',  ['$event']) handleKeyLeft(event: KeyboardEvent) {
   this.direction='left'; 
   this.drawSnake();
  }
  @HostListener('window:keydown.ArrowRight',  ['$event']) handleKeyRight(event: KeyboardEvent) {
    this.direction='right'; 
   this.drawSnake(); 
  }

  @HostListener('window:keydown.ArrowUp',  ['$event']) handleKeyUp(event: KeyboardEvent) {
    this.direction='up'; 
   this.drawSnake();
  }

  @HostListener('window:keydown.ArrowDown',  ['$event']) handleKeyDown(event: KeyboardEvent) {
    this.direction='down'; 
   this.drawSnake();
  }

  ngOnInit(): void {
    this.drawFood();
    this.drawSnake();
  }

  drawFood(){
    this.food=Math.floor(Math.random()*400);
    if (this.snake.includes(this.food)) {
      this.drawFood();
    }
  }


  drawSnake(){
    clearInterval(this.myInterval);
    this.myInterval=setInterval(()=>{
      switch (this.direction)  {
        case 'left': {
          if (this.snake[0]%20==0) {
            this.newfield=this.snake[0]+19}
          else {this.newfield=this.snake[0]-1};
          break;
        }
        case 'right': {
          if (this.snake[0]%20==19) {
            this.newfield=this.snake[0]-19}
          else {this.newfield=this.snake[0]+1};
          break;
        }
        case 'up': {
          if (this.snake[0]<=19) {
            this.newfield=this.snake[0]+380}
          else {this.newfield=this.snake[0]-20};
          break;
        }
        case 'down': {
          if (this.snake[0]>379) {
            this.newfield=this.snake[0]-380}
          else {this.newfield=this.snake[0]+20};
          break;
        }
      }
      this.snake=this.snake.slice(0,-1);
      this.snake.unshift(this.newfield);
      this.checkIfFed();
    },1000)
    
  }

  checkIfFed(){
    if(this.snake[0]==this.food) {
      this.drawFood();
      this.snake.push(this.snake[length-1]);
      this.length+=1;    
    }
  }

  
}
