// import "@testing-library/jest-dom";
// import "@testing-library/jest-dom/extend-expect";

// import { global } from "@apollo/client/utilities/globals";
import "@testing-library/jest-dom";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;
