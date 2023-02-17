import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Meteo from "./Meteo";

describe('Meteo Page', () => {
  it('possède un titre de niveau h1', () => {
    render(<Meteo />, {wrapper: BrowserRouter});
    const titleElement = screen.getByRole('heading', {level: 1})
    expect(titleElement).toBeInTheDocument();
  })

  it('possède un bouton pour accéder à la météo', () => {
    render(<Meteo />, {wrapper: BrowserRouter});
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'button');
  })

});
