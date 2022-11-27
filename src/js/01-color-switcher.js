const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
  

    // colorValueText: document.querySelector(".color"),
};

let idStart = null;
refs.btnStart.addEventListener('click', onClickBtnStart);
refs.btnStop.addEventListener('click', onClickBtnStop);




function onClickBtnStart() {
  idStart = setInterval(() => {
    refs.body.style.backgroundColor =
        getRandomHexColor();
    //   refs.colorValueText.textContent = getRandomHexColor();
  }, 1000);

  refs.btnStart.disabled = true;
}

function onClickBtnStop() {
  refs.btnStart.disabled = false;
  clearInterval(idStart);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
