import logo from "./logo.svg";
import "./App.css";
import Navar from "./component/Navar";
import Header from "./component/Header";
import TodoList from "./component/TodoList";
import Fotter from "./component/Fotter";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        {/* <!-- navbar --> */}
        <Navar />

        <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          {/* <!-- header --> */}
          <Header />
          <hr class="mt-4" />
          <TodoList />
          <hr class="mt-4" />
          <Fotter />
          {/* <!-- footer --> */}
        </div>
      </div>
    </Provider>
  );
}

export default App;
