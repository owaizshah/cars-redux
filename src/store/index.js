import { configureStore } from "@reduxjs/toolkit";
import { addCar, removeCar, changeTerm, carsReducer } from "./slices/carSlice";
import { changeName, changeCost, formReducer } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { addCar, removeCar, changeTerm, changeName, changeCost, store };
