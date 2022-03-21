const a={
    tnsfLi(titre){
        let b = document.createElement("li");
        b.innerText = titre;
        return b
    } 
 };

let ol = document.createElement("ol");

films.forEach(element => {
   ol.appendChild(a.tnsfLi(element.affiche))
});
let sec = document.getElementById("list");
sec.appendChild(ol);
