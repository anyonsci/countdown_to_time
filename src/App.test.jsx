import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the countdown title', () => {
  render(<App />);
  expect(screen.getByText(/countdown/i)).toBeDefined();
});

test('shows countdown complete once the target date has passed', () => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2026-07-05T00:00:00Z'));

  render(<App />);

  expect(screen.getByText(/countdown complete/i)).toBeDefined();

  vi.useRealTimers();
});
