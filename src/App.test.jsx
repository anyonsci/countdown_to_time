import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

test('renders the countdown title', async () => {
  const { default: App } = await import('./App');
  render(<App />);
  expect(screen.getByText(/countdown/i)).toBeDefined();
});

test('shows countdown complete once the target date has passed', async () => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2026-07-05T00:00:00Z'));

  const { default: App } = await import('./App');

  render(<App />);

  expect(screen.getByText(/countdown complete/i)).toBeDefined();

  vi.useRealTimers();
});
