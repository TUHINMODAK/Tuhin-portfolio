let lang_cont = document.querySelector(".language-container");
let strokes = document.querySelectorAll(".stroke");

function togglebtn() {
  if (lang_cont.classList.contains("inactive")) {
    // do something if 'hasClass' is exist.
    lang_cont.classList.remove('inactive');
    lang_cont.classList.add('active');
    strokes[0].classList.contains('down-left')?strokes[0].classList.remove('down-left'):strokes[0].classList.remove('down-right');
    strokes[1].classList.contains('down-left')?strokes[1].classList.remove('down-left'):strokes[1].classList.remove('down-right');
    strokes[0].classList.add('up-left');
    strokes[1].classList.add('up-right');
  }else{
    lang_cont.classList.remove('active');
    lang_cont.classList.add('inactive');
    strokes[0].classList.contains('up-left')?strokes[0].classList.remove('up-left'):strokes[0].classList.remove('up-right');
    strokes[1].classList.contains('up-left')?strokes[1].classList.remove('up-left'):strokes[1].classList.remove('up-right');
    strokes[0].classList.add('down-left');
    strokes[1].classList.add('down-right');
  }
}
