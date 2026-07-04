import { useEffect, useState } from 'react';
import { formatTargetDate, getTimeRemaining } from './countdown';

function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining);
  const [bangaloreTime, setBangaloreTime] = useState(new Date());
  const [seattleTime, setSeattleTime] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeRemaining());
      setBangaloreTime(new Date());
      setSeattleTime(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const formatTimezone = (date, timezone) => {
    return date.toLocaleString('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="timezone-clocks" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
          <div className="timezone-clock" style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#666' }}>Bangalore</p>
            <p style={{ margin: '0', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'monospace' }}>
              {formatTimezone(bangaloreTime, 'Asia/Kolkata')}
            </p>
          </div>
          <div className="timezone-clock" style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#666' }}>Seattle</p>
            <p style={{ margin: '0', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'monospace' }}>
              {formatTimezone(seattleTime, 'America/Los_Angeles')}
            </p>
          </div>
        </div>
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
