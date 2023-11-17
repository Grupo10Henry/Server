const { Router } = require("express");
const { postSeatHandler } = require("../handlers/seat/postSeatHandler");
const { getSeatHandler } = require("../handlers/seat/getSeatHandler");
const {
  getSeatUserIdHandler,
} = require("../handlers/seat/getSeatUserIdHandler");
const { getAdminSeatHandler } = require("../handlers/seat/getAdminSeatHandler");
const {
  getSeatByEventHandler,
} = require("../handlers/seat/getSeatByEventHandler");
const { deleteSeatHandler } = require("../handlers/seat/deleteSeatHandler");
const { putSeatHandler } = require("../handlers/seat/putSeatHandler");
const {
  deleteSeatBySectorHandler,
} = require("../handlers/seat/deleteSeatBySectorHandler");
const {
  restoreSeatBySectorHandler,
} = require("../handlers/seat/restoreSeatBySectorHandler");
const {
  postSeatEventHandler,
} = require("../handlers/seat/postSeatEventHandler");
const {
  getSeatsByUserAndEventHandler,
} = require("../handlers/seat/getSeatsByUserAndEventHandler");

const { getSeatByIdHandler } = require("../handlers/seat/getSeatByIdHandler");
const {
  getSeatDetailsHandler,
} = require("../handlers/seat/getSeatDetailsHandler");
const {
  getSeatReportHandler,
} = require("../handlers/seat/getSeatReportHandler");
const {
  getSeat2ReportHandler,
} = require("../handlers/seat/getSeat2ReportHandler");
const seatRouter = Router();

seatRouter.get("/reportNames", getSeatReportHandler);
seatRouter.get("/reportSeats", getSeat2ReportHandler);
seatRouter.get("/by-id/:id", getSeatByIdHandler);
seatRouter.get("/details/:id", getSeatDetailsHandler);
seatRouter.get("/:id", getSeatHandler); //Obtener todos los asientos
seatRouter.get("/user/:id", getSeatUserIdHandler);
seatRouter.get("/admin/:id", getAdminSeatHandler);
seatRouter.get("/:eventID/:sector", getSeatByEventHandler); // obtener asientos por eventID y sector
seatRouter.get("/seats/:userID/:eventID", getSeatsByUserAndEventHandler);
seatRouter.delete("/:id", deleteSeatHandler); //Borrado lógico
seatRouter.delete("/:eventID/:sector", deleteSeatBySectorHandler);
seatRouter.put("/:id", putSeatHandler); //Editar por Id (ocupado)
seatRouter.post("/", postSeatHandler); // crear asientos
seatRouter.post("/:eventID/:sector", postSeatEventHandler);

module.exports = seatRouter;
