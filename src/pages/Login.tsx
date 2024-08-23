import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../context/AuthContext";

interface LoginFormData {
  username: string;
  password: string;
}

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Login: React.FC = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    axios
      .post("http://localhost:8080/login", data)
      .then(() => {
        login();
        alert("Login successful");
      })
      .catch(() => alert("Login failed"));
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            {...register("username")}
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import axios from "axios";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

// interface IFormInput {
//   username: string;
//   password: string;
// }

// const Login: React.FC = () => {
//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required("Username is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IFormInput>({
//     resolver: yupResolver(validationSchema),
//   });

//   const onSubmit: SubmitHandler<IFormInput> = (data) => {
//     axios
//       .post("http://localhost:8080/login", data)
//       .then((response) => {
//         alert("Login successful");
//       })
//       .catch((error) => {
//         console.error("There was an error!", error);
//       });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="max-w-md mx-auto mt-8 p-4 shadow-lg rounded-lg"
//     >
//       <div className="mb-4">
//         <label className="block text-gray-700">Username</label>
//         <input
//           {...register("username")}
//           className="w-full px-3 py-2 border rounded"
//         />
//         <p className="text-red-500">{errors.username?.message}</p>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Password</label>
//         <input
//           type="password"
//           {...register("password")}
//           className="w-full px-3 py-2 border rounded"
//         />
//         <p className="text-red-500">{errors.password?.message}</p>
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 rounded"
//       >
//         Login
//       </button>
//     </form>
//   );
// };

// export default Login;
