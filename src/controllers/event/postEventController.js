//Eve
const { Event } = require("../../db");

const postEventController = async (
  name,
  description,
  category,
  capacity,
  date,
  time,
  locationName,
  adressLocation,
  mapLocation,
  image,
  bannerImage,
  planImage,
  views,
  priceMin,
  priceMax,
  isDonation,
  type
) => {
  const filteredDB = await Event.findAll({
    where: {
      name: name,
    },
  });

  if (filteredDB.length === 0) {
    const newEvent = await Event.create({
      name,
      description,
      category,
      capacity,
      date,
      time,
      locationName,
      adressLocation,
      mapLocation,
      image,
      bannerImage,
      planImage,
      views,
      priceMin,
      priceMax,
      isDonation,
      type,
    });
    return newEvent;
  } else
    throw new Error(
      "Ya existe un evento creado con ese nombre, por favor ingrese un nombre diferente"
    );
};
module.exports = { postEventController };
