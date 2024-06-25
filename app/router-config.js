import { AccountController } from "./controllers/AccountController.js";
import { HomeController } from "./controllers/HomeController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController],
    view: 'app/views/HomeView.html'
  },
  {
    path: '#/cars',
    controllers: [],
    view: 'app/views/CarsView.html'
  },
  // NOTE do not touch!
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




