import CpiAndGctaDetails from "./index";
import { screen, render } from "@testing-library/react";

it("Should render the CPI and GCTA Details component", () => {
  render(<CpiAndGctaDetails />);

  expect(screen.getByText("CPI Result")).toBeInTheDocument();
  expect(screen.getByText("GCTA Result")).toBeInTheDocument();
});
