import './App.css';
import Phone from "./components/Phone";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Tv from "./components/Tv";
import Comments from "./components/Comments";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="text-center">Shop</h1>

        <div className="products-list">
          <Phone/>
          <Tv/>
        </div>

        <Comments/>
      </div>
    </Provider>
  );
}

export default App;
