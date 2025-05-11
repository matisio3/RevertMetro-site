document.addEventListener("DOMContentLoaded", function () {
  const downloadTile = document.getElementById("downloadTile");
  const configTile = document.querySelector(".tile-purple");
  const galleryTile = document.querySelector(".tile-teal");

  if (downloadTile) {
    downloadTile.addEventListener("click", function () {
      alert("Wkrótce będzie możliwość pobrania.");
    });
  }

  if (configTile) {
    configTile.addEventListener("click", function () {
      alert("Konfiguracja będzie dostępna wkrótce.");
    });
  }

  if (galleryTile) {
    galleryTile.addEventListener("click", function () {
      alert("Galeria zostanie udostępniona wkrótce.");
    });
  }
});
