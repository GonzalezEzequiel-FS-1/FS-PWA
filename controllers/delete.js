const { Users } = require("../models");

const deleteUser = async (req, res) => {
  const id = req.params.id;

  // Check if ID is provided
  if (!id) {
    return res.status(400).json({
      success: false,
      message: 'No ID provided',
    });
  }
  try {
    const result = await Users.destroy({
      where: { id },
    });
    if (result === 0) {
      return res.status(404).json({
        success: false,
        message: `User with ID ${id} not found`,
      });
    }
    return res.status(200).json({
      success: true,
      message: 'User successfully deleted',
    });
  } catch (error) {
    console.error('Error deleting user:', error); 
    return res.status(500).json({
      success: false,
      message: 'Failed to delete user, consult server logs for details',
    });
  }
};

module.exports = { deleteUser };
