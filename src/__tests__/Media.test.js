import { render, screen } from '@testing-library/react';
import Media from '../Media';

describe('<Media>', () => {
  beforeEach(() => {
    render(<Media />);
  });

  it('renders media with image', () => {
    const imageElement = screen.getByAltText('Nome do álbum');
    expect(imageElement).toBeInTheDocument();
  });

  it('renders media with a title', () => {
    const titleElement = screen.getByText('Nome do álbum');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders media with artist name', () => {
    const nameElement = screen.getByText('Nome do artista');
    expect(nameElement).toBeInTheDocument();
  });
});
