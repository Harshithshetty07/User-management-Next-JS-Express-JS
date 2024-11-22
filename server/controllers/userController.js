const User = require('../models/User')

const userController = {
    // Get all users
    getAllUsers: async (req, res) => {
      try {
        const users = await User.find().select('-__v');
        res.json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
  
    // Create user
    createUser: async (req, res) => {
      try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).json(savedUser);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    },
  
    // Update user
    updateUser: async (req, res) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true, runValidators: true }
        );
        if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    },
  
    // Delete user
    deleteUser: async (req, res) => {
      try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  };
  
  module.exports = userController;