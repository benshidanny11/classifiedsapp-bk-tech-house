
const bcrypt=require('bcrypt');
const {
  User
} =require( '../db/models');

dotenv.config();
const UserController = {
  login: async (req, res) => {
    const {
      user: { email, password, },
    } = req;
    const userData = { email, password, };
    const access_token = await generateAccessToken(userData);
    const userResurt = await User.findOne({
        where: { email },
        attributes: [
          'name',
          'email',
          'password',
        ]
      });
      const user = userResurt.dataValues;
    if (!result.includes(1)) {
      return res.sendStatus(500);
    }
    res.json({ access_token, userData });
  },
  signup: async (req, res) => {
    const { body } = req;
    const userObject = {
      name: body.name,
      email: body.email,
      password:  bcrypt.hashSync(body.password, 10),
    };
    let newUser = await User.create(userObject);
    newUser = newUser?.dataValues;
    if (!newUser) return res.sendStatus(500);
    res.sendStatus(201);
  },



//   getMyProfile: async (req, res) => {
//     try {
//       const {
//         authUser: { u_id },
//       } = req;
//       let user = await User.findOne({
//         where: { u_id },
//         attributes: [
//           'u_id',
//           'u_email',
//           'u_role',
//           'verified',
//           'blocked',
//           'updatedAt',
//           'createdAt',
//         ],
//         include: [
//           {
//             model: Cart,
//             as: 'cart',
//             include: [{ model: Medicine, as: 'medicine' }],
//           },
//           { model: Patient, as: 'patients' },
//           { model: Doctor, as: 'doctors' },
//           { model: Order, as: 'orders' },
//         ],
//       });
//       user = user.dataValues;
//       let totalCartAmount = 0;
//       user.cart.forEach((c) => {
//         totalCartAmount
//           += Number(c.dataValues.c_quantity)
//           * Number(c.dataValues.medicine.dataValues.m_price);
//       });
//       if (totalCartAmount > 0) {
//         user.cart.push({ totalCartAmount });
//       }
//       if (!user) return res.sendStatus(204);
//       res.json({
//         user,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   },

};

export default UserController;
