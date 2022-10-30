const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const ctrl = require('../../controller/contacts');
const { validateBody } = require('../../middlewares');
const { schemas } = require('../../models/contacts');
const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getList));

router.post('/', validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

module.exports = router;
