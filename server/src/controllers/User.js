const service = require("../services/User");
const { setError, setResult } = require("../utils/helper");
module.exports = {
  find: async (req, res) => {
    try {
      const result = await service.find(req);
      setResult(res, result);
    } catch (error) {
      setError(res, error);
    }
  },
  findOne: async (req, res) => {
    try {
      const result = await service.findOne(req);
      setResult(res, result);
    } catch (error) {
      setError(res, error);
    }
  },
  count: async (req, res) => {
    try {
      const result = await service.count(req);
      setResult(res, result);
    } catch (error) {
      setError(res, error);
    }
  },
  create: async (req, res) => {
    try {
      const result = await service.create(req);
      setResult(res, result);
    } catch (error) {
      setError(res, error);
    }
  },
  update: async (req, res) => {
    try {
      const result = await service.update(req);
      setResult(res, result);
    } catch (error) {
      setError(res, error);
    }
  },
  delete: async (req, res) => {
    try {
      const result = await service.delete(req);
      setResult(res, result);
    } catch (error) {
      setError(res, error);
    }
  },
};
