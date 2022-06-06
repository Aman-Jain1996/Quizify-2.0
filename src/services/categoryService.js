import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const getCategoryService = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  const categories = [];
  querySnapshot.forEach((doc) => categories.push(doc.data()));
  return categories;
};
