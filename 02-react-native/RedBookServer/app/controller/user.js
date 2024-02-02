const Controller = require("egg").Controller

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello world';
  }
  async login(){
    console.log(this.ctx.request.body)
    this.ctx.body = 'Hello world i mam login';
  }
}

module.exports = HomeController;