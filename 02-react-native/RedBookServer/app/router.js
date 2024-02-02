module.exports = app => {
  const {router,controller} = app
  router.get("/", controller.user.index)
  router.get("/login", controller.user.login)
}