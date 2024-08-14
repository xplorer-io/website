import { ourValuesList } from "./helper";
import { OurValuesCard } from "./valuesCard";

const OurValues = () => {
  return (
    <section className="flex flex-col justify-center gap-16 my-8 md:flex-col lg:mx-48 lg:my-16">
      <h2 className="text-center font-bold text-gray-600">Our Values</h2>
      <section className="grid grid-cols-1 justify-between gap-16 lg:grid-cols-3 lg:gap-12">
        {ourValuesList.map(({ name, description, imageUrl }) => (
          <div key={name} className="flex flex-col justify-center">
            <OurValuesCard
              key={name}
              name={name}
              imageUrl={imageUrl}
              description={description}
            />
          </div>
        ))}
      </section>
    </section>
  );
};
export default OurValues;
