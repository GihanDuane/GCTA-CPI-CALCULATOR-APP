import CpiAndGctaDetails from "@components/CpiAndGctaDetails";
import GctaCalculator from "@components/GctaCalculator";
import React from "react";
const App = () => {
  const [cpiResult, setCpiResult] = React.useState<number | null>(null);
  const [cpiDays, setCpiDays] = React.useState<number | null>(null);
  const [cpiMonths, setCpiMonths] = React.useState<number | null>(null);
  const [cpiYears, setCpiYears] = React.useState<number | null>(null);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full bg-[#FFFAFA] h-screen">
        <GctaCalculator
          setCpiResult={setCpiResult}
          setCpiDays={setCpiDays}
          setCpiMonths={setCpiMonths}
          setCpiYears={setCpiYears}
        />
        <CpiAndGctaDetails
          cpiResult={cpiResult}
          cpiYears={cpiYears}
          cpiMonths={cpiMonths}
          cpiDays={cpiDays}
        />
      </div>
    </>
  );
};

export default App;
