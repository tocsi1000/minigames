import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {
  @ViewChild('11') a1:ElementRef;
  @ViewChild('12') b1:ElementRef;
  @ViewChild('13') c1:ElementRef;
  @ViewChild('21') a2:ElementRef;
  @ViewChild('22') b2:ElementRef;
  @ViewChild('23') c2:ElementRef;
  @ViewChild('31') a3:ElementRef;
  @ViewChild('32') b3:ElementRef;
  @ViewChild('33') c3:ElementRef;

  currentPlayer = 'a';

  fieldOfA = [];
  fieldOfB = [];

  pointofA:number=0;
  pointofB:number=0;

  constructor( private render:Renderer2) { }

  ngOnInit(): void {
    
  }
  
  onClickColumn(id:number){
    if (this.currentPlayer === 'a') {
      switch (id) {
        case 11: {
          this.render.addClass(this.a1.nativeElement, 'cross'); 
          this.render.setStyle(this.a1.nativeElement, 'pointer-events', 'none');
          break;
        }

        case 12 : {
          this.render.addClass(this.b1.nativeElement, 'cross');
          this.render.setStyle(this.b1.nativeElement, 'pointer-events', 'none');
          break;
        }

        case 13 : {
          this.render.addClass(this.c1.nativeElement, 'cross');
          this.render.setStyle(this.c1.nativeElement, 'pointer-events', 'none');
          break;
        }

        case 21: {
         this.render.addClass(this.a2.nativeElement, 'cross');
         this.render.setStyle(this.a2.nativeElement, 'pointer-events', 'none');
         break;
        }
          
        case 22 : {
          this.render.addClass(this.b2.nativeElement, 'cross');
          this.render.setStyle(this.b2.nativeElement, 'pointer-events', 'none');
          break;
        }
          
        case 23 : {
          this.render.addClass(this.c2.nativeElement, 'cross');
          this.render.setStyle(this.c2.nativeElement, 'pointer-events', 'none');
          break;
        }

        case 31: {
          this.render.addClass(this.a3.nativeElement, 'cross');
          this.render.setStyle(this.a3.nativeElement, 'pointer-events', 'none');
          break;
        }
            
        case 32 : {
          this.render.addClass(this.b3.nativeElement, 'cross');
          this.render.setStyle(this.b3.nativeElement, 'pointer-events', 'none');
          break;
        }
            
        case 33 : {
          this.render.addClass(this.c3.nativeElement, 'cross');
          this.render.setStyle(this.c3.nativeElement, 'pointer-events', 'none');
          break;
          }
      }
      this.fieldOfA.push(id);
      this.isThereAMatch(this.fieldOfA);
      this.currentPlayer='b';

    } else {
      switch (id) {
        case 11: {
          this.render.addClass(this.a1.nativeElement, 'dot');
          this.render.setStyle(this.a1.nativeElement, 'pointer-events', 'none');
          break;
        }
        
        case 12 : {
          this.render.addClass(this.b1.nativeElement, 'dot');
          this.render.setStyle(this.b1.nativeElement, 'pointer-events', 'none');
          break;
        }
        
        case 13 : {
          this.render.addClass(this.c1.nativeElement, 'dot');
          this.render.setStyle(this.c1.nativeElement, 'pointer-events', 'none');
          break;
        }

        case 21: {
          this.render.addClass(this.a2.nativeElement, 'dot');
          this.render.setStyle(this.a2.nativeElement, 'pointer-events', 'none');
          break;
        }
          
        case 22 : {
          this.render.addClass(this.b2.nativeElement, 'dot');
          this.render.setStyle(this.b2.nativeElement, 'pointer-events', 'none');
          break;
        }
          
        case 23 : {
          this.render.addClass(this.c2.nativeElement, 'dot');
          this.render.setStyle(this.c2.nativeElement, 'pointer-events', 'none');
          break;
        }
        case 31: {
          this.render.addClass(this.a3.nativeElement, 'dot');
          this.render.setStyle(this.a3.nativeElement, 'pointer-events', 'none');
          break;
        }
            
        case 32 : {
          this.render.addClass(this.b3.nativeElement, 'dot');
          this.render.setStyle(this.b3.nativeElement, 'pointer-events', 'none');
          break;
        }
            
        case 33 : {
          this.render.addClass(this.c3.nativeElement, 'dot');
          this.render.setStyle(this.c3.nativeElement, 'pointer-events', 'none');
          break;
        }
      }

      this.fieldOfB.push(id);
      this.isThereAMatch(this.fieldOfB);
      this.currentPlayer='a';
    }
  }

  isThereAMatch(fieldArray: Array<number>){
    fieldArray.sort();
    const element1:number=fieldArray[0];
      if ((fieldArray.includes((element1+1)) && (fieldArray.includes((element1+2)))) ||
      (fieldArray.includes((element1+10)) && (fieldArray.includes((element1+20)))) ||
      (fieldArray.includes((element1+9)) && (fieldArray.includes((element1+18)))) ||
      (fieldArray.includes((element1+11)) && (fieldArray.includes((element1+22))))
      )   
      {
        if (this.currentPlayer==='a') {
          this.pointofA++;
          console.log ('a won')

        } else {
          this.pointofB++;
          console.log ('b won')

        }
        this.clearAll();
      } else {
        if (this.fieldOfA.length >=5 || this.fieldOfB.length>=5) {
          console.log('no one wins');
          this.clearAll();
        } else {
          console.log ('no win')
        }
          
      }
  }

  clearAll(){
    this.render.removeClass(this.a1.nativeElement, 'dot');
    this.render.removeClass(this.a1.nativeElement, 'cross');
    this.render.removeStyle(this.a1.nativeElement, 'pointer-events')
    this.render.removeClass(this.b1.nativeElement, 'dot');
    this.render.removeClass(this.b1.nativeElement, 'cross');
    this.render.removeStyle(this.b1.nativeElement, 'pointer-events')    
    this.render.removeClass(this.c1.nativeElement, 'dot');
    this.render.removeClass(this.c1.nativeElement, 'cross');
    this.render.removeStyle(this.c1.nativeElement, 'pointer-events')
    this.render.removeClass(this.a2.nativeElement, 'dot');
    this.render.removeClass(this.a2.nativeElement, 'cross');
    this.render.removeStyle(this.a2.nativeElement, 'pointer-events')
    this.render.removeClass(this.b2.nativeElement, 'dot');
    this.render.removeClass(this.b2.nativeElement, 'cross');
    this.render.removeStyle(this.b2.nativeElement, 'pointer-events')
    this.render.removeClass(this.c2.nativeElement, 'dot');
    this.render.removeClass(this.c2.nativeElement, 'cross');
    this.render.removeStyle(this.c2.nativeElement, 'pointer-events')
    this.render.removeClass(this.a3.nativeElement, 'dot');
    this.render.removeClass(this.a3.nativeElement, 'cross');
    this.render.removeStyle(this.a3.nativeElement, 'pointer-events')
    this.render.removeClass(this.b3.nativeElement, 'dot');
    this.render.removeClass(this.b3.nativeElement, 'cross');
    this.render.removeStyle(this.b3.nativeElement, 'pointer-events')
    this.render.removeClass(this.c3.nativeElement, 'dot');
    this.render.removeClass(this.c3.nativeElement, 'cross');
    this.render.removeStyle(this.c3.nativeElement, 'pointer-events')


    this.fieldOfA=[];
    this.fieldOfB=[];
    console.log(this.fieldOfA);


  }

}

