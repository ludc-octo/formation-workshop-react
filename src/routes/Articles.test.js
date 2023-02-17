import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Articles from "./Articles";

describe('Articles Page', () => {
  it('possède un titre de niveau h1', () => {
    render(<Articles />, {wrapper: BrowserRouter});
    const titleElement = screen.getByRole('heading', {level: 1})
    expect(titleElement).toBeInTheDocument();
  })

});
