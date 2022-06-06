import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getQuizService = async (categoryId) => {
  let categoryObj;
  let quizObj;
  const q = query(
    collection(db, "categories"),
    where("categoryId", "==", categoryId)
  );

  const categoryDoc = await getDocs(q);
  categoryDoc.forEach((doc) => {
    categoryObj = doc.data();
  });

  const quizQuery = query(
    collection(db, "quizes"),
    where("categoryName", "==", categoryObj.categoryName)
  );

  const quizDoc = await getDocs(quizQuery);
  quizDoc.forEach((doc) => {
    quizObj = doc.data();
  });
  return quizObj;
};
