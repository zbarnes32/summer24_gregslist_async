import { AccountController } from "./controllers/AccountController.js";
import { CarsController } from "./controllers/CarsController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [],
    view: 'app/views/HomeView.html'
  },
  {
    path: '#/cars',
    controllers: [CarsController],
    view: 'app/views/CarsView.html'
  },
  {
    path: '#/houses',
    controllers: [],
    view: 'app/views/HousesView.html'
  },
  {
    path: '#/jobs',
    controllers: [],
    view: 'app/views/JobsView.html'
  },
  // NOTE do not touch!
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




