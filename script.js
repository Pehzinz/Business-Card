

const chk = document.getElementById("chk");
chk.addEventListener("change", ()=> {
    document.body.classList.toggle("dark");
})


//estilizando a imagem do GitHub
const gitNone = document.querySelector("#git");
const imgGit = document.querySelector("#imgGit");
gitNone.addEventListener("mouseover", () => {
    imgGit.style.display =  "block";
})
gitNone.addEventListener("mouseout", () => {
    imgGit.style.display = "none";
})
//Estilizando a imagem do Linkedin
const linkNone = document.querySelector("#din");
const imgLink = document.querySelector("#imgLink");
linkNone.addEventListener("mouseover", () => {
    imgLink.style.display = "block";
})
linkNone.addEventListener("mouseout", () => {
    imgLink.style.display = "none";
})