import { initializeApp } from 'firebase/app';
import { get, set, ref, getDatabase} from 'firebase/database';

// yes this is intentional ;)
const firebaseConfig = {
    apiKey: "AIzaSyBZUeGGKkhlGj4f-76wvjFdEgNZ7CpUG3w",
    authDomain: "chaimk-457c2.firebaseapp.com",
    databaseURL: "https://chaimk-457c2-default-rtdb.firebaseio.com",
    projectId: "chaimk-457c2",
    storageBucket: "chaimk-457c2.appspot.com",
    messagingSenderId: "759712792903",
    appId: "1:759712792903:web:34924ae9fc2571b3d68c62",
    measurementId: "G-RQR31TJVSK"
  };
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export async function getHistorical() {
    const val = await get(ref(database, "/historical"))
                    .catch(err => console.log(err))
   
    const data = await val.val()
    console.log(data)
    return data
}

export async function writeStatus(meta, rand, location) {
    const dbref = ref(database, `/status/isOn`)
    const result = await set(dbref, false)
}