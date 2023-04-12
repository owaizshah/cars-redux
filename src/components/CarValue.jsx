import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    //used filter method to get the car that includes same input value
    // then used reduce method to sum up all value of cars

    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    //sum up all value of cars
    return filteredCars.reduce((acc, car) => (acc = acc + Number(car.cost)), 0);
  });

  return <div className="car-value">Total Cost ${totalCost}</div>;
}

export default CarValue;
