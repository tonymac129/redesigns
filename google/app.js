document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");
  const bar = document.getElementById("whole");
  const apps = document.getElementById("apps");
  const v = document.getElementById("v");
  const i = document.getElementById("i");
  const voice = document.getElementById("voice");
  const image = document.getElementById("image");
  const trending = document.getElementById("trending");
  input.addEventListener("focus", function () {
    bar.style.boxShadow = "0px 0px 10px rgb(100, 100, 100)";
    trending.classList.remove("none");
    apps.classList.add("none");
  });
  trending.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  input.addEventListener("blur", function (e) {
    if (!trending.contains(e.relatedTarget)) {
      bar.style.boxShadow = "none";
      trending.classList.add("none");
      apps.classList.remove("none");
    }
  });
  voice.addEventListener("focus", function () {
    bar.style.boxShadow = "0px 0px 10px rgb(100, 100, 100)";
    v.classList.remove("none");
    apps.classList.add("none");
  });
  voice.addEventListener("blur", function () {
    bar.style.boxShadow = "none";
    apps.classList.remove("none");
    v.classList.add("none");
  });
  image.addEventListener("focus", function () {
    bar.style.boxShadow = "0px 0px 10px rgb(100, 100, 100)";
    i.classList.remove("none");
    apps.classList.add("none");
  });
  image.addEventListener("blur", function (e) {
    bar.style.boxShadow = "none";
    apps.classList.remove("none");
    i.classList.add("none");
  });
});
