// Eve
const {
  postEventController,
} = require("../../controllers/event/postEventController");
const postEventHandler = async (req, res) => {
  const {
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
  } = req.body;
  try {
    const user = await postEventController(
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
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  postEventHandler,
};
