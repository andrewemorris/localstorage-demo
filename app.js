console.log("going live");

function matchTheme() {
  let theme = localStorage.getItem("theme")
  const body = document.querySelector("body");
  if (theme === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.add("dark");
  }
}

function setTheme() {
  const body = document.querySelector("body");
  if (localStorage.getItem("theme") === "light" || localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
  }
}

document.getElementById("theme-btn").addEventListener("click", setTheme);

matchTheme();