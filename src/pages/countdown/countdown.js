const targetDate = new Date('2026-07-12T21:20:00Z');

function getTimeRemaining() {
  const difference = targetDate.getTime() - Date.now();

  if (difference <= 0) {
    return { isComplete: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    isComplete: false,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function formatTargetDate(locale = 'en-US') {
  return targetDate.toLocaleDateString(locale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export { targetDate, formatTargetDate, getTimeRemaining };
