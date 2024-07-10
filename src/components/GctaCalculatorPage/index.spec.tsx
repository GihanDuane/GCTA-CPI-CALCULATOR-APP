import GctaCalculator from "./index";
import { render, screen } from "@testing-library/react";

it("renders GctaCalculator", () => {
  render(<GctaCalculator />);

  expect(screen.getByText("CPI and GCTA Calculator")).toBeInTheDocument();
});
