/* HTML ELEMENTER */
const main = document.querySelector(".main"); 
const menuSection = document.querySelector(".menuSection"); 
const menuItem1 = document.querySelector(".menuItem1"); 

const tilbake = document.querySelector(".tilbake"); 

/* Ibsens Univers Html Elementer */
const ibsensUnivers = document.querySelector(".ibsensUnivers"); 

const universSelection = document.querySelector(".universSelection"); 
const stykkene = document.querySelector(".stykkene"); 


/* Intro Elementer */
const intro = document.querySelector(".intro"); 
const henrikIbsenTekst = document.querySelector(".henrikIbsenTekst");
const etDukkehjemTekst = document.querySelector(".etDukkehjemTekst"); 
const nora = document.querySelector(".nora"); 
const hvitflekk = document.querySelector(".hvitflekk"); 


/* Play Meny html elementer */
const playSelection = document.querySelector(".playSelection"); 
const karakterer = document.querySelector(".karakterer"); 
const symboler = document.querySelector(".symboler"); 
const akten = document.querySelector(".akten"); 
const sammendrag = document.querySelector(".sammendrag"); 

/* Play Selection html elementer */
const karakterSlide = document.querySelector(".karakterSlide"); 

/* Side menu html elementer */
const sidemenu = document.querySelector(".sidemenu"); 
const realismen = document.querySelector(".menuRealismen"); 
const menuStykkene = document.querySelector(".menuStykkene");
const menuKarakterne = document.querySelector(".menuKarakterne");
const menuSymbolene = document.querySelector(".menuSymbolene");




function removeUnivers(event) {
    ibsensUnivers.style.opacity = "0"; 
    universSelection.classList.add("universSelectionNew");
}


function openPlaySelection(event) {

    menuSection.classList.add("menuSectionNew");
    universSelection.classList.remove("universSelectionNew");
}

function removeMenu(event) {

    menuSection.classList.remove("menuSectionNew");
    intro.classList.add("introNew");
    henrikIbsenTekst.classList.add("henrikIbsenTekstNew")
    etDukkehjemTekst.classList.add("etDukkehjemTekstNew"); 
    nora.classList.add("noraNew"); 
    hvitflekk.classList.add("hvitflekkNew"); 

}

function moveIntroUp(event) {

    intro.classList.add("introUp"); 
    ibsensUnivers.classList.add("ibsensUniversNew");
    playSelection.classList.add("playSelectionNew"); 
}

function bringInKarakterSlide(event) {
    playSelection.classList.remove("playSelectionNew"); 
    karakterSlide.classList.add("karakterSlideNew"); 
  
    main.style.overflowX = "scroll";
    main.classList.add = ("mainNew");  
}

/*
function sideMenuBack(event) {

    universSelection.classList.add("universSelectionNew");
    ibsensUnivers.classList.remove("ibsensUniversNew");
    menuSection.classList.remove("menuSectionNew");
    playSelection.classList.remove("playSelectionNew"); 
    karakterSlide.classList.remove("karakterSlideNew"); 

}   */

function fjernKaraktererSlide(event) {
    playSelection.classList.add("playSelectionNew");
    karakterSlide.style.opacity = "0";
    menuKarakterne.style.color = "rgb(124, 124, 124)"; 
}

/* Event Listeners */
menuItem1.addEventListener("click", removeMenu);
intro.addEventListener("click", moveIntroUp); 
karakterer.addEventListener("click", bringInKarakterSlide);
ibsensUnivers.addEventListener("click", removeUnivers); 
stykkene.addEventListener("click", openPlaySelection);
tilbake.addEventListener("click", fjernKaraktererSlide)
/*sidemenu.addEventListener("click", sideMenuBack); */