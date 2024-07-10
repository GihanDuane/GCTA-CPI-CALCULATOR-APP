import CpiAndGctaDetails from "@components/CpiAndGctaDetails";
import GctaCalculator from "@components/GctaCalculator";
const App = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full bg-[#FFFAFA] h-screen">
        <GctaCalculator />
        <CpiAndGctaDetails />
      </div>
    </>
  );
};

export default App;
