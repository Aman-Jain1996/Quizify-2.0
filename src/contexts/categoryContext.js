import { createContext, useContext, useEffect, useState } from "react";
import { getCategoryService } from "services";
import { useAuth } from "./authContext";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const { setShowLoader } = useAuth();
  useEffect(() => {
    (async () => {
      setShowLoader(true);
      try {
        const response = await getCategoryService();
        setCategories(response);
      } catch (err) {
        console.error(err.message);
      } finally {
        setShowLoader(false);
      }
    })();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryData = () => useContext(CategoryContext);
