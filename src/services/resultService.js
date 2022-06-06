import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export const addScoreToDBService = async (userId, categoryName, score) => {
  const collectionRef = collection(db, "results");
  try {
    await addDoc(collectionRef, {
      userId,
      categoryName,
      score,
      id: Date.now(),
    });
  } catch (err) {
    console.error(err.message);
  }
};
