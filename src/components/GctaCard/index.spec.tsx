import { render, screen, fireEvent } from "@testing-library/react";
import GctaCard from "./index";

describe("GctaCard", () => {
  const mockOnCalculate = jest.fn();
  const mockOnTotalValueChange = jest.fn();
  const mockOnShowHiddenComponentChange = jest.fn();

  beforeEach(() => {
    render(
      <GctaCard
        onCalculate={mockOnCalculate}
        onTotalValueChange={mockOnTotalValueChange}
        onShowHiddenComponentChange={mockOnShowHiddenComponentChange}
      />
    );
  });

  it("renders Date of Detention input", () => {
    expect(screen.getByText("Date of Detention")).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText("MM/DD/YYYY")[0]).toBeInTheDocument();
  });

  it("renders End Date input", () => {
    expect(screen.getByText("End Date")).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText("MM/DD/YYYY")[1]).toBeInTheDocument();
  });

  it("renders Calculate button", () => {
    expect(screen.getByText("Calculate")).toBeInTheDocument();
  });

  it("shows error when Calculate is clicked without dates", () => {
    fireEvent.click(screen.getByText("Calculate"));
    const errorMessages = screen.getAllByText("This field is required!");
    expect(errorMessages.length).toBe(4);
    expect(errorMessages.filter((msg) => msg.tagName === "LABEL").length).toBe(
      2
    );
  });
});
