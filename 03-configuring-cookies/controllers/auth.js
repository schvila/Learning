exports.getLogin = (req, res, next) => {
  console.log("check cookie:");
  console.log(req.get("Cookie"));
  let isLoggedIn = false;
  if (req.get("Cookie")) {
    isLoggedIn = req.get("Cookie").trim().split("=")[1];
  }
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader("Set-Cookie", "loggedIn=true");
  res.redirect("/");
};
