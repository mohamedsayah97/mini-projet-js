import userRepo from "../repositories/user.repo.js";
import { generateToken } from "../utils/jwt.util.js";
import { comparePassword } from "../utils/password.util.js";

const userController = {
    async create(req, res) {
      try {
        const data = req.body;
        const user = await userRepo.findOne({ email: data.email });
  
        if (user) {
          return res.status(400).json({ message: "This email is already taken" });
        }
        const newUser = await userRepo.insert(data);
        return res.status(200).json({ data: newUser });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    },

    async login(req, res) {
        try {
          const { email, password } = req.body;
          const user = await userRepo.findOne({ email: email });
    
          if (!user) {
            return res.status(400).json({ message: "This user is not found!" });
          }
          const isPasswordCorrect = await comparePassword(password, user.password);
    
          if (!isPasswordCorrect) {
            return res
              .status(400)
              .json({ message: "Email ou mot de passe incorrect!" });
          }
    
          const accessToken = generateToken(user._id);
    
          return res
            .status(200)
            .json({ message: "Données valide", accessToken: accessToken });
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      },

      async list(req, res) {
        try {
          const users = await userRepo.find();
          return res.status(200).json({ data: users });
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      },

      async delete(req, res) {
        try {
          const { id } = req.params;
          const entity = await userRepo.findById(id);
          if (entity == null) {
            return res.status(404).json({ message: "User not found!" });
          }
          await userRepo.deleteById(id);
          return res.status(200).json({ message: "delete successfull" });
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      },

      async update(req, res) {
        try {
          const { id } = req.params;
          const data = req.body;
          const entity = await userRepo.findById(id);
          if (entity == null) {
            return res.status(404).json({ message: "User not found!" });
          }
          await userRepo.updateById(id, data);
          return res.status(200).json({ message: "update successfull" });
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      },

    








};

export default userController;