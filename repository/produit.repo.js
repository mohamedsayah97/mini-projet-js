import produitModel from "../models/produit.js";

const produitRepo = {
  async insert(data) {
    return await produitModel.create(data);
  },

  async insertMany(data) {
    return await produitModel.insertMany(data);
  },

  async delete(data) {
    // will delete by given filter {name: "produit_name"}
    return await produitModel.findOneAndDelete(data);
  },

  async deleteById(id) {
    //will delete by id
    return await produitModel.findByIdAndDelete(id);
  },

  async deleteMany(data) {
    return await produitModel.deleteMany(data);
  },

  async update(filter, data) {
    return await produitModel.update(filter, data);
  },

  async update(filter, data) {
    return await produitModel.updateMany(filter, data);
  },

  async find(query) {
    return await produitModel.find(query);
  },

  async findById(id) {
    return await produitModel.findById(id);
  },

  async findOne(query) {
    return await produitModel.findOne(query);
  },
};

export default produitRepo;