import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchCatsRequest } from "./store/actions/actions";
import Cat from "./components/cat/Cat";
import { IRootState } from "./store/reducer/catReducer";
import { ICats } from "./store/types";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state: IRootState) => state.data);

  useEffect(() => {
    dispatch(fetchCatsRequest());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="cat-wrapper">
        {state?.map((cat: ICats) => (
          <Cat key={cat.id} id={cat.id} img={cat.url} />
        ))}
      </div>
    </div>
  );
}

export default App;
