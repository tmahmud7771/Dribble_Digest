import { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getCategory = (id) => {
    const promise = new Promise((resolve, reject) => {
      fetch(`${process.env.REACT_APP_API_URL}/category/${id}`)
        .then((res) => res.json())
        .then((data) => {
          const result = data.result;
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  };

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://e-sports-blog-server.onrender.com/category`)
      .then((res) => res.json())
      .then((data) => {
        const result = data.result;
        setCategories(result);
        setIsLoading(false);
        setSuccessMessage("Category Fetched Successfully!");
      })
      .catch((error) => {
        setErrorMessage(error);
        setIsLoading(false);
      });
  }, [categories]);

  return {
    categories,
    isLoading,
    successMessage,
    errorMessage,
    getCategory,
  };
};

export default useCategories;
