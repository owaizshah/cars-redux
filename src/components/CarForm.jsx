import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function carForm() {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    dispatch(changeCost(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  return (
    <div>
      <div className="car-form panel">
        <h2 className="subtitle is-3">Add car</h2>
        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <div className="field">
              <label className="label">Name</label>
              <input
                type="text"
                className="input is-expanded"
                value={name}
                onChange={handleNameChange}
              />
            </div>

            <div className="field">
              <label className="label">Cost</label>
              <input
                type="number"
                className="input is-expanded"
                value={cost}
                onChange={handleCostChange}
              />
            </div>
            <div className="field">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default carForm;
