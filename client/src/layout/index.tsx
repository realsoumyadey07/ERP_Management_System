import { Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function Layout() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex h-screen">
      <div className={`${open ? "w-72" : "w-16"} bg-slate-200`}>
        <Navbar open={open}/>
      </div>
      <div className="relative w-full">
        <GiHamburgerMenu
          onClick={() => setOpen(!open)}
          className="absolute top-5 left-4"
        />
        <Header/>
        <Outlet />
      </div>
    </div>
  );
}
