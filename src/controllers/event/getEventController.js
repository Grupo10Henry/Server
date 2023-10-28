//Eve
const { Event } = require("../../db");
//Op.gte: Mayor qué o igual a
const getEventController = async (search, category, date, price) => {
  if (search && category && date && price) {
    const searchName = await Event.findAll({ where: { name: search } });
    if (searchName) {
      const filteredDB = await Event.findAll({
        where: {
          name: search,
          category: category,
          date: date,
          priceMin: price,
        },
      });
      return filteredDB;
    } else {
      const filteredDB = await Event.findAll({
        where: {
          locationName: search,
          category: category,
          date: date,
          priceMin: price,
        },
      });
      return filteredDB;
    }
  }
  if (search && category && date) {
    const searchName = await Event.findAll({ where: { name: search } });
    if (searchName) {
      const filteredDB = await Event.findAll({
        where: {
          name: search,
          category: category,
          date: date,
        },
      });
      return filteredDB;
    } else {
      const filteredDB = await Event.findAll({
        where: {
          locationName: search,
          category: category,
          date: date,
        },
      });
      return filteredDB;
    }
  }
  if (search && category && price) {
    const searchName = await Event.findAll({ where: { name: search } });
    if (searchName) {
      const filteredDB = await Event.findAll({
        where: {
          name: search,
          category: category,
          priceMin: price,
        },
      });
      return filteredDB;
    } else {
      const filteredDB = await Event.findAll({
        where: {
          locationName: search,
          category: category,
          priceMin: price,
        },
      });
      return filteredDB;
    }
  }
  if (search && date && price) {
    const searchName = await Event.findAll({ where: { name: search } });
    if (searchName) {
      const filteredDB = await Event.findAll({
        where: {
          name: search,
          date: date,
          priceMin: price,
        },
      });
      return filteredDB;
    } else {
      const filteredDB = await Event.findAll({
        where: {
          locationName: search,
          date: date,
          priceMin: price,
        },
      });
      return filteredDB;
    }
  }
  if (category && date && price) {
    const filteredDB = await Event.findAll({
      where: {
        category: category,
        date: date,
        priceMin: price,
      },
    });
    return filteredDB;
  }
  if (search && date) {
    const searchName = await Event.findAll({ where: { name: search } });
    if (searchName) {
      const filteredDB = await Event.findAll({
        where: {
          name: search,
          date: date,
        },
      });
      return filteredDB;
    } else {
      const filteredDB = await Event.findAll({
        where: {
          locationName: search,
          date: date,
        },
      });
      return filteredDB;
    }
  }
  if (search && price) {
    const searchName = await Event.findAll({ where: { name: search } });
    if (searchName) {
      const filteredDB = await Event.findAll({
        where: {
          name: search,
          priceMin: price,
        },
      });
      return filteredDB;
    } else {
      const filteredDB = await Event.findAll({
        where: {
          locationName: search,
          priceMin: price,
        },
      });
      return filteredDB;
    }
  }
  if (search && category) {
    const searchName = await Event.findAll({ where: { name: search } });
    if (searchName) {
      const filteredDB = await Event.findAll({
        where: {
          name: search,
          category: category,
        },
      });
      return filteredDB;
    } else {
      const filteredDB = await Event.findAll({
        where: {
          locationName: search,
          category: category,
        },
      });
      return filteredDB;
    }
  }
  if (category && date) {
    const filteredDB = await Event.findAll({
      where: {
        category: category,
        date: date,
      },
    });
    return filteredDB;
  }
  if (category && price) {
    const filteredDB = await Event.findAll({
      where: {
        category: category,
        priceMin: price,
      },
    });
    return filteredDB;
  }
  if (date && price) {
    const filteredDB = await Event.findAll({
      where: {
        date: date,
        priceMin: price,
      },
    });
    return filteredDB;
  }
  if (price) {
    const filteredDB = await Event.findAll({
      where: {
        priceMin: price,
      },
    });
    return filteredDB;
  }
  if (date) {
    const filteredDB = await Event.findAll({
      where: {
        date: date,
      },
    });
    return filteredDB;
  }
  if (category) {
    const filteredDB = await Event.findAll({
      where: {
        category: category,
      },
    });
    return filteredDB;
  }
  if (search) {
    const searchName = await Event.findAll({ where: { name: search } });
    if (searchName) {
      return searchName;
    } else {
      const filteredDB = await Event.findAll({
        where: {
          locationName: search,
        },
      });
      return filteredDB;
    }
  }
};
module.exports = { getEventController };
