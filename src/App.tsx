import Footer from "./comps/footer";
import Header from "./comps/header";
import Moving_Text from "./comps/moving_text";
import WhoAreWe from "./parts_of_comps/who_are_we";
import Login from "./comps/login/login";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./parts_of_comps/dashboard";
import VirtualCard from "./parts_of_comps/virtualCard";
import Dashboard_Gerant from "./parts_of_comps/dashboard_gerant";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col gap-[2rem] bg-[#f7f7f5]">
              <Header />
              <Moving_Text />
              <WhoAreWe />
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/card" element={<VirtualCard />} />
        <Route path="/dashboard_gerant" element={<Dashboard_Gerant />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
