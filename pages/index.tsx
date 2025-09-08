import React from "react";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import { APP_NAME, SAMPLE_PROPERTIES } from "../constants";

const Home: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{APP_NAME}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SAMPLE_PROPERTIES.map((property, index) => (
          <Card
            key={index}
            title={property.title}
            description={property.description}
            imageUrl={property.imageUrl}
          />
        ))}
      </div>

      <div className="mt-6">
        <Button label="Book Now" onClick={() => alert("Booking...")} />
      </div>
    </div>
  );
};

export default Home;
