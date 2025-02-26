import User from "../models/UserModel.js";

// GET
async function getUsers(req, res) {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

// CREATE
async function createUser(req, res) {
  try {
    const inputResult = req.body;
    await User.create(inputResult);
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    await User.update(req.body, {
      where: {
        id: id,
      }
    });
    res.status(200).json({ msg: "User Updated!" });
  } catch(error) {
    res.status(400).json({ msg: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Deleted!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

export { getUsers, createUser, updateUser, deleteUser };
