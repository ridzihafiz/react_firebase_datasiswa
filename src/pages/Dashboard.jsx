import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BsCardChecklist, GrAdd } from "react-icons/all";

export default function Dashboard() {
  return (
    <main className="w-screen h-screen flex bg-slate-100">
      {/* SIDE MENU */}
      <aside className=" w-[250px] h-full flex flex-col shadow-lg bg-white ">
        <div className=" w-full h-[200px] flex justify-center items-center ">
          <h1>BQ Valley</h1>
        </div>

        <menu className="w-full flex flex-col">
          <Link
            to={"/dashboard"}
            className="w-full h-12 flex items-center px-3 hover:bg-slate-100 gap-4"
          >
            <BsCardChecklist />
            List of Student
          </Link>

          <Link
            to={"/dashboard/add"}
            className="w-full h-12 flex items-center px-3 hover:bg-slate-100 gap-4"
          >
            <GrAdd />
            Add Student
          </Link>
        </menu>
      </aside>
      {/* END SIDE MENU */}

      {/* DASHBOARD CONTENT */}
      <div className="flex-1 h-screen p-6 flex flex-col">
        <section className="w-full max-w-[1200px] mx-auto p-4 bg-white flex flex-col ">
          <Outlet />
        </section>
      </div>
      {/* END DASHBOARD CONTENT */}
    </main>
  );
}
