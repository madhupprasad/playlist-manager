import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainRouter from './routes';

export const AuthContext = React.createContext({})

const IndexPage = () => {

    const [auth, setauth] = useState(false);

    return (
      <AuthContext.Provider value={{ auth, setauth }}>
        <MainRouter />
      </AuthContext.Provider>
    )
}

ReactDOM.render(
  <IndexPage />,
  document.getElementById("root")
);

