// import GctaCalculatorPage from "@components/GctaCalculatorPage";

// const App = () => {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center w-full bg-[#FFFAFA] h-screen">
//         <GctaCalculatorPage />
//       </div>
//     </>
//   );
// };

// export default App;

import React, { Suspense } from "react";

const GctaCalculatorPage = React.lazy(
  () => import("@components/GctaCalculatorPage")
);

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#FFFAFA] h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <GctaCalculatorPage />
      </Suspense>
    </div>
  );
};

export default App;
