const appoitmentModel = require("../models/appoitmentModel");

class appoitmentService {
  async create(client) {
    return await appoitmentModel.create(client);
  }

  async getAll() {
    return await appoitmentModel.find();
  }

  async getById(id) {
    if (!id) {
      throw new Error("id is not found");
    }
    return await appoitmentModel.findById(id);
  }

  async deleteById(id) {
    if (!id) {
      throw new Error("id is not found");
    }
    return await appoitmentModel.findByIdAndDelete(id);
  }

  async update(client) {
    if (!client._id) {
      throw new Error("id is not found");
    }
    return await appoitmentModel.findByIdAndUpdate(client._id, client, {
      new: true,
    });
  }
}

module.exports = new appoitmentService();
