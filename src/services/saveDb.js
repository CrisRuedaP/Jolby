import { firestore } from "../firebaseConfig";
export const createUserRegister = (user = {}) => {
  let { uid, data } = user;
  const usersRef = firestore.collection("Users");
  usersRef
    .doc(uid)
    .set(data)
    usersRef
    .doc(uid)
    .update({rol: 'student'})
    .then(() => {
      console.log("user registered");
    })
    .catch((error) => {
      alert(error);
    });
};