"use client";
import React, { useEffect, useState } from "react";
import categoryTransfer from "@/constant/category";
import { Icategory } from "@/types/generalType";
import Link from "next/link";
import { usePathname } from "next/navigation";

function FirstSecH() {
  const [categoryData, setCategoryData] = useState<Icategory[]>([]);
  const [modalName, setModalName] = useState<string>("");
  const params = usePathname();
  const categoryName = params.split("/").pop();

  useEffect(() => {
    return setCategoryData(categoryTransfer);
  }, []);

  const focusModalHandler = (name: string) => {
    setModalName(name);
  };

  return (
    <div className="mx-2 flex justify-between bg-blue">
      {categoryData.map((item) => {
        return (
          <Link
            href={`/${item.nameEN}`}
            key={item.nameEN}
            onClick={() => focusModalHandler(item.nameEN)}
            className={`${modalName === item.nameEN || categoryName === item.nameEN ? "text-white shadow-lg" : "text-white/45"} flex flex-col items-center justify-center gap-2 px-2`}
          >
            <span>
              {modalName === item.nameEN || categoryName === item.nameEN
                ? item.fill
                : item.stroke}
            </span>
            <span
              className={`text-sm font-bold ${modalName === item.nameEN ? "text-base" : null}`}
            >
              {item.nameFA}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default FirstSecH;
