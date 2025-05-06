import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCgYVaOeft-LI9HJLEG-9Wf_sHgq-2xxo8",
  authDomain: "tstreets-orange-potatoe.firebaseapp.com",
  projectId: "tstreets-orange-potatoe",
  storageBucket: "tstreets-orange-potatoe.firebasestorage.app",
  messagingSenderId: "628136156736",
  appId: "1:628136156736:web:b55939046557cbbc5949a5",
  measurementId: "G-DR1E0HP705",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
