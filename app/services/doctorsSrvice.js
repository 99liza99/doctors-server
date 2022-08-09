const doctorModel = require("../models/doctorModel");

class DoctorService {
  async create(doctor) {
    return await doctorModel.create(doctor);
  }

  async getAll() {
    return await doctorModel.find();
  }

  async getById(id) {
    if (!id) {
      throw new Error("id is not found");
    }
    return await doctorModel.findById(id);
  }
  async getByIds(ids) {
    if (!ids) {
      throw new Error("id is not found");
    }
    return await doctorModel.find({ _id: ids });
  }

  async deleteById(id) {
    if (!id) {
      throw new Error("id is not found");
    }
    return await doctorModel.findByIdAndDelete(id);
  }

  async update(doctor) {
    if (!doctor._id) {
      throw new Error("id is not found");
    }
    return await doctorModel.findByIdAndUpdate(doctor._id, doctor, {
      new: true,
    });
  }
}

module.exports = new DoctorService();
