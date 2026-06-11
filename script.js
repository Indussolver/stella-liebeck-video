setTimeout(() => {
  document.getElementById("request").style.opacity = 0;
}, 2000);

setTimeout(() => {
  const offer = document.getElementById("offer");
  offer.style.opacity = 1;
  offer.style.transform = "scale(1.4)";
}, 3500);