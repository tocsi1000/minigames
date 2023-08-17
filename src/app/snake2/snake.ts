
export class Snake {
    cells: SnakeCell[] = [{
        pos: 3,
        previousPos: 2
      }, {
        pos: 2,
        previousPos: 1
      },{
        pos: 1,
        previousPos: 0
      }];
}


interface SnakeCell {
    previousPos?: number;
    pos: number;
  }