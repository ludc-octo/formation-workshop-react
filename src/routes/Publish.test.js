import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Publish from './Publish';

describe('Publish Page', () => {
  it('possède un titre de niveau h1', () => {
    render(<Publish />, {wrapper: BrowserRouter});
    const titleElement = screen.getByRole('heading', {level: 1})
    expect(titleElement).toBeInTheDocument();
  })

  it('possède un bouton pour publier l\'article', () => {
    render(<Publish />, {wrapper: BrowserRouter});
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'submit');
  })

  it('possède deux champs texte', () => {
    render(<Publish />, {wrapper: BrowserRouter});
    const textBoxesElement = screen.getAllByRole('textbox')
    expect(textBoxesElement[0]).toBeInTheDocument();
    expect(textBoxesElement[1]).toBeInTheDocument();
  })

});
