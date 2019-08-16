/* eslint-disable */
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
  canvas = document.getElementById("canvas");
  anim_container = document.getElementById("animation_container");
  dom_overlay_container = document.getElementById("dom_overlay_container");
  handleComplete();
}
function handleComplete() {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  exportRoot = new lib.Sansnom1();
  stage = new createjs.Stage(canvas);
  stage.addChild(exportRoot);
  //Registers the "tick" event listener.
  fnStartAnimation = function() {
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
  }
  //Code to support hidpi screens and responsive scaling.
  function makeResponsive(isResp, respDim, isScale, scaleType) {
    var lastW, lastH, lastS=1;
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width, h = lib.properties.height;
      var iw = window.innerWidth, ih=window.innerHeight;
      var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
      if(isResp) {
        if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
          sRatio = lastS;
        }
        else if(!isScale) {
          if(iw<w || ih<h)
            sRatio = Math.min(xRatio, yRatio);
        }
        else if(scaleType==1) {
          sRatio = Math.min(xRatio, yRatio);
        }
        else if(scaleType==2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      canvas.width = w*pRatio*sRatio;
      canvas.height = h*pRatio*sRatio;
      canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
      canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
      stage.scaleX = pRatio*sRatio;
      stage.scaleY = pRatio*sRatio;
      lastW = iw; lastH = ih; lastS = sRatio;
    }
  }
  makeResponsive(true,'both',false,1);
  fnStartAnimation();
}
