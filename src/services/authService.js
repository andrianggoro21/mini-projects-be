const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { keepLoginQuery, registerQuery } = require("../queries/authQuery");
const { findUserQuery } = require("../queries/userQuery");

const registerService = async (fullname, email, password) => {
    console.log(fullname);
    try {
        const check  = await findUserQuery({fullname, email});
        console.log(check);

        if (check) throw new Error("Email or fullname already exist");

        const salt = await bcrypt.genSalt(10);

        const hashPassword = await bcrypt.hash(password, salt);

        const res = await registerQuery(fullname, email, hashPassword);

        return res;
    } catch (err) {
        throw err;
    }
};

const loginService = async ( email, password ) => {
    try {
      const check = await findUserQuery({ email });
      if (!check) throw new Error("Email doesnt exist");

      const isValid = await bcrypt.compare(password, check.password);
      if (!isValid) throw new Error("Password is not valid");

      let payload = {
        id: check.id,
        email: check.email,
        fullname: check.fullname,
        roleId: check.roleId,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: "1hr",
      });
      return { user: check, token };
    } catch (err) {
        throw err;
    }
};

const keepLoginService = async (id) => {
    try {
        const res = await keepLoginQuery(id);

        if (!res) throw new Error("User does exist");

        return res;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    registerService,
    loginService,
    keepLoginService,
};
