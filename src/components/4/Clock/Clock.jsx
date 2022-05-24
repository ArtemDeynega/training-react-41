import { useEffect, useState, useRef } from 'react';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('это интревал: ' + Date.now());
      setTime(new Date());
    }, 1000);
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };
  console.log(intervalId);
  return (
    <div>
      <p>текущее время: {time.toLocaleTimeString()}</p>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
