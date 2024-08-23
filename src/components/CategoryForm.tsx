import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ICategory } from "../types/types";

interface CategoryFormProps {
  onSubmit: (data: ICategory) => void;
  defaultValues?: ICategory;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Category name is required"),
});

const CategoryForm: React.FC<CategoryFormProps> = ({
  onSubmit,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICategory>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-4 rounded-lg shadow-md space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category Name
        </label>
        <input
          {...register("name")}
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        {defaultValues ? "Update Category" : "Add Category"}
      </button>
    </form>
  );
};

export default CategoryForm;
