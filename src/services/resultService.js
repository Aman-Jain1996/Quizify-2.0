import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export const addScoreToDBService = async (userId, categoryId, score) => {
  const collectionRef = collection(db, "results");
  try {
    await addDoc(collectionRef, {
      userId,
      categoryId,
      score,
      id: Date.now(),
    });
  } catch (err) {
    console.error(err.message);
  }
};
