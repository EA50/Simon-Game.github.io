$(document).ready(function(){var e=0;function i(){$(document).keypress(function(e){var i;(!0==(i=e)||"Enter"==i.key)&&t.rdmDiv(),$("body").hasClass("game-over")&&$("body").removeClass("game-over")})}i();let t=new function s(){this.x=[],this.rdmDiv=function(){e++,$("h1").text("Level "+e),this.x.push(Math.floor(4*Math.random())+1),console.log(this.x),function e(i){function s(e){return new Promise(i=>{setTimeout(()=>i(""),e)})}async function o(e){for(let i of e)await s(750),n(i)}$(document).off("keypress"),o(i),t.divOnClick(t.x)}(this.x)},this.divOnClick=function(i){$(document).click(function(s){this.y=[...i],this.target=s.target.id,this.divComparison="d2-"+this.y[0],this.target==this.divComparison?(n(this.y[0]),this.y.shift(),$(document).off("click"),0==this.y?(t.rdmDiv()):t.divOnClick(this.y)):($(document).off("click"),$("h1").text("Game Over, Press Enter to Retry"),e=0,this.gameOver=new Audio("../Sounds/sounds/wrong.mp3"),this.gameOver.play(),t.reset())})},this.reset=function(){this.x=[],$("body").addClass("game-over"),i()}};function n(e){let i=[new Audio("../Sounds/sounds/green.mp3"),new Audio("../Sounds/sounds/red.mp3"),new Audio("../Sounds/sounds/yellow.mp3"),new Audio("../Sounds/sounds/blue.mp3"),];$("#d2-"+e).fadeOut(100).fadeIn(100),i[e-1].play()}});