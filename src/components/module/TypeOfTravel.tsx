"use cline";

import { ITypeOfTravel } from "@/types/componentsProps";
import { FC } from "react";

const TypeOfTravel: FC<ITypeOfTravel> = ({ selectedType, setSelectedType }) => {
  return (
    <div>
      <ul className="flex items-center">
        <li className="flex items-center gap-2 px-2 font-bold text-blue">
          <input
            type="radio"
            id="inside"
            value="inside"
            checked={selectedType === "inside"}
            onChange={(e) => setSelectedType(e.target.value)}
            className=""
          />
          <label htmlFor="inside">داخلی</label>
        </li>
        <li className="flex items-center gap-2 px-2 font-bold text-blue">
          <input
            type="radio"
            id="outside"
            value="outside"
            checked={selectedType === "outside"}
            onChange={(e) => setSelectedType(e.target.value)}
            className="accent-red-700"
            style={{ accentColor: "#1E40AF" }}
          />
          <label htmlFor="outside">خارجی</label>
        </li>
      </ul>
    </div>
  );
};

export default TypeOfTravel;
