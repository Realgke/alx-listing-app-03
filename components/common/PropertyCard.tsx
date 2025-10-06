import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<PropertyProps> = ({
  name,
  price,
  rating,
  image,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-gray-500">${price}/night</p>
        <p className="text-yellow-500">⭐ {rating}</p>
        <h1>Sir Wanjohi</h1>
      </div>
    </div>
  );
};

export default PropertyCard;
