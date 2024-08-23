import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryForm from "../components/CategoryForm";
import { ICategory } from "../types/types";

const Category: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:8080");
    setCategories(response.data);
  };

  const addCategory = async (category: ICategory) => {
    await axios.post("http://localhost:8080", category);
    fetchCategories(); // Refresh daftar kategori setelah menambah
  };

  const updateCategory = async (id: number, updatedCategory: ICategory) => {
    await axios.put(`http://localhost:8080/${id}`, updatedCategory);
    fetchCategories(); // Refresh daftar kategori setelah memperbarui
  };

  const handleDeleteCategory = async (id: number) => {
    await axios.delete(`http://localhost:8080/${id}`);
    fetchCategories(); // Refresh daftar kategori setelah menghapus
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <CategoryForm onSubmit={addCategory} />

      <ul className="mt-4 space-y-2">
        {categories.map((category) => (
          <li
            key={category.id}
            className="flex justify-between items-center p-2 border rounded"
          >
            <span>{category.name}</span>
            <div className="space-x-2">
              <button
                onClick={() =>
                  category.id && updateCategory(category.id, category)
                }
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => category.id && handleDeleteCategory(category.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

// import React, { useState } from "react";
// import useCategories from "../hooks/useCategories";
// import CategoryForm from "../components/CategoryForm";
// import axios from "axios";
// import { ICategory } from "../types/types";

// const Category: React.FC = () => {
//   const { categories, loading, error } = useCategories();
//   const [editingCategory, setEditingCategory] = useState<ICategory | null>(
//     null
//   );

//   const handleAddCategory = (category: ICategory) => {
//     axios
//       .post("http://localhost:8080/categories", category)
//       .then(() => window.location.reload())
//       .catch(() => alert("Failed to add category"));
//   };

//   const handleUpdateCategory = (category: ICategory) => {
//     axios
//       .put(`http://localhost:8080/categories/${category.id}`, category)
//       .then(() => window.location.reload())
//       .catch(() => alert("Failed to update category"));
//   };

//   const handleDeleteCategory = (id: number) => {
//     axios
//       .delete(`http://localhost:8080/categories/${id}`)
//       .then(() => window.location.reload())
//       .catch(() => alert("Failed to delete category"));
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="max-w-lg mx-auto space-y-6">
//       <h2 className="text-2xl font-bold">Categories</h2>

//       <CategoryForm
//         onSubmit={editingCategory ? handleUpdateCategory : handleAddCategory}
//         defaultValues={editingCategory || undefined}
//       />

//       <ul className="space-y-2">
//         {categories.map((category) => (
//           <li
//             key={category.id}
//             className="flex justify-between items-center p-2 border rounded"
//           >
//             <span>{category.name}</span>
//             <div className="space-x-2">
//               <button
//                 onClick={() => setEditingCategory(category)}
//                 className="bg-yellow-500 text-white px-2 py-1 rounded"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDeleteCategory(category.id!)}
//                 className="bg-red-500 text-white px-2 py-1 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Category;
