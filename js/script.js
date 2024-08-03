let listaDts = document.querySelectorAll(".faq dt");

function dtsAtivo() {
  this.classList.toggle("ativo");
  this.nextElementSibling.classList.toggle("ativo");
}

listaDts.forEach((item) => {
  item.addEventListener("click", dtsAtivo);
})