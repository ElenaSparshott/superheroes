import React, { useEffect, useState } from "react";

function SuperheroViewer({ heroNumber }) {
  const [superhero, setSuperhero] = useState(null);

  useEffect(() => {
    const superheroData = async () => {
      const response = fetch(
        `/api/10228093672555590/${heroNumber}`
      );
      response
      .then((r) => setSuperhero(r.json()))
      .catch((reason) => console.log(reason));
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
