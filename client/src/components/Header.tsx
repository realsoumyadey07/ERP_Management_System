import { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import Modal from "react-modal";


export default function Header() {
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
    <div className="p-3 h-14 border-b-2 w-full shadow-lg shadow-gray-300/50 flex items-center justify-end">
      <FaUserLarge onClick={LoggoutModal} />
      <Modal
          isOpen={isLogoutModalOpen}
          onRequestClose={() => setIsLogoutModalOpen(false)}
          style={customStyles}
          contentLabel="Logout Confirmation"
        >
          <h2 className="text-base mb-4">
            Profile
          </h2>
          <div className="flex justify-end">
            <button
              onClick={() => setIsLogoutModalOpen(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-semibold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            {/* <button
              onClick={handleLogoutConfirm}
              className="bg-red-500 hover:bg-red-700 text-white font-semibold text-sm py-2 px-4 rounded"
            >
              Logout
            </button> */}
          </div>
        </Modal>
    </div>
  );
}
