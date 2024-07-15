import CpiAndGctaDetails from "./index";
import { screen, render } from "@testing-library/react";

describe("CpiAndGctaDetails", () => {
  const defaultProps = {
    cpiResult: 100,
    cpiYears: 1,
    cpiMonths: 2,
    cpiDays: 3,
    totalGctaPoints: 200,
    gctaPoints20: 50,
    gctaPoints23: 60,
    gctaPoints25: 70,
    gctaPoints30: 20,
    hiddenComponentTotalValue: null,
    showHiddenComponent: false,
  };

  it("renders CPI Result", () => {
    render(<CpiAndGctaDetails {...defaultProps} />);
    expect(screen.getByText("CPI Result")).toBeInTheDocument();
  });

  it("renders GCTA Result", () => {
    render(<CpiAndGctaDetails {...defaultProps} />);
    expect(screen.getByText("GCTA Result")).toBeInTheDocument();
  });

  it("displays correct CPI values", () => {
    render(<CpiAndGctaDetails {...defaultProps} />);
    expect(screen.getByText("100 Days")).toBeInTheDocument();
    expect(screen.getByText("1 Years, 2 Months, 3 Days")).toBeInTheDocument();
  });

  it("displays correct GCTA values when showHiddenComponent is false", () => {
    render(<CpiAndGctaDetails {...defaultProps} />);
    expect(screen.getByText("Total GCTA points: 200")).toBeInTheDocument();
    expect(
      screen.getByText("1-2 years total GCTA points: 50")
    ).toBeInTheDocument();
  });

  it("displays hidden component values when showHiddenComponent is true", () => {
    render(
      <CpiAndGctaDetails
        {...defaultProps}
        showHiddenComponent={true}
        hiddenComponentTotalValue={300}
      />
    );
    expect(
      screen.getByText("Total Gcta Earned with existing Gcta points")
    ).toBeInTheDocument();
    expect(screen.getByText("Total GCTA points:300")).toBeInTheDocument();
  });
});
