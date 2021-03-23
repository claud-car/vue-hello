// Descrizione
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var testo = new Vue(
  {
    el: '#root',
    data: {
      message: 'Ciao a tutti',
      // src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_Kc9csh7Q4BQemhGDBf4Jerjg_laVuhsuQ&usqp=CAU',
      classe:'colore'
    }
  }
);

var foto = new Vue(
  {
    el: '#foto',
    data: {
      source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_Kc9csh7Q4BQemhGDBf4Jerjg_laVuhsuQ&usqp=CAU',
    }
  }

);
