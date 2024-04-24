import "./index.css";
import reactLogo from "./assets/react.svg";
import Notification from "./pages/Notification";
import ColorChange from "./pages/ColorChange";
import Password from "./pages/Password";
import ForMenu from "./components/ForMenu";
import NavBar from "./components/NavBar";
import ContactUs from "./pages/ContactUs";
import TodoList from "./pages/TodoList";
import Registration from "./pages/Registration";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingProvider } from "./context/LoadingProvider";
import { CounterProvider } from "./context/CounterProvider";
import Login from "./pages/Login";
import ListItem from "./pages/ListItem";

function App() {
  const loginStorage = JSON.parse(localStorage.getItem("loggedIn"));
  const privateRoutes = [
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/homePage" element={<HomePage />} />
      <Route path="/todoList" element={<TodoList />} />
      <Route path="/password" element={<Password />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/listItem" element={<ListItem />} />
      <Route path="/colorChange" element={<ColorChange />} />
      <Route path="/contactUs" element={<ContactUs />} />
    </>,
  ];
  const publicRoutes = [
    <>
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
    </>,
  ];
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <LoadingProvider>
        <CounterProvider>
          <Router>
            <NavBar />
            <ForMenu />
            <br />
            <Routes>{loginStorage ? privateRoutes : publicRoutes}</Routes>
          </Router>
        </CounterProvider>
      </LoadingProvider>
    </>
  );
}

export default App;
