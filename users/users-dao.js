import usersModel from "./users-model.js";
// let users = [];

export const findAllUsers = () =>
  // users;
  usersModel.find();

export const findUserById = (id) => {
  // const index = users.findIndex((u) => u._id === uid);
  // if (index !== -1) return users[index];
  // return null;
  return usersModel.findById(id)
};

export const findUserByUsername = (username) => {
  // const index = users.findIndex((u) => u.username === username);
  // if (index !== -1) return users[index];
  // return null;
  return usersModel.findOne({ username })
};

export const findUserByCredentials = (username, password) => {
  // const index = users.findIndex((u) => u.username === username && u.password === password);
  // if (index !== -1) return users[index];
  // return null;
  return usersModel.findOne({ username, password })
};

export const createUser = (user) => {
  // const newUser = { ...user, _id: (new Date()).getTime() + '' };
  // users.push(newUser);
  // return newUser;
  return usersModel.create(user)
};

export const updateUser = (id, user) => {
  // const index = users.findIndex((u) => u._id === uid);
  // users[index] = { ...users[index], ...user };
  // return { status: 'ok' }
  return usersModel.updateOne({ _id: id }, { $set: user })
};

export const deleteUser = (id) => {
  // const index = users.findIndex((u) => u._id === uid);
  // users.splice(index, 1);
  // return { status: 'ok' }
  return usersModel.deleteOne({ _id: id })
};