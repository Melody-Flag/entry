var autoplay = false;
loadMusic();

async function toggleMusic(to) {
  var exception = false;
  try {
    if (to) {
      await document.querySelector("video").play();
    } else {
      document.querySelector("video").pause();
    }
    autoplay = to;
  } catch (e) {
    autoplay = false;
    exception = true;
  }

  if (window.autoplay) {
    document.querySelector("#autoplay").classList.remove("delete");
  } else {
    document.querySelector("#autoplay").classList.add("delete");
    document.querySelector("#autoplay").removeAttribute("autoplay");
  }
  if (!exception) {
    localStorage.setItem("autoplay", to);
  }
}

function loadMusic() {
  autoplay = localStorage.getItem("autoplay");
  autoplay = autoplay && autoplay !== "false" && autoplay !== "0";
  toggleMusic(autoplay);
}
