import { Wave } from './wave.js';

class App {

  constructor() {

    this.canvas = document.createElement('canvas');


    this.ctx = this.canvas.getContext('2d');

    $("#tab-1").append(this.canvas);



    window.addEventListener('resize', this.resize.bind(this), {
      once: false,
      passive: false,
      capture: false,
    });


    this.wave = new Wave();


    this.resize();



    requestAnimationFrame(this.animate.bind(this));
  }


  resize() {

    this.stageWidth = $("#tab-1").width();
    this.stageHeight = $("#tab-1").height();



    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageWidth / 6;



    this.ctx.scale(1, 0.5);


    this.wave.resize(this.stageWidth, this.stageWidth / 3);
  }


  animate(t) {

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageWidth / 3);

    this.wave.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}


window.onload = () => {
  let pago = 0;
  var url = "https://apis.data.go.kr/1360000/BeachInfoservice/getWhBuoyBeach?serviceKey=K5fygs3Ao38zhEsyxA2qi4TnFk1O6Q4Rpwok1XdloMNXSfLFOf1VNbuUV7zKFSIZZvgnFw8Iz2cCqzO0Eyvoyw%3D%3D&numOfRows=1&pageNo=10&dataType=JSON&beach_num=" + beach_num + "&searchTime=" + year + month + date + hours + minutes;
  fetch(url)
    .then(res => res.json())
    .then(toJson => {
      console.log(info)
      pago = toJson.response.body.items.item[0].wh;
      $("#wave-height").text(String(pago) + "m");
      console.log(toJson, 1);
      setTimeout(() => {

        console.log(info);
        if (info.wind_speed / 24 + pago / 4 < 0.5) {
          $("#danger").text("관심");
          $("#danger_info").text("파도가 완만해 수영할 수 있습니다.")
        } else if (info.wind_speed / 24 + pago / 4 < 1) {
          $("#danger").text("주의");
          $("#danger_info").text("너울성 파도와 부분적 이안류가 발생해 수영 시에는 주의해야 합니다.")
        } else if (info.wind_speed / 24 + pago / 4 >= 1) {
          $("#danger").text("심각");
          $("#danger_info").text("강한 너울성 파도와 이안류가 발생해 수영이 전면금지됩니다.")
        } else {
          $("#danger").text("주의보 정보 없음");
        }

      }, 1000);
    });
  new App();
};