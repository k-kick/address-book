import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import firebase from "firebase";

// Firebase設定
var config = {
  apiKey: "AIzaSyBeUdrHZyHkbJnT6k4bGRZiMVGY0p5XvqQ",
  authDomain: "techgen-react.firebaseapp.com",
  databaseURL: "https://techgen-react-default-rtdb.firebaseio.com",
  projectId: "techgen-react",
  storageBucket: "techgen-react.appspot.com",
  messagingSenderId: "896252738184",
};

// Firebase初期化
var fireapp;
try {
  fireapp = firebase.initializeApp(config);
} catch(error) {
  console.log(error.message);
}
export default fireapp;

// ステート初期化
const initial = {
  login: false,
  username: "(click here!)",
  email: "",
  data: [],
  items: [],
};

// レデューサー
function fireReducer(state = initial, action) {
  switch(action.type) {
    case "UPDATE_USER":
      // ダミー
      return action.value;
    default:
      // デフォルト
      return state;
  }
}

// initStore関数
export function initStore(state = initial) {
  return createStore(fireReducer, state, applyMiddleware(thunkMiddleware));
}
