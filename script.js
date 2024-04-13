const testimonials = [
  {
    name: "Cherise G",
    photoUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
  },
  {
    name: "Rosetta Q",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
  },
  {
    name: "Constantine V",
    photoUrl:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
  },
];

const imagenEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const titleEl = document.querySelector(".username");

let indiceImagenActual = 0; // se inicializa variable en 0 que se utiliza para rastrear el indice
changeImg();

function changeImg() {  //se define fncion que se encangar de cambiar la imegen y el text del testimonio.
  const { name, photoUrl, text } = testimonials[indiceImagenActual];

  imagenEl.src = photoUrl;
  textEl.innerText = text;
  titleEl.innerText = name;

  indiceImagenActual++

  if (indiceImagenActual === testimonials.length) {
    indiceImagenActual = 0;
  }

  setTimeout(() => {
    changeImg();
  }, 3000);
}
