let lights = document.querySelector(".light")
let darks = document.querySelector(".dark");
let lights_darks = document.querySelector(".light_dark")
let themes = document.querySelector(".theme");

let flag_auto_theme = true;
console.log(lights_darks.classList);
function remove_and_check(active) {
  active.classList.add("active_theme")
  if (lights.classList[1] == "active_theme" && lights != active) {
    lights.classList.remove("active_theme")
  } else if (darks.classList[1] == "active_theme" && darks != active) {
    darks.classList.remove("active_theme")
  } else if (lights_darks.classList[1] == "active_theme" && lights_darks != active) {
    lights_darks.classList.remove("active_theme")
  }
}

darks.addEventListener("click", function (e) {
  flag_auto_theme = false;
  let main_styles = document.querySelector(".main_style")
  remove_and_check(darks)
  if (main_styles.getAttribute("href").indexOf("../") == "-1") {
    themes.href = "style/dark.css";
    console.log("if", main_styles.href);
  } else {
    console.log("else");
    themes.href = "../style/dark.css";
  }
});


lights.addEventListener("click", function (e) {
  flag_auto_theme = false;
  let main_styles = document.querySelector(".main_style")
  remove_and_check(lights)
  if (main_styles.getAttribute("href").indexOf("../") == "-1") {
    themes.href = "style/style.css";
    console.log("if", main_styles.href);
  } else {
    console.log("else");
    themes.href = "../style/style.css";
  }
});


lights_darks.addEventListener("click", function (e) {
  console.log("sdfghjklkjdfghjklbvfdfghjkdfghjk");
  flag_auto_theme = true;
  funTheme()
  remove_and_check(lights_darks)
});




function funTheme() {
  if (flag_auto_theme) {
    let main_styles = document.querySelector(".main_style")
    let time = new Date();
    console.log(time.getHours());
    let theme = document.querySelector(".theme");
    if (main_styles.getAttribute("href").indexOf("../") == "-1") {
      if (time.getHours() <= "8" && time.getHours() <= "20") {
        console.log("if");
        themes.href = "style/dark.css";
      } else {
        console.log("else");
        themes.href = "style/style.css";
      }
    } else {
      if (time.getHours() <= "8" && time.getHours() <= "20") {
        console.log("if");
        themes.href = "../style/dark.css";
      } else {
        console.log("else");
        themes.href = "../style/style.css";
      }
    }
  }
}
funTheme()
setInterval(funTheme, 60 * 1000)
