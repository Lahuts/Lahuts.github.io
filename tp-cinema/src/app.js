/*document.addEventListener("DOMContentLoaded", e => {
    let films = [
        {
            titre : "Django Unchained",
            date : "16 janvier 2013",
            genre : "Western",
            duree : "2h 44min",
            acteurs : "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio",
            réalisateur : "Quentin Tarantino",
            affiche : "asset/django.jpg",
        },
        {
            titre : "Lucy",
            date_de_sortie :"2014" ,
            genre : "science-fiction",
            duree : "1h29",
            acteurs : "Scarlett Johansson, Morgan Freeman, Min-sik Choi",
            réalisateur : "Luc Besson",
            affiche : "https://fr.web.img6.acsta.net/pictures/14/06/05/09/47/324245.jpg",
},
{
            titre : "Vikings",
            date_de_sortie : "2013",
            genre : "historique",
            duree : "47min",
            acteurs : "Travis Fimmel",
            réalisateur :"Michael Hirst",
            affiche :"https://fr.web.img2.acsta.net/r_1920_1080/pictures/15/02/09/10/07/501243.jpg"
            },
{

            titre : "Avengers EndGame",
            date_de_sortie : "2019",
            genre : "action , super-héros",
            duree : "181 min",
            acteurs : "Robert Downey Jr. , Chris Evans , Chris Hemsworth",
            réalisateur : "Anthony et Joe Russo",
            affiche : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSbIzUFFVjbCs3bNx3px0sdT38SoU5hrG3mhV5hrUsieuwz62tc"
            },
            {

                titre : "Joker",
                date_de_sortie : "9 Octobre 2019",
                genre : "thriller",
                duree : "2h2",
                acteurs : "Joaquin Phoenix",
                réalisateur : "Todd Phillips",
                affiche : "https://atalante-cinema.org/wp-content/uploads/2019/10/Joker-aff-600x813.jpg"
                },
                {

                    titre : "Batman",
                    date_de_sortie : "",
                    genre : "Super héros",
                    duree : "2h55",
                    acteurs : "Robert Pattinson",
                    réalisateur : "Matt Reeves",
                    affiche : "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2021/12/Batman%20poster%202.jpg"
                    },
                    {

                        titre : "Le voyage de Chihiro",
                        date_de_sortie : "",
                        genre : "Fantastique",
                        duree : "2h5min",
                        acteurs : "",
                        réalisateur : "Hayao Miyazaki",
                        affiche : "https://images.affiches-et-posters.com//albums/3/7390/medium/AF7303.JPG"
                        },
    ]


const a={
    tnsfLi(titre){
        let b = document.createElement("li");
        let a = document.createElement("figure");
        let c = document.createElement("img");
        c.src = titre
        a.appendChild(c);
        b.appendChild(a)
        return b
    } 
 };

let ol = document.createElement("ol");

films.forEach(element => {
   ol.appendChild(a.tnsfLi(element.affiche))
});
let sec = document.getElementById("list");
sec.appendChild(ol);


})
*/

document.addEventListener("DOMContentLoaded", e => {
    let movies = [{
        image: "https://fr.web.img6.acsta.net/pictures/14/06/05/09/47/324245.jpg",
        title: "Lucy",
        date: "2014",
        director: "Luc Besson",
        type: "science-fiction"
    }, {
        image: "https://media.senscritique.com/media/000009578016/source_big/vikings.jpg",
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
    },
    {

        title : "Joker",
        date_de_sortie : "9 Octobre 2019",
        type : "thriller",
        duree : "2h2",
        acteurs : "Joaquin Phoenix",
        director : "Todd Phillips",
        image : "https://atalante-cinema.org/wp-content/uploads/2019/10/Joker-aff-600x813.jpg"
        },
        {

            title : "Batman",
            date : "",
            type : "Super héros",
            duree : "2h55",
            acteurs : "Robert Pattinson",
            director : "Matt Reeves",
            image : "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2021/12/Batman%20poster%202.jpg"
            },
            {

                title : "Le voyage de Chihiro",
                date : "",
                type : "Fantastique",
                duree : "2h5min",
                acteurs : "",
                director : "Hayao Miyazaki",
                image : "https://images.affiches-et-posters.com//albums/3/7390/medium/AF7303.JPG"
                },
                
                
];

    let el = document.querySelector("section");
    let ul = document.createElement("ul");
    el.appendChild(ul);
    for (rows of movies) {
        ul.innerHTML += `
        <li>
           <figure>
           <img src="${rows.image}"></img>
             <figcaption>
                <h3>${rows.title}</h3>
             </figcaption>
             <ul>
                   <li>${rows.director}</li>
                    <li>${rows.date}</li>
                    <li>${rows.type}</li>
                 </ul>
            </figure>
        </li>
       `;
    }
});
// ul > li > figure> img + figcaption > h3 + ul > li * 3{texte}