import { useSelector, useDispatch } from "react-redux";
import { changeTerm } from "../store";

function carSearch() {
  const dispatch = useDispatch();

  const { searchTerm } = useSelector((state) => state.cars.searchTerm);

  const handleChangeSearchTerm = (e) => {
    dispatch(changeTerm(e.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My cars</h3>
      <div className="search field is-horizontal">
        <label className="labal">search</label>
        <input
          type="text"
          className="input"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </div>
    </div>
  );
}

export default carSearch;
