import { Route, Routes } from "react-router";
import HomePage from "./_root/homePage/HomePage";
import RootLayout from "./_root/RootLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
