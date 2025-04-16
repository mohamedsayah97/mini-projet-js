import produitRepo from "../repositories/produitRepo.js";

const produitController = {
  // Créer un nouveau produit
  async create(req, res) {
    try {
      const produit = await produitRepo.insert(req.body);
      res.status(201).json(produit);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Créer plusieurs produits
  async createMany(req, res) {
    try {
      const produits = await produitRepo.insertMany(req.body);
      res.status(201).json(produits);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Récupérer tous les produits ou filtrer
  async getAll(req, res) {
    try {
      const query = req.query || {};
      const produits = await produitRepo.find(query);
      res.status(200).json(produits);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Récupérer un produit par son ID
  async getById(req, res) {
    try {
      const produit = await produitRepo.findById(req.params.id);
      if (!produit) {
        return res.status(404).json({ message: "Produit non trouvé" });
      }
      res.status(200).json(produit);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Mettre à jour un produit
  async update(req, res) {
    try {
      const updatedProduit = await produitRepo.update(
        { _id: req.params.id },
        req.body
      );
      if (!updatedProduit) {
        return res.status(404).json({ message: "Produit non trouvé" });
      }
      res.status(200).json(updatedProduit);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Supprimer un produit
  async delete(req, res) {
    try {
      const deletedProduit = await produitRepo.deleteById(req.params.id);
      if (!deletedProduit) {
        return res.status(404).json({ message: "Produit non trouvé" });
      }
      res.status(200).json({ message: "Produit supprimé avec succès" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Supprimer plusieurs produits
  async deleteMany(req, res) {
    try {
      const result = await produitRepo.deleteMany(req.body.filter);
      res.status(200).json({
        message: `${result.deletedCount} produits supprimés avec succès`,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default produitController;