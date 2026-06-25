import { Routes, Route } from "react-router-dom";
import { NotificationsPage } from "./pages/NotificationsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NotificationsPage />} />
    </Routes>
  );
}

export default App;