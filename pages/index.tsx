import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "@/components/common/PropertyCard";
import Pill from "@/components/common/Pill";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Luxury",
  "Beachfront",
];

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-96 flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <h1 className="text-4xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="my-6 flex justify-center flex-wrap gap-3">
        {filters.map((filter, idx) => (
          <Pill key={idx} label={filter} />
        ))}
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {PROPERTYLISTINGSAMPLE.map((property, idx) => (
          <PropertyCard key={idx} {...property} />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
