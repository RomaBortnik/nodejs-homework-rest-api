const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlewars");
const schemas = require("../../schemas/contacts");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post(
  "/",
  validateBody(schemas.addSchema, "missing required name field"),
  ctrl.add
);

router.delete("/:contactId", ctrl.remove);

router.put(
  "/:contactId",
  validateBody(schemas.addSchema, "missing fields"),
  ctrl.update
);

module.exports = router;
