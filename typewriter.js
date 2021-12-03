var i = 0;
var txt = 'I am Jinkai';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
 

}