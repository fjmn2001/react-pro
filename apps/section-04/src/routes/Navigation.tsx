import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import logo from "./../../public/vite.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className={"main-layout"}>
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            {routes.map(({ name, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.Component()}
            />
          ))}
          <Route path={"/*"} element={<Navigate to={"/lazy1"} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
