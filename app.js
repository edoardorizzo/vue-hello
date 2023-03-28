/* 
Stampare a schermo un messaggio all’interno di un :puntare_a_destra: h1 :puntare_a_sinistra: utilizzando una proprietá nell'oggetto restituito dalla funzione data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        description: 'Vue (pronounced /vju/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.',
        image: './img/evanyou.jpeg'
      }
    }
  }).mount('#app')