//Eve
const { Event } = require("../../db");
const getAllEventController = () => {
  const allEvents = Event.findAll();
  return allEvents;
};
module.exports = { getAllEventController };
// {
//   "eventID": "87f4ee47-a05e-443b-bc82-3e810f1e511e",
//   "name": "Fiesta de egresados",
//   "description": "Vamos a celebrar el fin de una etapa de mucho estrés antes de continuar con la siguiente",
//   "category": "Deportes",
//   "capacity": 50,
//   "date": "2023-11-18",
//   "time": "20:00:00",
//   "locationName": "Casa de Julia",
//   "adressLocation": "Avenida siempre vivas 123, Cordoba",
//   "mapLocation": "https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3993478,-64.3590313,11z/data=!4m6!3m5!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761!16zL20vMDFrMDNy?entry=ttu",
//   "image": "https://is5-ssl.mzstatic.com/image/thumb/seYHRX_0uXno1pXFx2BfLA/2000x1125.jpg",
//   "bannerImage": "https://i1.wp.com/www.sopitas.com/wp-content/uploads/2012/03/ProyectX1.png?is-pending-load=1",
//   "planImage": "https://4.bp.blogspot.com/-gPmfF6DGUHY/VhvBgVOI06I/AAAAAAAA0Qw/gwMQuhNPNbg/s1600/el%2Bjuego%2Bde%2Bla%2Bbotella%2Bpara%2Bbeber.jpg",
//   "views": 0,
//   "priceMin": 0,
//   "priceMax": 100,
//   "createdAt": "2023-10-29T22:15:31.127Z",
//   "updatedAt": "2023-10-29T22:15:31.127Z",
//   "deletedAt": null,
//   "isDonation": false,
//   "type": "Grande"
// }
