"use strict";

const elUserCard = document.querySelector(".wrapper_films");

const renderFilms = (array,elUserCard)=>{
  elUserCard.textContent='';
 for (let i = 0; i < array.length; i++) {
 
  const element = array[i];
  const newCard = document.createElement("div", "card");
  newCard.className = "card text-center";
  newCard.innerHTML = `
                  <img src="${element.poster}" alt="${element.title}">
                  <h5>ID: ${element.id}</h5>
                  <h5>Title: ${element.title}</h5>
                  <p><b>Overwiev: </b>${element.overview}</p>
                  <p><b>Relase date: </b>${new Date(element.release_date)} </p>
                  <p><b>Genres: </b>${element.genres}</p>            

  `;
  elUserCard.appendChild(newCard);

} 
}

renderFilms(films , elUserCard)


const inputID = document.querySelector(".input_id");
const inputImage = document.querySelector(".input_image");
const inputTitle = document.querySelector(".input_title");
const inputOverview = document.querySelector(".input_overview");
const inputDate = document.querySelector(".input_number");
const inputGanres = document.querySelector(".input_genres")
const inputBtn = document.querySelector(".adde_card");
const searchInput = document.querySelector(".search_input");

// yangi card qo'shdik

inputBtn.addEventListener("click", () => {
  if(inputID.value == 0 ){
alert("Iltimos ID yozing")
  }else if(inputTitle.value==""){
    alert("Iltimos title yozing")
  }else if(inputImage.value==""){
    alert("Iltimos rasm linkini qo'ying")
  }else{
    const title =inputTitle.value;
    const id = inputID.value;
    const poster = inputImage.value;
    const overview = inputOverview.value;
    const relase_date = Number(inputDate.value);
    const ganres = inputGanres.value;
    const obj = {
    id:id, 
    title:title,
    poster: poster, 
    overview:overview, 
    release_date:relase_date, 
    genres:ganres,
  }
    films.unshift(obj);
    renderFilms(films,elUserCard)
  }
});

// search qildik

searchInput.addEventListener("change",(e)=>{
  e.preventDefault();

  const inputText = searchInput.value.trim().toLowerCase()
  let sourc = [];

films.forEach((element) => {
  
 if (element.title.toLowerCase().includes(inputText)) {
  sourc.push(element)

 }

});

renderFilms(sourc, elUserCard)
})

// Janrlarni chiqaramiz

let elGanres = [];

elGanres.unshift('All');

films.forEach((element) => {

const ganres = element.genres;

ganres.forEach((zarra)=>{
 if (!elGanres.includes(zarra)) {
  elGanres.push(zarra)
}
})

});
console.log(elGanres);

const select = document.querySelector('.select_option');
 
elGanres.forEach((e)=>{
const elOption = document.createElement('option','',e);

select.appendChild(elOption)

})




//https://picsum.photos/200/300