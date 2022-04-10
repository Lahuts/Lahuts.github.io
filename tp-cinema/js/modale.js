document.addEventListener("DOMContentLoaded", e => {
  // Modal windows of the movies on the home page

  console.log(navigator.userAgent);
});

document.addEventListener("DOMContentLoaded", e => {
  console.log(navigator.userAgent);

  let el, modal, closed, open_modal;

  el = document.querySelectorAll("#grid ul li");
  modal = document.querySelector(".bc-modal");
  closed = document.querySelector(".close");

  open_modal = function () {
    console.log(this.dataset);

    let trailer = this.dataset.trailer;
    let title = this.dataset.title;
    let director = this.dataset.director;
    let date = this.dataset.date;

    let type = this.dataset.type;
    modal.classList.add("modale-active"); /* ajouter la classe active */
    /* sélectionner les sélecteurs html*/
    document.querySelector(".fr-modal iframe").src = trailer;
    document.querySelector(".modal-info h3").innerText = title;
    document.querySelector(".modal-info li:nth-child(1)").innerText = "Réalisateur : " + director;
    document.querySelector(".modal-info li:nth-child(2) ").innerText = "Genre : " + type;
    document.querySelector(".modal-info li:nth-child(3)").innerText = "Date de sortie : " + date;
  };
  for (rows of el) {
    rows.addEventListener("click", open_modal);
  }
  closed.addEventListener("click", () => {
    modal.classList.remove("modale-active");
    document.querySelector(".fr-modal iframe").src = "";
  });
});