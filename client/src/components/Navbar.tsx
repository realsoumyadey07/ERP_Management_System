import { useState } from "react";
import { IoIosRadioButtonOn } from "react-icons/io";
import { MdDashboardCustomize, MdLogout } from "react-icons/md";
import { SiGoogletagmanager } from "react-icons/si";
import { Link } from "react-router-dom";
import Modal from "react-modal";

export default function Navbar({ open }: { open: boolean }) {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogoutConfirm = () => {
    console.log("Logout confirmed");
    setIsLogoutModalOpen(false);
  };

  const LoggoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      transition: "opacity 1s ease-in-out"
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      zIndex: 1000,
      transition: "opacity 1s ease-in-out"
    }
  };
  return (
    <div className="py-3">
      <div className="flex flex-row items-center justify-center gap-3">
        <SiGoogletagmanager className="text-2xl text-blue-600" />
        <h2 className={`text-xl ${open ? "block" : "hidden"}`}>Realestate</h2>
      </div>
      <div className="flex flex-col items-center py-4 gap-2">
        <a
          href="#"
          className="bg-blue-500 w-[90%] hover:bg-blue-600 rounded-md p-2"
        >
          <Link
            to="/dashboard"
            className="flex flex-row items-center justify-center gap-3 text-white"
          >
            <MdDashboardCustomize />
            <p className={`${open ? "block" : "hidden"}`}>Dashboard</p>
          </Link>
        </a>
        <div>
          <a href="#">
            <Link
              to="/add-user"
              className="text-sm flex flex-row items-center gap-8"
            >
              <IoIosRadioButtonOn />
              <p className={`${open ? "block" : "hidden"}`}>Add User</p>{" "}
            </Link>
          </a>
        </div>
        <div
          onClick={LoggoutModal}
          className="bg-red-400 w-[90%] rounded-md p-2 flex flex-row items-center justify-center gap-3 text-white hover:bg-red-500"
        >
          <MdLogout />
          <p className={`${open ? "block" : "hidden"}`}>Dashboard</p>
        </div>
        <Modal
          isOpen={isLogoutModalOpen}
          onRequestClose={() => setIsLogoutModalOpen(false)}
          style={customStyles}
          contentLabel="Logout Confirmation"
        >
          <h2 className="text-base mb-4">
            Are you sure you want to logout?
          </h2>
          <div className="flex justify-end">
            <button
              onClick={() => setIsLogoutModalOpen(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-semibold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              onClick={handleLogoutConfirm}
              className="bg-red-500 hover:bg-red-700 text-white font-semibold text-sm py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
