import userModel from "../models/user";
import { hashPassword } from "../utils/password.util";


const userRepo = {
    async insert(data) {
      const hashedPassword = hashPassword(data.password);
      return await userModel.create({ ...data, password: hashedPassword });
    },

    async insertMany(data) {
        return await userModel.insertMany(data);
      },

      async delete(data) {
        return await userModel.deleteOne(data);
      },

      async deleteById(id) {
        //will delete by id
        return await userModel.findByIdAndDelete(id);
      },

      async deleteMany(data) {
        return await userModel.deleteMany(data);
      },

      async update(filter, data) {
        return await userModel.update(filter, data);
      },

      async updateById(id, data) {
        return await userModel.findByIdAndUpdate(id, data);
      },

      async find(query) {
        return await userModel.find(query);
      },

      async findById(id) {
        return await userModel.findById(id);
      },

      async findOne(query) {
        return await userModel.findOne(query);
      },

      };
      export default userRepo;