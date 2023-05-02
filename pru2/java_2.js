$(".selector").flatpickr({

    // Aqui pones toda la configuarcion que necesites.
  
    "disable": [
      function(date) {
          // return true to disable
          return (date.getDay() === 0 || date.getDay() === 6);
  
      }
    ],
    
    // Si lo quieres en español o cualquier idioma, tienes que agregar   el script, mira la documentacion.
    
    "locale": "es"
  
  });