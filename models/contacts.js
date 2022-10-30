const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleSaveErrors } = require('../helpers');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      required: [true, 'Set email for contact'],
    },
    tel: {
      type: String,
      required: [true, 'Set tel for contact'],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post('save', handleSaveErrors);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  tel: Joi.string().required(),
  favorite: Joi.boolean(),
});

const updateTheFavoriteStatus = Joi.object({
  favorite: Joi.boolean().required().error(new Error('mising favorite field')),
});

const schemas = {
  addSchema,
  updateTheFavoriteStatus,
};

const Contact = model('goit', contactSchema);

module.exports = {
  Contact,
  schemas,
};
