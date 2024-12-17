import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../Hero';

describe('Hero Component', () => {
  beforeEach(() => {
    jest.spyOn(document, 'querySelector').mockImplementation((selector) => ({
      getBoundingClientRect: () => ({
        left: 0,
        top: 0,
      }),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      style: {},
    }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders hero section with correct text content', () => {
    render(<Hero />);
    expect(screen.getByText('Zerography')).toBeInTheDocument();
    expect(
      screen.getByText('Bringing your vision to life through stunning visuals')
    ).toBeInTheDocument();
  });

  it('updates cursor position on mouse move', () => {
    render(<Hero />);
    const heroSection = screen.getByRole('region');

    fireEvent.mouseMove(heroSection, {
      clientX: 100,
      clientY: 200,
    });

    const gridBackground = document.querySelector('.grid-background');
    expect(gridBackground.style.maskImage).toContain('100px 200px');
  });

  it('hides cursor on mouse leave', () => {
    render(<Hero />);
    const heroSection = screen.getByRole('region');

    fireEvent.mouseLeave(heroSection);

    const cursor = document.querySelector('.cursor');
    expect(cursor.style.opacity).toBe('0');
  });

  it('shows cursor on mouse enter', () => {
    render(<Hero />);
    const heroSection = screen.getByRole('region');

    fireEvent.mouseEnter(heroSection);

    const cursor = document.querySelector('.cursor');
    expect(cursor.style.opacity).toBe('1');
  });

  it('updates light effect position on mouse move', () => {
    render(<Hero />);
    const heroSection = screen.getByRole('region');

    fireEvent.mouseMove(heroSection, {
      clientX: 150,
      clientY: 250,
    });

    const lightEffect = document.querySelector('.light-effect');
    expect(lightEffect.style.background).toContain('150px 250px');
  });
});
