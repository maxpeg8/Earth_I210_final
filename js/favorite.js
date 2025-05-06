import { app } from "./app.js";

import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

const moonsCollection = collection(db, "moonsrec");

const moonsRef = document.querySelector("#recMoons");
const moonFormRef = document.querySelector("#new-moon");
const moonTextRef = document.querySelector("#moon-text");

async function getMoons() {
  const moonsDocs = await getDocs(moonsCollection);

  moonsRef.innerHTML = "";
  for (let i = 0; i < moonsDocs.docs.length; i++) {
    const currentMoon = moonsDocs.docs[i];

    const moonData = currentMoon.data();
    moonsRef.innerHTML += `    
    <div class="moonRec">
        <h4>
        <span class="delete" data-id="${currentMoon.id}">&cross;</span>
        ${moonData.text}
        </h4>
      </div>
    `;
  }

  const crossesRef = document.querySelectorAll(".delete");

  for (let i = 0; i < crossesRef.length; i++) {
    crossesRef[i].onclick = forgetMoon;
  }
}

async function addNewMoon(e) {
  e.preventDefault();

  const moonTextValue = moonTextRef.value;

  if (moonTextValue.trim() === "") {
    alert("Please enter a moon");
  } else {
    const newMoon = await addDoc(moonsCollection, { text: moonTextValue });

    getMoons();

    moonFormRef.reset();
  }
}

moonFormRef.onsubmit = addNewMoon;

async function forgetMoon(e) {
  const userConfirmed = confirm("Are you sure you want to remove this moon?");

  if (userConfirmed) {
    const moonToDelete = doc(moonsCollection, e.target.dataset.id);

    await deleteDoc(moonToDelete);

    getMoons();
  }
}

getMoons();
