
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout></MainLayout>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
