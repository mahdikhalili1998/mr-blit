"use cline";

import { ITypeOfTravel } from "@/types/componentsProps";
import { FC, useEffect, useRef, useState } from "react";
import DownArrow from "../icon/DownArrow";
import { usePathname } from "next/navigation";

const TypeOfTravel: FC<ITypeOfTravel> = ({
  type,
  way,
  setSelectedType,
  checked,
  setChecked,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLUListElement | null>(null);

  // مربوط به چک باکس قطار
  const handleChange = () => {
    setChecked(!checked);
  };

  const params = usePathname();
  const categoryName = params.split("/").pop();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenModal(false);
      }
    };
    if (openModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal]);

  return (
    <div className="mx-5 flex items-center justify-between py-4">
      {categoryName === "train" ? (
        // چک باکس کوپه دربست
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              id="address-checkbox"
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              className={`peer hidden`}
            />
            <div
              onClick={handleChange}
              className={`flex size-4 items-center justify-center rounded ${checked ? "bg-blue" : "border-2 border-blue bg-transparent"}`}
            >
              {checked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M15 4.5L6.75 12.75L3 9"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          <label
            htmlFor="address-checkbox"
            className="cursor-pointer font-bold text-blue"
          >
            کوپه در بست
          </label>
        </div>
      ) : categoryName === "taxi" ? null : (
        /* رادیو باتن ها */
        <ul className="flex items-center gap-1">
          {/* دکمه داخلی */}
          <li
            onClick={() =>
              setSelectedType((other: any) => ({
                ...other,
                type: "inside",
              }))
            }
            className="flex items-center gap-2 p-2 font-bold text-blue"
          >
            <span
              className={`${type === "inside" ? "bg-blue" : "border-2 border-solid border-blue"} flex size-4 items-center justify-center rounded-full`}
            >
              <span
                className={`${type === "inside" ? "block" : "hidden"} size-2 rounded-full bg-white`}
              ></span>
            </span>
            <span>داخلی</span>
          </li>
          {/* دکمه خارجی */}
          {categoryName === "hotel" ? null : (
            <li
              onClick={() =>
                setSelectedType((other: any) => ({
                  ...other,
                  type: "outside",
                }))
              }
              className="flex items-center gap-2 p-2 font-bold text-blue"
            >
              <span
                className={`${type === "outside" ? "bg-blue" : "border-2 border-solid border-blue"} flex size-4 items-center justify-center rounded-full`}
              >
                {" "}
                <span
                  className={`${type === "outside" ? "block" : "hidden"} size-2 rounded-full bg-white`}
                ></span>
              </span>
              <span>خارجی</span>
            </li>
          )}
        </ul>
      )}
      {/* سلکت باکس */}
      {categoryName === "hotel" ? null : (
        <div onClick={() => setOpenModal((e) => !e)} className="relative p-2">
          <h1 className="flex items-center gap-3 text-base font-bold text-blue">
            <span className="w-max"> {way}</span>
            <span className={`${openModal ? "rotate-180" : ""} transition-all`}>
              <DownArrow width={16} height={16} color="currentColor" />
            </span>
          </h1>
          {openModal ? (
            <ul
              ref={modalRef}
              className={`${categoryName === "taxi" ? "right-0" : "-right-16 top-9"} absolute -right-16 top-9 z-20 flex w-[180px] flex-col justify-center rounded-lg bg-white p-3 text-base shadow-2xl`}
            >
              <li
                onClick={() =>
                  setSelectedType((other: any) => ({
                    ...other,
                    way: "یک طرفه",
                  }))
                }
                className={`${way === "یک طرفه" ? "bg-[#c2e0ff]" : ""} rounded-lg p-3`}
              >
                یک طرفه
              </li>
              <li
                onClick={() =>
                  setSelectedType((other: any) => ({
                    ...other,
                    way: "رفت و برگشت",
                  }))
                }
                className={`${way === "رفت و برگشت" ? "bg-[#c2e0ff]" : ""} rounded-lg p-3`}
              >
                رفت و برگشت
              </li>
            </ul>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default TypeOfTravel;

{
  /* <input
type="radio"
id="outside"
value="outside"
checked={type === "outside"}
onChange={(e) =>
  setSelectedType((other: any) => ({
    ...other,
    type: e.target.value,
  }))
}
className="border-2 border-solid"
/> */
}
