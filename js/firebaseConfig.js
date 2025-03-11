// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

const appSetting = {
    databaseURL: "https://art-appraise-e7059-default-rtdb.firebaseio.com/"
};

const app = initializeApp(appSetting);
const database = getDatabase(app);

export { database, ref, push, onValue }; 
