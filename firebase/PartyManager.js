import * as firebase from "firebase";
import dateFormat from "dateformat";

//  Built using this guide: https://firebase.googleblog.com/2016/01/the-beginners-guide-to-react-native-and_84.html

//  Initialize Firebase
const config = {
  apiKey: "AIzaSyD4ugqJLnxUXhukZDjp9l6eY7SSVmTevNI",
  authDomain: "auxq-ae6fb.firebaseapp.com",
  databaseURL: "https://auxq-ae6fb.firebaseio.com",
  projectId: "auxq-ae6fb",
  storageBucket: "auxq-ae6fb.appspot.com",
  messagingSenderId: "510846010981"
};

// Generates id - can possibly use instead of Google's push() for a shorter url
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return "ss-s-s-s-sss".replace(/s/g, s4);
}

class PartyManager {
  constructor(uid) {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    if (uid) {
      this.uid = uid;
    }
    this.ref = firebase.database().ref();
  }

  getParty(type, callback) {
    this.ref.child(`users/${this.uid}`).on("value", child => {
      const partyIDs = Object.keys(child.val()[`${type}Parties`]);
      const buffer = [];

      partyIDs.forEach(party => {
        const partyRef = this.ref.child(`parties/${party}/meta`);
        partyRef.once("value").then(snapshot => {
          const { date, icon, name, songs } = snapshot.val();
          buffer.push({
            date,
            icon,
            name,
            songs
          });
          callback(buffer);
        });
      });
    });
  }

  addMember(uid, partyID, callback) {
    const updates = {};
    updates[`users/${uid}/hostedParties/${partyID}`] = true;
    updates[`parties/${partyID}/members/${this.uid}`] = true;
    this.ref.update(updates).then(callback());
  }

  addHost(uid, partyID, callback) {
    this.addMember(uid, partyID, () => null);
    const updates = {};
    updates[`parties/${partyID}/hosts/${this.uid}`] = true;
    this.ref.update(updates).then(callback());
  }

  makeParty(name, callback) {
    const date = new Date()
    const format = dateFormat(date, "mm.dd.yy").toString();
    const partyRef = this.ref.child("parties").push();

    partyRef
      .set({
        meta: {
          name,
          date: format,
          songs: 0
        },
        songs: true
      })
      .then(() =>
        this.addHost(this.uid, partyRef.key, () => callback(partyRef.key))
      );
  }

  joinParty(partyID, callback) {
    this.addMember(this.uid, partyID, () => callback());
  }

  getSongs(partyID, callback) {
    this.ref.child(`parties/${partyID}/songs`).on("value", child => {
      console.log(child);
    });
  }
}

export default PartyManager;