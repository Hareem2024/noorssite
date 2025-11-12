const faces = [
  'cube__face--front',
  'cube__face--back',
  'cube__face--right',
  'cube__face--left',
  'cube__face--top',
  'cube__face--bottom',
];

export default function RubiksCube() {
  return (
    <div className="cube" role="img" aria-label="Animated Rubik’s cube illustration">
      {faces.map((face) => (
        <div className={`cube__face ${face}`} key={face}>
          {Array.from({ length: 9 }).map((_, index) => (
            <span className="faceBox" key={index} />
          ))}
        </div>
      ))}
    </div>
  );
}

