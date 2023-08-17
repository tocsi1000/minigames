import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements AfterViewInit{
  foldedCounter:number=0;
  idOfClicked1:number=0;
  pairsFound=0;
  @ViewChild('0') a1:ElementRef;
  @ViewChild('1') b1:ElementRef;
  @ViewChild('2') c1:ElementRef;
  @ViewChild('3') d1:ElementRef;
  @ViewChild('4') a2:ElementRef;
  @ViewChild('5') b2:ElementRef;
  @ViewChild('6') c2:ElementRef;
  @ViewChild('7') d2:ElementRef;
  @ViewChild('8') a3:ElementRef;
  @ViewChild('9') b3:ElementRef;
  @ViewChild('10') c3:ElementRef;
  @ViewChild('11') d3:ElementRef;

  cards:ElementRef[]=[];
  remainder:ElementRef[]=[];
  pair1:ElementRef[]=[];
  pair2:ElementRef[]=[];
  pair3:ElementRef[]=[];
  pair4:ElementRef[]=[];
  pair5:ElementRef[]=[];
  pair6:ElementRef[]=[];

  constructor(private render:Renderer2) { }

  ngAfterViewInit(): void {
    this.cards.push(this.a1, this.b1, this.c1, this.d1, 
                    this.a2, this.b2, this.c2, this.d2,
                    this.a3, this.b3, this.c3,this.d3); 
    this.randomPairs();
    }

  randomPairs(){
    this.pair1=[];
    this.pair2=[];
    this.pair3=[];
    this.pair4=[];
    this.pair5=[];
    this.pair6=[];
    this.pairsFound=0;
    this.remainder=this.cards.slice();
      for (let j=0; j<=10; j++) {
        let i = Math.floor(Math.random()*(11-j));
        switch (j) {
          case 0 :{
            this.pair1.push(this.remainder[i]);
            break;
          }
          case 1 :{
            this.pair1.push(this.remainder[i]);
            break;
          }
          case 2 :{
            this.pair2.push(this.remainder[i]);
            break;
          }
          case 3 :{
            this.pair2.push(this.remainder[i]);
            break;
          }
          case 4 :{
            this.pair3.push(this.remainder[i]);
            break;
          }
          case 5 :{
            this.pair3.push(this.remainder[i]);
            break;
          }
          case 6 :{
            this.pair4.push(this.remainder[i]);
            break;
          }
          case 7 :{
            this.pair4.push(this.remainder[i]);
            break;
          }
          case 8 :{
            this.pair5.push(this.remainder[i]);
            break;
          }
          case 9 :{
            this.pair5.push(this.remainder[i]);
            break;
          }
          case 10 :{
            this.pair6.push(this.remainder[0], this.remainder[1]);
            break;
          }
          }
          this.remainder.splice(i,1);
        }
      }



  onClickCard(id:number){
    this.foldedCounter+=1;
    if (this.pair1.includes(this.cards[id])){
      this.render.addClass(this.cards[id].nativeElement, 'pair1Folded');
    } else if (this.pair2.includes(this.cards[id])){
      this.render.addClass(this.cards[id].nativeElement, 'pair2Folded');
    } else if (this.pair3.includes(this.cards[id])){
      this.render.addClass(this.cards[id].nativeElement, 'pair3Folded');
    } else if (this.pair4.includes(this.cards[id])){
      this.render.addClass(this.cards[id].nativeElement, 'pair4Folded');
    } else if (this.pair5.includes(this.cards[id])){
      this.render.addClass(this.cards[id].nativeElement, 'pair5Folded');
    } else if (this.pair6.includes(this.cards[id])){
      this.render.addClass(this.cards[id].nativeElement, 'pair6Folded');
    }
    
    if (this.foldedCounter===2) {
      this.seeIfThatsAPair(id, this.idOfClicked1);
    } else {
      this.idOfClicked1=id;
    }
  }

  seeIfThatsAPair(id:number, id2:number){
    
    if ((this.pair1.includes(this.cards[id]) && this.pair1.includes(this.cards[id2])) || 
    (this.pair2.includes(this.cards[id]) && this.pair2.includes(this.cards[id2])) ||
    (this.pair3.includes(this.cards[id]) && this.pair3.includes(this.cards[id2])) ||
    (this.pair4.includes(this.cards[id]) && this.pair4.includes(this.cards[id2])) ||
    (this.pair5.includes(this.cards[id]) && this.pair5.includes(this.cards[id2])) ||
    (this.pair6.includes(this.cards[id]) && this.pair6.includes(this.cards[id2]))) 
      {this.render.addClass(this.cards[id].nativeElement, 'caught');
      this.render.addClass(this.cards[id2].nativeElement, 'caught');
      this.pairsFound+=1;
      console.log(this.pairsFound)
      if (this.pairsFound==6) {
        this.onWinGame();
      }
    }

    else {
      this.cards.forEach(element => {
        this.render.setStyle(element.nativeElement, 'pointer-events', 'none')
      });
      setTimeout(()=> {
        if (this.pair1.includes(this.cards[id])){
          this.render.removeClass(this.cards[id].nativeElement, 'pair1Folded');
        } else if (this.pair2.includes(this.cards[id])){
          this.render.removeClass(this.cards[id].nativeElement, 'pair2Folded');
        } else if (this.pair3.includes(this.cards[id])){
          this.render.removeClass(this.cards[id].nativeElement, 'pair3Folded');
        } else if (this.pair4.includes(this.cards[id])){
          this.render.removeClass(this.cards[id].nativeElement, 'pair4Folded');
        } else if (this.pair5.includes(this.cards[id])){
          this.render.removeClass(this.cards[id].nativeElement, 'pair5Folded');
        } else if (this.pair6.includes(this.cards[id])){
          this.render.removeClass(this.cards[id].nativeElement, 'pair6Folded');
        }

        if (this.pair1.includes(this.cards[id2])){
          this.render.removeClass(this.cards[id2].nativeElement, 'pair1Folded');
        } else if (this.pair2.includes(this.cards[id2])){
          this.render.removeClass(this.cards[id2].nativeElement, 'pair2Folded');
        } else if (this.pair3.includes(this.cards[id2])){
          this.render.removeClass(this.cards[id2].nativeElement, 'pair3Folded');
        } else if (this.pair4.includes(this.cards[id2])){
          this.render.removeClass(this.cards[id2].nativeElement, 'pair4Folded');
        } else if (this.pair5.includes(this.cards[id2])){
          this.render.removeClass(this.cards[id2].nativeElement, 'pair5Folded');
        } else if (this.pair6.includes(this.cards[id2])){
          this.render.removeClass(this.cards[id2].nativeElement, 'pair6Folded');
        }
        this.cards.forEach(element => {
        this.render.removeStyle(element.nativeElement, 'pointer-events')
    });
      }, 2500)
     }
     this.foldedCounter=0;
  }

  onWinGame(){
    setTimeout(()=>{
      this.pair1.forEach(element => {
        this.render.removeClass(element.nativeElement, 'pair1Folded');
      })
      this.pair2.forEach(element => {
        this.render.removeClass(element.nativeElement, 'pair2Folded');
      })
      this.pair3.forEach(element => {
        this.render.removeClass(element.nativeElement, 'pair3Folded');
      })
      this.pair4.forEach(element => {
        this.render.removeClass(element.nativeElement, 'pair4Folded');
      })
      this.pair5.forEach(element => {
        this.render.removeClass(element.nativeElement, 'pair5Folded');
      })
      this.pair6.forEach(element => {
        this.render.removeClass(element.nativeElement, 'pair6Folded');
      })

      this.cards.forEach(element => {
        this.render.removeClass(element.nativeElement, 'caught');
      })

      this.randomPairs();

    }, 2500)

  }

}
