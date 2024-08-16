import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import MultiStepForm from "./components/MultiStepForm";

function App() {
  return (
    <div className="App">
      <div className="w-full flex item-center justify-center flex-col p-5 border border-sky-500 rounded-3xl">
        <h1>Multi-Step Form</h1>
        <MultiStepForm />
      </div>
    </div>
  );
}

// const App: React.FC = () => {
//   return (
//     <div className="w-full flex item-center justify-center flex-col p-5 border border-sky-500 rounded-3xl">
//       <h1>Multi-Step Form</h1>
//       <MultiStepForm />
//     </div>
//   );
// };

export default App;
