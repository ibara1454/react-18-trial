import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <aside className="flex-none w-96 bg-slate-100 p-4 overflow-auto">
      <ul className="m-8 flex flex-col gap-8">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
      <p className="text-gray-400 text-lg font-bold uppercase">
        Suspense Data Fetching Example
      </p>
      <ul className="m-8 flex flex-col gap-8">
        <li>
          <NavLink to="/suspense_example">Static</NavLink>
        </li>
        <li>
          <NavLink to="/suspense_example/standard">Standard</NavLink>
        </li>
        <li>
          <NavLink to="/suspense_example/suspense">Suspense</NavLink>
        </li>
      </ul>
      {/* <p className="text-gray-400 text-lg font-bold uppercase">
        Transition Example
      </p>
      <ul className="m-8 flex flex-col gap-8">
        <li>
          <NavLink to="/transition_example">Example</NavLink>
        </li>
      </ul> */}
    </aside>
  );
};

export default SideMenu;
