const Controller = require("../controllers/Controller")

module.exports = (app) => {
    app.post("/login", Controller.register)
app.post("/register", Controller.login)
}
