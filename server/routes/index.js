module.exports = app => {

    const coastersRouter = require("./coasters.routes")
    app.use("/api/coasters", coastersRouter)
}