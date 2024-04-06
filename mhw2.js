
let statoCuori = {
    "immagine1": 0,
    "immagine2": 0,
    "immagine3": 0
};

let immaginiCuori = ["images/cuoreGrigio.png", "images/cuoreRosso.png"];
let gif = ["animazioni/animazioneGrigio-unscreen.gif", "animazioni/animazioneRosso-unscreen.gif"];

let messaggioAggiungi = 'Aggiungi ai preferiti';
let messaggioRimuovi = 'Rimuovi dai preferiti';

let immagini = document.querySelectorAll('.imgCuoreGrigio');

let conteggioPreferiti = 0;
let conteggioPreferitiElemento = document.createElement('div');
conteggioPreferitiElemento.textContent = 'Preferiti: ' + conteggioPreferiti;

// Aggiungo una nuova classe CSS all'elemento per il display none mobile
conteggioPreferitiElemento.classList.add('nuovaClasse');
conteggioPreferitiElemento.style.color = '#fb6100';
conteggioPreferitiElemento.style.fontSize = '20px';
conteggioPreferitiElemento.style.margin = '10px';
conteggioPreferitiElemento.style.marginRight = '-105px';
conteggioPreferitiElemento.style.fontFamily = "arial";
conteggioPreferitiElemento.style.marginTop = '20px'; 
conteggioPreferitiElemento.style.fontWeight = 'bold';

// Seleziona l'elemento <header>
let header = document.querySelector('header');

// Inserisco l'elemento conteggioPreferitiElemento prima del primo figlio dell'elemento header
header.insertBefore(conteggioPreferitiElemento, header.firstChild);

function aggiornaConteggioPreferiti() {
    conteggioPreferiti++;
    conteggioPreferitiElemento.textContent = 'Preferiti: ' + conteggioPreferiti;
}




for (let i = 0; i < immagini.length; i++) {
    immagini[i].addEventListener('mouseover', function() {
        // Aumenta le dimensioni dell'immagine quando il mouse si corica
        immagini[i].style.transform = 'scale(1.2)';
        //oppure posso giungere allo stesso effetto così
        /*immagini[i].style.width = '12%';
        immagini[i].style.height = '40%';*/

        //voglio che compaia un messaggio quando il cursore va sull'immagine 
        //per prima cosa mi devo ricavare lo stato dell'immagine corrente
        let statoAttuale = statoCuori[immagini[i].id]

        if (statoAttuale === 0){
            CreaMessaggio(messaggioAggiungi, event.clientX, event.clientY);
        } else{
            CreaMessaggio(messaggioRimuovi, event.clientX, event.clientY);
        }
    });

    immagini[i].addEventListener('mouseout', function() {
        // Ripristina quando il mouse si toglie
        immagini[i].style.transform = 'scale(1)';
        //ma non funziona a causa di !important dovevo fare sue classi CSS ma sono stato pigro 
        /*immagini[i].style.width = '10%';
        immagini[i].style.height = '35%';*/
        nascondiMessaggio();
    });


    immagini[i].addEventListener('click', function() {
        cambiaImmagine(immagini[i].id);
    });
}


let messaggioCorrente = null;


function CreaMessaggio(testo, clientX, clientY){

    nascondiMessaggio();

    let messaggio = document.createElement('div');
    messaggio.classList.add('messaggio'); //creo una classe CSS
    messaggio.textContent = testo; 
    document.body.appendChild(messaggio);
    messaggioCorrente = messaggio;

}


function nascondiMessaggio(){
    if(messaggioCorrente != null){
        messaggioCorrente.remove();
        messaggioCorrente = null;
    }
}
// mi serve una funzione che aggiorni la posizione del cursore e quindi stia attento alla posizione del cursore

document.addEventListener('mousemove', function(event){
    if(messaggioCorrente != null){
        messaggioCorrente.style.left = (event.clientX + 20) + 'px';
        messaggioCorrente.style.top = (event.clientY - 20) + 'px';
        messaggioCorrente.style.position  = 'absolute'; 
        messaggioCorrente.style.fontFamily = 'Arial';
        messaggioCorrente.style.fontWeight = 'bold';
    }
});


function cambiaImmagine(id) {
    let immagine = document.getElementById(id);
    let statoAttuale = statoCuori[id];

    if(statoAttuale === 0){
        statoCuori[id] = 1;
        aggiornaConteggioPreferiti();
    } else {
        statoCuori[id] = 0;
        conteggioPreferiti--; 
        conteggioPreferitiElemento.textContent = 'Preferiti: ' + conteggioPreferiti;
    }

    immagine.src = gif[statoAttuale];

    setTimeout(function() {
        // Cambia l'immagine del cuore dopo l'animazione
        immagine.src = immaginiCuori[statoCuori[id]];
    }, 250);
}

document.addEventListener("DOMContentLoaded", function() {
    const bandiera = document.querySelector("img[src='images/bandiera.png']");
    const bannerBandiere = document.querySelector(".bannerBandiere");

    let timeoutId;

    function showBanner() {
      bannerBandiere.style.display = "block";
    }

    function hideBanner() {
      bannerBandiere.style.display = "none";
    }

    bandiera.addEventListener("mouseover", function() {
      clearTimeout(timeoutId);
      showBanner();
    });

    bandiera.addEventListener("mouseout", function() {
      timeoutId = setTimeout(hideBanner, 300); 
    });

    bannerBandiere.addEventListener("mouseover", function() {
      clearTimeout(timeoutId);
    });

    bannerBandiere.addEventListener("mouseout", function() {
      timeoutId = setTimeout(hideBanner, 300); 
    });
  });

  /* <div  data-messaggio = '' class="classe_data"> </div>
  non è necessario un id, quindi  uso la classe
  */

  const data_messaggio = document.getElementsByClassName('classe_data')[0];
  data_messaggio.setAttribute('data-messaggio', 'questo è un data!');
  let mess_txt = data_messaggio.getAttribute('data-messaggio');
  data_messaggio.textContent = mess_txt;
  

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menuMobile = document.querySelector('.menuMobile');
    const classeX = document.querySelector('.classeX');
                    
    hamburger.addEventListener('click', function () {
         menuMobile.style.display = 'block'; // Mostra il menu mobile
         });
                    
    classeX.addEventListener('click', function () {
        menuMobile.style.display = 'none'; // Nasconde il menu mobile
        });
 });