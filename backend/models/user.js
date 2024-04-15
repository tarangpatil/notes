"use strict";
const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    static async addUser(name, age, email, password) {
      console.log({ name, age, email, password });
      if (
        !email ||
        email.length === 0 ||
        email.indexOf("@") <= 0 ||
        email.indexOf(".") <= 1
      ) {
        throw Error("Invalid email");
      }
      if (!password || password.length === 0) {
        throw Error("Invalid password");
      }
      if (password.length < 4) {
        throw Error("Password too short");
      }
      if (!name || name.length === 0) {
        throw Error("Invalid name");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      return this.create({ name, age, email, password: hashedPassword });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
