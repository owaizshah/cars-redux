import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function carList() {
  const dispatch = useDispatch();

  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredData = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return {
      name: form.name,
      cars: filteredData,
    };
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const rendered = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    console.log(bold);

    return (
      <div className={`panel ${bold && "bold"}`} key={car.id}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          {" "}
          remove
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {rendered}
      <br />
    </div>
  );
}

export default carList;
