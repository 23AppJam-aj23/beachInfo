export class Point {

    constructor(index, x, y) {
      this.x = x;
      this.y = y;
      this.fieldY = y; 
      this.speed = 0.1;
      this.cur = index;
      setTimeout(() => this.max = Number($("#wave-height").text().substring(0,3)) * 100, 1000);
    }
  
    update() {

      this.cur += this.speed;

      this.y = this.fieldY + Math.sin(this.cur) * this.max;
    }
  }