import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from "./components/sections/reservePages/BookingForm";


test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Select Date");
  expect(headingElement).toBeInTheDocument();
});
