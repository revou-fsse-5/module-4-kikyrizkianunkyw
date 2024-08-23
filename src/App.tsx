// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import MultiStepForm from "./components/MultiStepForm";

// function App() {
//   return (
//     <div className="App">
//       <div className="w-full flex item-center justify-center flex-col p-5 border border-sky-500 rounded-3xl">
//         <h1>Multi-Step Form</h1>
//         <MultiStepForm />
//       </div>
//     </div>
//   );
// }

// const App: React.FC = () => {
//   return (
//     <div className="w-full flex item-center justify-center flex-col p-5 border border-sky-500 rounded-3xl">
//       <h1>Multi-Step Form</h1>
//       <MultiStepForm />
//     </div>
//   );
// };

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import { AuthProvider, useAuth } from "./context/AuthContext";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Category from "./pages/Category";

// const AppRoutes: React.FC = () => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Routes>
//       <Route path="/register" element={<Register />} />
//       <Route path="/login" element={<Login />} />
//       <Route
//         path="/categories"
//         element={isAuthenticated ? <Category /> : <Navigate to="/login" />}
//       />
//       <Route path="*" element={<Navigate to="/login" />} />
//     </Routes>
//   );
// };

// const App: React.FC = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//           <div className="max-w-2xl w-full p-6 bg-white rounded shadow-md">
//             <AppRoutes />
//           </div>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Category from "./pages/Category";

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={isAuthenticated ? <Category /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-2xl w-full p-6 bg-white rounded shadow-md">
            <AppRoutes />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
