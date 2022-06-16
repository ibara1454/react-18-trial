import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuspenseExampleStatic from "./SuspenseExample/Static";
import SuspenseExampleStandard from "./SuspenseExample/Standard";
import SuspenseExampleSuspense from "./SuspenseExample/Suspense";
import SideMenu from "./SideMenu";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-900 flex">
        <SideMenu />
        <main className="flex-auto flex justify-center items-center">
          <Routes>
            <Route path="/" element={<SuspenseExampleStatic />} />
            <Route
              path="/suspense_example/"
              element={<SuspenseExampleStatic />}
            />
            <Route
              path="/suspense_example/standard"
              element={<SuspenseExampleStandard />}
            />
            <Route
              path="/suspense_example/suspense"
              element={<SuspenseExampleSuspense />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
