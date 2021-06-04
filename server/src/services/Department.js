const Models = require("../models");
const model = Models.Department;

module.exports = {
  find: async (ctx) => {
    try {
      const { count, rows } = await model.findAndCountAll({ where: ctx.query });
      return { count, result: rows };
    } catch (error) {
      throw error;
    }
  },
  findOne: async (ctx) => {
    try {
      const { id } = ctx.params;
      return await model.findByPk(id);
    } catch (error) {
      throw error;
    }
  },
  count: async (ctx) => {
    try {
      return await model.count({ where: ctx.query });
    } catch (error) {
      throw error;
    }
  },
  create: async (ctx) => {
    try {
      return await model.create(ctx.body);
    } catch (error) {
      throw error;
    }
  },
  update: async (ctx) => {
    const { id } = ctx.params;
    try {
      return await model.update(ctx.body, { where: { id } });
    } catch (error) {
      throw error;
    }
  },
  delete: async (ctx) => {
    const { id } = ctx.params;
    try {
      return await model.destroy({ where: { id } });
    } catch (error) {
      throw error;
    }
  },
};
