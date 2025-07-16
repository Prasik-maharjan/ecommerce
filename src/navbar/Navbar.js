import { Link } from "react-router-dom";
import { useState } from "react";
import { New } from "../component/common/New";

export const Navbar = () => {
  const [showNew, setShowNew] = useState(false);
  return (
    <div className="flex p-3 md:p-5 ">
      <div className="flex w-[49rem] justify-between sm:hidden">
        <div onClick={() => setShowNew(true)}>
          <img
            className="w-10"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8CAgL4+Pjp6enk5OSjo6Ovr6/e3t5ycnI5OTnAwMBAQEBhYWH8/PzY2NhISEjw8PAQEBCSkpKJiYnOzs4pKSmampqpqakhISF6eno0NDQbGxtWVlZPT08uLi61tbVpaWmXrZOIAAAB+klEQVR4nO3bUXeiMBCG4RBU2EgCFgRb3eL//5UL0p6zV60XM5k93fe58HJyPhMiGdA5AAAAAAAAAAAAAAAAAAAAAP+bqFBu/YjChZ8dW7ai/4iSPU3UiPMxMwp1nxi324nqHmWjSZrU345y2mN765MziRLd8LsQ1w4m0+KqRj5LUTSVyWY2nzXCnGeLmeleThphTi/dDwuTfXL84V0jzLvJMnPVXSPMvTLZznxQ2M6awTuDZRZjTGPdyLk3TT0OJovskceXlaiyM8qyDRsfREvakD7OWN0wf45vN7Q0g3soAEBexju9+PCmNwG+FOUNf4nLqa9F9YfSKIpL94v02excp7Vy/tnZvUpHWb3usgdZxPCmEeYtWIRRbDXlX2VKYYrepG82iV/+q/PB506ySiqN81uyedY0H+WztLPSE7lv04S6/SWqrYNRloVPQVQyuV5+ItEFYdrsodP0Bcsvh3kBgH/R9qqbnL/r5k6y3uB6UVtVk1e0XFeFaS9nnELqPmvnVo7iB+fLWDrBx9fPU+lo2DRnlnOmwqm5KI7B5NWZ8aoR5jqavG/Wa2QpTr1F79zvVfpml723uGiGViNMOziLrdmPCrvZ1WZill/qSXwLOE3bvxtMdrRhPkgatueAniM5AAAAAAAAAAAAAAAAAAAAAAAAAAAAsPgDVgMzgt5Y7KQAAAAASUVORK5CYII="
            alt="noth"
          />

          {showNew && <New />}
        </div>
        <p className="font-bold text-3xl ">ecomus</p>
      </div>

      <div className="w-full fixed top-0 z-10 bg-white shadow p-5">
        <div className="sm:flex hidden items-center w-full justify-center gap-5">
          <p className="font-bold text-3xl ">ecomus</p>
          <div className="sm:flex gap-7 font-semibold hidden">
            <Link to="/home" className={"/home"}>
              Home
            </Link>
            <Link to="/about" className={"/about"}>
              About
            </Link>
            <Link to="/shop" className={"/shop"}>
              Shop
            </Link>
            <Link to="/blog" className={"/blog"}>
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
