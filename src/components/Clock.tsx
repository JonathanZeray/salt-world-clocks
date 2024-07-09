interface ClockProps {
  time: string;
  city: string;
}

export const Clock: React.FC<ClockProps> = ({ time, city }) => {
  return (
    <>
      <div className="clock__container">
        <h2 className="clock__container--time">{time}</h2>
        <h4 className="clock__container--city">{city}</h4>
      </div>
    </>
  );
};
