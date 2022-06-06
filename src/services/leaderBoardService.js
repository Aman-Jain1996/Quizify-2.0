import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const getLeaderboardDataService = async () => {
  const collectionRef = collection(db, "results");
  const response = await getDocs(collectionRef);
  let resultData = [];
  response.forEach((doc) => resultData.push(doc.data()));
  return resultData.sort((a, b) => b.score - a.score);
};

export const getUserDataService = async () => {
  const collectionRef = collection(db, "users");
  const response = await getDocs(collectionRef);
  const userData = [];
  response.forEach((doc) => userData.push(doc.data()));
  return userData;
};
