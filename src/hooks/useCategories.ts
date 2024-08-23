// hooks/useCategories.ts

import { useEffect, useState } from "react";
import axios from "axios";
import { ICategory } from "../types/types";

const useCategories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080");
      setCategories(response.data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useCategories;


// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ICategory } from '../types/types';


// const useCategories = () => {
//   const [categories, setCategories] = useState<ICategory[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     axios.get('http://localhost:8080')
//       .then(response => {
//         setCategories(response.data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError('Failed to fetch categories');
//         setLoading(false);
//       });
//   }, []);

//   return { categories, loading, error };
// };

// export default useCategories;
