import { useEffect, useState } from 'react';
import { formatTargetDate, getTimeRemaining } from './countdown';

function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p className="eyebrow">Countdown</p>
        <h1>{""}</h1>

        {timeLeft.isComplete ? (
          <p className="subtext">Countdown complete</p>
        ) : (
          <div className="countdown-grid" aria-label="countdown">
            <div className="countdown-card">
              <span className="countdown-value">{timeLeft.days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-card">
              <span className="countdown-value">{timeLeft.hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-card">
              <span className="countdown-value">{timeLeft.minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-card">
              <span className="countdown-value">{timeLeft.seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        )}

        <p className="subtext"></p>
      </header>
    </div>
  );
}

export default CountdownPage;
