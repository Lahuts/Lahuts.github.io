document.addEventListener("DOMContentLoaded", e => {

    let movies = [{
        image: "https://www.themoviedb.org/t/p/w1280/etf5ncsBCKglhHKnUi2HmL0iceG.jpg",
        title: "Lucy",
        date: "2014",
        director: "Luc Besson",
        type: "science-fiction"
    }, {
        image: "https://www.themoviedb.org/t/p/w1280/ndI4tgEtyztuhracdyiTNDYuhEl.jpg",
        title: "Vikings",
        date: "2013",
        director: "Michael Hirst",
        type: "historique"

    }, {
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSbIzUFFVjbCs3bNx3px0sdT38SoU5hrG3mhV5hrUsieuwz62tc",
        title: "Avengers EndGame",
        date: "2019",
        director: "Anthony et Joe Russo",
        type: "action , super-héros"
    }, {

        title: "Joker",
        date_de_sortie: "9 Octobre 2019",
        type: "thriller",
        duree: "2h2",
        acteurs: "Joaquin Phoenix",
        director: "Todd Phillips",
        image: "https://www.themoviedb.org/t/p/w1280/dCp0auHcFum1g6N1YSMLQmyVCT6.jpg"
    }, {

        title: "Batman",
        date: "",
        type: "Super héros",
        duree: "2h55",
        acteurs: "Robert Pattinson",
        director: "Matt Reeves",
        image: "https://www.themoviedb.org/t/p/w1280/krbjW0bbXSdeysYGMrdfpcJy6PH.jpg"
    }, {

        title: "Le voyage de Chihiro",
        date: "",
        type: "Fantastique",
        duree: "2h5min",
        acteurs: "",
        director: "Hayao Miyazaki",
        image: "https://images.affiches-et-posters.com//albums/3/7390/medium/AF7303.JPG"
    }, {

        title: "Flash",
        date: "2014",
        type: "Science-Fiction",
        director: "Greg Berlanti",
        image: "https://www.themoviedb.org/t/p/w1280/hF2hIInMmr4XOuMBx4uo3pElzz2.jpg"
    }, {

        title: "Jujustu Kaisen 0",
        date: "2022",
        type: "Animation",
        director: "Sunghoo Park",
        image: "https://www.themoviedb.org/t/p/w1280/4MAIb2ctURfs9YNIcEzk0IS4M5I.jpg"
    }, {

        title: "Peaky Blinders",
        date: "2013",
        type: "Drame",
        director: "Steven Knight",
        image: "https://www.themoviedb.org/t/p/w1280/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
    }, {

        title: "Uncharted",
        date: "2022",
        type: "Aventure",
        director: "Ruben Fleischer",
        image: "https://www.themoviedb.org/t/p/w1280/sqLowacltbZLoCa4KYye64RvvdQ.jpg"
    }, {

        title: "The Walking Dead",
        date: "2010",
        type: "Action & Aventure",
        director: "Frank Darabont",
        image: "https://www.themoviedb.org/t/p/w1280/yTNP9UOdUbGBUZ7SSVng75IwAaY.jpg"
    }, {

        title: "Game of Thrones",
        date: "2011",
        type: "Fantastique",
        director: "David Benioff",
        image: "https://www.themoviedb.org/t/p/w1280/mMHYHIiC9I2ghn12Fnr4ImvWWss.jpg"
    }, {

        title: "Euphoria",
        date: "2019",
        type: "Drame",
        director: "Sam Levinson",
        image: "https://www.themoviedb.org/t/p/w1280/5o6f5tAj0yJaVrx6fdmwNDZiojA.jpg"
    }, {

        title: "Le loup de Wall Street",
        date: "2013",
        type: "Comédie",
        director: "Martin Scorsese",
        image: "https://www.themoviedb.org/t/p/w1280/dQIQZbJXn1pflQw3nwvXLJX0dHa.jpg"
    }, {

        title: "The Last Kingdom",
        date: "2015",
        type: "Action",
        director: "Stéphan Butchard",
        image: "https://www.themoviedb.org/t/p/w1280/wUFIEJCSmurmXPX0mP0cEgoltrk.jpg"
    }];

    class Movie {
        constructor(mov) {
            this.image = mov.image; // figure > img
            this.title = mov.title; // figcaption
            this.date = mov.date; // li
            this.director = mov.director; // li
            this.type = mov.type; // li
            this.printObj();
        }
        printObj(movies) {
            ul.innerHTML += `
        <li>
           <figure>
           <img id="test" src="${this.image}"></img>
             <figcaption>
                <h3>${this.title}</h3>
             </figcaption>
             <ul>
                   <li>${this.director}</li>
                    <li>${this.date}</li>
                    <li>${this.type}</li>
                 </ul>
            </figure>
        </li>
       `;
        }
    }

    let el = document.querySelector("section");
    let ul = document.createElement("ul");
    el.appendChild(ul);

    for (let i = 0; i < movies.length; i++) {
        let film = new Movie(movies[i]);
    }
    document.querySelectorAll('#test').forEach(item => {
        item.addEventListener('mouseenter', event => {
            //handle click
        });
    });
    document.querySelectorAll('#test').forEach(item => {
        item.addEventListener('mouseout', event => {
            //handle click
        });
    });
});