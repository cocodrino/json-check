import store from "../store/index"
import {changeAppStatus,submitJson} from "../actions";

window.store = store;
//window.addArticle = addArticle;
window.changeAppStatus = changeAppStatus;
window.submitJson = submitJson;
