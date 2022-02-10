import React, { useEffect, useState } from "react";

function SuperheroViewer({ heroNumber }) {
  const [superhero, setSuperhero] = useState(null);

  useEffect(() => {
    const superheroData = async () => {
      const response = await fetch(
        `/api/10228093672555590/${heroNumber}`
      );
      const data = await response.json()
      setSuperhero(data)
    };

    superheroData();
  }, [heroNumber]);

  if (superhero) {
    return (
      <div className="superhero-viewer">
        <p>Your Superhero {heroNumber} is here!</p>
        <p>{superhero.name}</p>
        <img src={superhero.image.url} alt="A superhero"></img>
      </div>
    );
  } else {
    return <div>Waiting for first Superhero</div>;
  }
}

export default SuperheroViewer;
