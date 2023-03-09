import { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getBlog = (id) => {
    const promise = new Promise((resolve, reject) => {
      fetch(`https://e-sports-blog-server.onrender.com/blogs/${id}`)
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

  const getCategoryBlogs = (category) => {
    const promise = new Promise((resolve, reject) => {
      fetch(`${process.env.REACT_APP_API_URL}/blogs?category=${category}`)
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

    fetch(`${process.env.REACT_APP_API_URL}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        const result = data.result;
        setBlogs(result);
        setIsLoading(false);
        setSuccessMessage("Blogs Fetched Successfully!");
      })
      .catch((error) => {
        setErrorMessage(error);
        setIsLoading(false);
      });
  }, [blogs]);

  return {
    blogs,
    isLoading,
    successMessage,
    errorMessage,
    getBlog,
    getCategoryBlogs,
  };
};

export default useBlogs;
