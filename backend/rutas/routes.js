const routes = require('express').Router()
const { getControl, postControl } = require('../controladores/index.js')
const { getDataControl } = getControl
const { newPostControl } = postControl


routes.get("/posts", getDataControl)


routes.post("/posts", newPostControl)


module.exports = routes