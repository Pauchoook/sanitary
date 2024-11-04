import * as functions from "./files/functions.js";

import "../scss/style.scss";
import spoller from "./files/spoller.js";
import servicesToggle from "./files/servicesToggle.js";
import burger from "./files/burger.js";
import headerScroll from "./files/headerScroll.js";
import tab from "./files/tab.js";
import select from "./files/select.js";
import modal from "./files/modal.js";
import map from "./files/map.js";

functions.mediaAdaptive();
spoller();
servicesToggle();
burger();
headerScroll();
tab();
select();
modal();
map();