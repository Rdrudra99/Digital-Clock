const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

// function
setInterval(function time() {
  let dateToday = new Date();
  // console.log(dateToday);

  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();
  // console.log(hr,min,sec);

  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  hour.textContent = hr;
  minute.textContent = min;
  second.textContent = sec;
}, 1000);

// code for dark and light mode

const btn = document.querySelector("a");

// btn.addEventListener("click", darkTheme());

btn.onclick = function darkTheme() {
  document.body.classList.toggle("dark-theme");
};

//fullscreen code
const myDocument = document.documentElement;
const fullscreen = document.querySelector("#fullscreen");

fullscreen.addEventListener("click", () => {
  if (fullscreen.textContent == "Go FullScreen") {
    if (myDocument.requestFullscreen) {
      myDocument.requestFullscreen();
    } else if (myDocument.msRequestFullscreen) {
      myDocument.msRequestFullscreen();
    } else if (myDocument.mozRequestFullscreen) {
      myDocument.mozRequestFullscreen();
    } else if (myDocument.webkitRequestFullscreen) {
      myDocument.webkitRequestFullscreen();
    }
    fullscreen.textContent = "Exit Fullscreen";
  } else {
    fullscreen.textContent = "Go FullScreen";
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msexitFullscreen) {
      document.msexitFullscreen();
    } else if (document.webkitexitFullscreen) {
      document.webkitexitFullscreen();
    }
  }
});
