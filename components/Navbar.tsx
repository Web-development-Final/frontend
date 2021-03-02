import { useState } from "react";

const Navbar: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen flex-wrap">
      {modal && (
        <div
          className="h-screen w-full fixed z-10 bg-gray-400"
          onClick={() => {
            setIsClicked(!isClicked);
            setModal(!modal);
          }}
        />
      )}
      <nav className="navbar fixed top-0 left-0 z-20 sm:flex sm:justify-between sm:items-center">
        <div className="flex justify-between items-center h-full">
          <div>logo</div>
          <div className="">
            <div
              className="cursor-pointer sm:hidden"
              onClick={() => {
                setIsClicked(!isClicked);
                setModal(!modal);
              }}
            >
              <div
                className={
                  isClicked
                    ? "menu-icon-bar w-8 mb-3 transform translate-y-4 rotate-45"
                    : "menu-icon-bar mb-3"
                }
              ></div>
              <div
                className={
                  isClicked
                    ? "menu-icon-bar w-8 transform -rotate-45"
                    : "menu-icon-bar"
                }
              ></div>
              <div
                className={
                  isClicked
                    ? "menu-icon-bar w-8 mt-3 transition-all duration-500 ease-in-out transform -translate-y-4 -rotate-45"
                    : "menu-icon-bar mt-3"
                }
              ></div>
            </div>
          </div>
        </div>
        <div>
          <ul
            className={
              (isClicked ? "block " : "hidden ") +
              "sm:flex sm:justify-center sm:items-center"
            }
          >
            <li className="cursor-pointer">link-1</li>
            <li>link-2</li>
            <li>link-3</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;