const router = require("express").Router();

const { renderEditForm } = require("../controllers/users.controller");
const {
  renderSignUpForm,
  singup,
  renderSigninForm,
  signin,
  logout,

  searchUser,
  updateUser,
} = require("../controllers/users.controller");

// Routes
router.get("/users/signup", renderSignUpForm);

router.post("/users/signup", singup);

router.get("/users/signin", renderSigninForm);

router.post("/users/signin", signin);

router.get("/users/logout", logout);

//
router.post("/users/see-user", searchUser);

router.post("/search", searchUser);

// Edit User
router.get("/users/edit/:id", renderEditForm);

router.put("/users/edit-user/:id", updateUser);

module.exports = router;
