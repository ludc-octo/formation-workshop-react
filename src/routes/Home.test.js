import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Home from './Home';

describe('Home Page', () => {
  it('possède un titre de niveau h1', () => {
    render(<Home />, {wrapper: BrowserRouter});
    const titleElement = screen.getByRole('heading', {level: 1})
    expect(titleElement).toBeInTheDocument();
  })

  it('possède un lien qui redirige vers la page articles', () => {
    render(<Home />, {wrapper: BrowserRouter});
    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/articles');
  })

  it('possède un paragraphe', () => {
    render(<Home />, {wrapper: BrowserRouter})
    const paragraphElement = screen.getByText('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
    expect(paragraphElement).toBeInTheDocument()
  })
});
