import { KUTYAK} from "./adat.js";

export function eloallitas(){
    const FO_DIV = document.querySelector(".tartalom");
    let segedValtozo = `<div class="container">`;
    for (let index = 0; index < KUTYAK.length; index++) {
        segedValtozo += `<div class="kutyak">`
        segedValtozo += `<p>nev:${KUTYAK[index].nev}</p>`
        segedValtozo += `<p>kor:${KUTYAK[index].Ev}</p>`
        segedValtozo += `<p>fajta:${KUTYAK[index].fajta}</p>`
        segedValtozo += `</div>`    
    }
    segedValtozo += `</div>`
    FO_DIV.innerHTML += segedValtozo;
}

export function szovegFoleViszem(){
    const KUTYAK_KARTYAK = document.getElementsByClassName("kutyak");
    for (let index = 0; index < KUTYAK_KARTYAK.length; index++) {
        KUTYAK_KARTYAK[index].addEventListener("mouseenter",function(){
            KUTYAK_KARTYAK[index].classList.add("kiv");
        });
        KUTYAK_KARTYAK[index].addEventListener("mouseleave",function(){
            KUTYAK_KARTYAK[index].classList.remove("kiv");
        });
    }   
}

export function kivalasztottElemek(){
    const KIVALASZTOTTAK = [];
    const KUTYAK_KARTYAK = document.getElementsByClassName("kutyak");
    const KIVALASZTOTT = document.getElementsByClassName("kivalasztott");
    for (let index = 0; index < KUTYAK_KARTYAK.length; index++) {
        KUTYAK_KARTYAK[index].addEventListener("click",function(){
            if(!KIVALASZTOTTAK.includes(KUTYAK[index].nev)){
                KIVALASZTOTT[0].innerHTML += `<div>`;
                KIVALASZTOTT[0].innerHTML += KUTYAK[index].nev;
                KIVALASZTOTT[0].innerHTML += `</div>`;
                KIVALASZTOTTAK.push(KUTYAK[index].nev);
            }
        });
    }
}



