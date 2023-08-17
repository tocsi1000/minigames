import { Component, ElementRef, AfterViewInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-amoba',
  templateUrl: './amoba.component.html',
  styleUrls: ['./amoba.component.css']
})
export class AmobaComponent implements AfterViewInit {
  @ViewChild('a0') a0:ElementRef;
  @ViewChild('b0') b0:ElementRef;
  @ViewChild('c0') c0:ElementRef;
  @ViewChild('d0') d0:ElementRef;
  @ViewChild('e0') e0:ElementRef;
  @ViewChild('f0') f0:ElementRef;
  @ViewChild('g0') g0:ElementRef;
  @ViewChild('h0') h0:ElementRef;
  @ViewChild('i0') i0:ElementRef;
  @ViewChild('j0') j0:ElementRef;
  @ViewChild('a1') a1:ElementRef;
  @ViewChild('b1') b1:ElementRef;
  @ViewChild('c1') c1:ElementRef;
  @ViewChild('d1') d1:ElementRef;
  @ViewChild('e1') e1:ElementRef;
  @ViewChild('f1') f1:ElementRef;
  @ViewChild('g1') g1:ElementRef;
  @ViewChild('h1') h1:ElementRef;
  @ViewChild('i1') i1:ElementRef;
  @ViewChild('j1') j1:ElementRef;
  @ViewChild('a2') a2:ElementRef;
  @ViewChild('b2') b2:ElementRef;
  @ViewChild('c2') c2:ElementRef;
  @ViewChild('d2') d2:ElementRef;
  @ViewChild('e2') e2:ElementRef;
  @ViewChild('f2') f2:ElementRef;
  @ViewChild('g2') g2:ElementRef;
  @ViewChild('h2') h2:ElementRef;
  @ViewChild('i2') i2:ElementRef;
  @ViewChild('j2') j2:ElementRef;
  @ViewChild('a3') a3:ElementRef;
  @ViewChild('b3') b3:ElementRef;
  @ViewChild('c3') c3:ElementRef;
  @ViewChild('d3') d3:ElementRef;
  @ViewChild('e3') e3:ElementRef;
  @ViewChild('f3') f3:ElementRef;
  @ViewChild('g3') g3:ElementRef;
  @ViewChild('h3') h3:ElementRef;
  @ViewChild('i3') i3:ElementRef;
  @ViewChild('j3') j3:ElementRef;
  @ViewChild('a4') a4:ElementRef;
  @ViewChild('b4') b4:ElementRef;
  @ViewChild('c4') c4:ElementRef;
  @ViewChild('d4') d4:ElementRef;
  @ViewChild('e4') e4:ElementRef;
  @ViewChild('f4') f4:ElementRef;
  @ViewChild('g4') g4:ElementRef;
  @ViewChild('h4') h4:ElementRef;
  @ViewChild('i4') i4:ElementRef;
  @ViewChild('j4') j4:ElementRef;
  @ViewChild('a5') a5:ElementRef;
  @ViewChild('b5') b5:ElementRef;
  @ViewChild('c5') c5:ElementRef;
  @ViewChild('d5') d5:ElementRef;
  @ViewChild('e5') e5:ElementRef;
  @ViewChild('f5') f5:ElementRef;
  @ViewChild('g5') g5:ElementRef;
  @ViewChild('h5') h5:ElementRef;
  @ViewChild('i5') i5:ElementRef;
  @ViewChild('j5') j5:ElementRef;
  @ViewChild('a6') a6:ElementRef;
  @ViewChild('b6') b6:ElementRef;
  @ViewChild('c6') c6:ElementRef;
  @ViewChild('d6') d6:ElementRef;
  @ViewChild('e6') e6:ElementRef;
  @ViewChild('f6') f6:ElementRef;
  @ViewChild('g6') g6:ElementRef;
  @ViewChild('h6') h6:ElementRef;
  @ViewChild('i6') i6:ElementRef;
  @ViewChild('j6') j6:ElementRef;
  @ViewChild('a7') a7:ElementRef;
  @ViewChild('b7') b7:ElementRef;
  @ViewChild('c7') c7:ElementRef;
  @ViewChild('d7') d7:ElementRef;
  @ViewChild('e7') e7:ElementRef;
  @ViewChild('f7') f7:ElementRef;
  @ViewChild('g7') g7:ElementRef;
  @ViewChild('h7') h7:ElementRef;
  @ViewChild('i7') i7:ElementRef;
  @ViewChild('j7') j7:ElementRef;
  @ViewChild('a8') a8:ElementRef;
  @ViewChild('b8') b8:ElementRef;
  @ViewChild('c8') c8:ElementRef;
  @ViewChild('d8') d8:ElementRef;
  @ViewChild('e8') e8:ElementRef;
  @ViewChild('f8') f8:ElementRef;
  @ViewChild('g8') g8:ElementRef;
  @ViewChild('h8') h8:ElementRef;
  @ViewChild('i8') i8:ElementRef;
  @ViewChild('j8') j8:ElementRef;
  @ViewChild('a9') a9:ElementRef;
  @ViewChild('b9') b9:ElementRef;
  @ViewChild('c9') c9:ElementRef;
  @ViewChild('d9') d9:ElementRef;
  @ViewChild('e9') e9:ElementRef;
  @ViewChild('f9') f9:ElementRef;
  @ViewChild('g9') g9:ElementRef;
  @ViewChild('h9') h9:ElementRef;
  @ViewChild('i9') i9:ElementRef;
  @ViewChild('j9') j9:ElementRef;

  fields: ElementRef[] = [];

  currentPlayer = 'a';

  fieldOfA = [];
  fieldOfB = [];

  pointofA:number=0;
  pointofB:number=0;

  constructor( private render:Renderer2) { }

  ngAfterViewInit(): void {
    this.fields.push(this.a0, this.a1, this.a2, this.a3, this.a4, this.a5, this.a6, this.a7, this.a8, this.a9,
                      this.b0, this.b1, this.b2, this.b3, this.b4, this.b5, this.b6, this.b7, this.b8, this.b9,
                      this.c0, this.c1, this.c2, this.c3, this.c4, this.c5, this.c6, this.c7, this.c8, this.c9,
                      this.d0, this.d1, this.d2, this.d3, this.d4, this.d5, this.d6, this.d7, this.d8, this.d9,
                      this.e0, this.e1, this.e2, this.e3, this.e4, this.e5, this.e6, this.e7, this.e8, this.e9,
                      this.f0, this.f1, this.f2, this.f3, this.f4, this.f5, this.f6, this.f7, this.f8, this.f9,
                      this.g0, this.g1, this.g2, this.g3, this.g4, this.g5, this.g6, this.g7, this.g8, this.g9,
                      this.h0, this.h1, this.h2, this.h3, this.h4, this.h5, this.h6, this.h7, this.h8, this.h9,
                      this.i0, this.i1, this.i2, this.i3, this.i4, this.i5, this.i6, this.i7, this.i8, this.i9,
                      this.j0, this.j1, this.j2, this.j3, this.h4, this.j5, this.j6, this.j7, this.j8, this.j9);
                    }
  
  onClickColumn(id:number){
    this.render.setStyle(this.fields[id].nativeElement, 'pointer-events', 'none');
        if (this.currentPlayer==='a') {
          this.render.addClass(this.fields[id].nativeElement, 'cross');
          this.fieldOfA.push(id);
          this.currentPlayer='b';
          this.isThereAMatch(this.fieldOfA);
        } else {
          this.render.addClass(this.fields[id].nativeElement, 'dot');
          this.fieldOfB.push(id);
          this.currentPlayer='a';
          this.isThereAMatch(this.fieldOfB);
        } 
      }  

  isThereAMatch(fieldArray: Array<number>){
    fieldArray.sort();
    const element1:number=fieldArray[0];
      if ((fieldArray.includes((element1+1)) && (fieldArray.includes((element1+2))) && (fieldArray.includes((element1+3))) && (fieldArray.includes((element1+4)))) ||
      (fieldArray.includes((element1+10)) && (fieldArray.includes((element1+20))) && (fieldArray.includes((element1+30))) && (fieldArray.includes((element1+40)))) ||
      (fieldArray.includes((element1+9)) && (fieldArray.includes((element1+18))) && (fieldArray.includes((element1+27))) && (fieldArray.includes((element1+36)))) ||
      (fieldArray.includes((element1+11)) && (fieldArray.includes((element1+22))) && (fieldArray.includes((element1+33))) && (fieldArray.includes((element1+44))))
      )   
      {
        if (this.currentPlayer==='a') {
          this.pointofA++;
          console.log ('a won')
        } else {
          this.pointofB++;
          console.log ('b won')
        }
      }
  }

  clearAll(){
    for (let i =0; i<=100; i++) {
      if (this.fieldOfA.includes(i)) {
        this.render.removeClass(this.fields[i].nativeElement, 'cross');
        this.render.removeStyle(this.fields[i].nativeElement, 'pointer-events')
      } else if (this.fieldOfB.includes(i)) {
        this.render.removeClass(this.fields[i].nativeElement, 'dot');
        this.render.removeStyle(this.fields[i].nativeElement, 'pointer-events')
      }
    } 
    this.fieldOfA=[];
    this.fieldOfB=[];
  }

}

