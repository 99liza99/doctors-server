import doctorModel from "../models/doctorModel.js";

class DoctorService {
  async create(doctor) {
    return await doctorModel.create(doctor);
  }

  async getAll() {
    return await doctorModel.find();
  }

  async getById(id) {
    return await doctorModel.findById(id);
  }

  async deleteById(id) {
    return await doctorModel.findByIdAndDelete(id);
  }

  async update(doctor) {
    return await doctorModel.findByIdAndUpdate(doctor._id, doctor, {
      new: true,
    });
  }
}

export default new DoctorService();
