import { sayHi } from "./modules/sayHi.js";
// import { changeBg, drawSquare, user, renderShape } from "./modules/config.js";
// import {renderShape as render} from './modules/renders.js'

import * as Config from "./modules/config.js";
import * as Renders from './modules/renders.js'

// sayHi('John');
console.log(Config.user);

Config.changeBg();

document.getElementById("button").addEventListener("click", () => Config.renderShape());
document.getElementById("btnCircle").addEventListener("click", () => Renders.renderShape());
