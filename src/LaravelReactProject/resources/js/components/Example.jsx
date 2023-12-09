import React from "react";
import App from "./app";
import ReactDOM from "react-dom/client";

// import { Routes, Route } from "react-router-dom"

// function Example() {
//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-md-8">
//                     <div className="card">
//                         <div className="card-header">Example Component</div>
//                         <Home />
//                         <div className="card-body">I'm an example compona</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Example;

if (document.getElementById("example")) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(<App />);
}
