import { render, screen, fireEvent } from "@testing-library/react";
import HiddenComponent from "./index";

describe("HiddenComponent", () => {
  const mockOnTotalValueChange = jest.fn();

  beforeEach(() => {
    render(<HiddenComponent onTotalValueChange={mockOnTotalValueChange} />);
  });

  it("renders input field", () => {
    expect(screen.getByLabelText("Type Existing Gcta")).toBeInTheDocument();
  });

  it("renders input field and radio buttons", () => {
    expect(screen.getByLabelText("Type Existing Gcta")).toBeInTheDocument();
    expect(screen.getByTestId("existingGcta20")).toBeInTheDocument();
    expect(screen.getByTestId("existingGcta23")).toBeInTheDocument();
    expect(screen.getByTestId("existingGcta25")).toBeInTheDocument();
    expect(screen.getByTestId("existingGcta30")).toBeInTheDocument();
  });

  it("renders Calculate button", () => {
    expect(screen.getByText("Calculate")).toBeInTheDocument();
  });

  it("shows error when Calculate is clicked without input", () => {
    fireEvent.click(screen.getByText("Calculate"));
    const errorMessages = screen.getAllByText("This field is required!");
    expect(errorMessages.length).toBe(2);
    expect(screen.getByText("GCTA is required!")).toBeInTheDocument();
  });

  it("calculates total value correctly", () => {
    fireEvent.change(screen.getByLabelText("Type Existing Gcta"), {
      target: { value: "100" },
    });
    fireEvent.click(screen.getByLabelText("20"));
    fireEvent.click(screen.getByText("Calculate"));
    expect(mockOnTotalValueChange).toHaveBeenCalledWith(120);
  });

  it("resets form when Reset button is clicked", () => {
    fireEvent.change(screen.getByLabelText("Type Existing Gcta"), {
      target: { value: "100" },
    });
    fireEvent.click(screen.getByLabelText("20"));
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByLabelText("Type Existing Gcta")).toHaveValue("");
    expect(screen.getByLabelText("20")).not.toBeChecked();
    expect(mockOnTotalValueChange).toHaveBeenCalledWith(0);
  });
});
