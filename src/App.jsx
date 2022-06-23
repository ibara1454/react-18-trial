import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuspenseExampleStatic from "./SuspenseExample/Static";
import SuspenseExampleStandard from "./SuspenseExample/Standard";
import SuspenseExampleSuspense from "./SuspenseExample/Suspense";
import SideMenu from "./SideMenu";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-900 flex">
        <SideMenu />
        <main className="flex-1 text-gray-200 p-8 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/suspense_example/*"
              element={<SuspenseExamples />}
            ></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

const SuspenseExamples = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <Routes>
        <Route path="" element={<SuspenseExampleStatic />} />
        <Route path="standard" element={<SuspenseExampleStandard />} />
        <Route path="suspense" element={<SuspenseExampleSuspense />} />
      </Routes>
    </div>
  );
};

export default App;
