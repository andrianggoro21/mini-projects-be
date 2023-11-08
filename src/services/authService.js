const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { keepLoginQuery, registerQuery, updateAvatarQuery } = require("../queries/authQuery");
const { findUserQuery } = require("../queries/userQuery");
const { transporter } = require("../utils/nodemailer");
const { template } = require("handlebars");


const registerService = async (fullname, email, password, roleId) => {
    try {
        const check  = await findUserQuery({fullname, email});

        if (check) throw new Error("Email or fullname already exist");

        const salt = await bcrypt.genSalt(10);

        const hashPassword = await bcrypt.hash(password, salt);

        const res = await registerQuery(fullname, email, hashPassword, roleId);

        // const temp = await FileSystem.readFileSync(
        //     path.join(__dirname, "../template", "registration-template.html"),
        //     "utf-8",
        // );

        // const tempCompile = await handlebars.compile(temp);
        // const tempResult = tempCompile({ email: res.email });

        
        // await transporter.sendMail({
        //     from: process.env.GMAIL_USER,
        //     to: res.email,
        //     subject: "Activation",
        //     html: "<h1>Welcome to purwadhika</h1>"
        // });
        

        return res;
    } catch (err) {
        throw err;
    }
};

const loginService = async (email, password) => {
    try {
      const check = await findUserQuery({ email });
      if (!check) throw new Error("Email doesnt exist");

      const isValid = await bcrypt.compare(password, check.password);
      if (!isValid) throw new Error("Password is not valid");

      let payload = {
        id: check.id,
        fullname: check.fullname,
        email: check.email,
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

const updateAvatarService = async (id, avatar) => {
    try {
       const result = await updateAvatarQuery(id, avatar);
      return result
   
   }  catch (err) {
    throw err
}}

module.exports = {
    registerService,
    loginService,
    keepLoginService,
    updateAvatarService,
};
