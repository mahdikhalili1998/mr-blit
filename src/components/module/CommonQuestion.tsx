"use client";
import { motion, AnimatePresence } from "framer-motion";

import { usePathname } from "next/navigation";
import {
  commonQuestionAirPlane,
  commonQuestiontrain,
  commonQuestionBus,
  commonQuestionTaxi,
} from "@/constant/DataForMap";
import Plus from "../icon/Plus";
import { useEffect, useState } from "react";

function CommonQuestion() {
  const [data, setData] = useState<{ question: string }[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalValue, setModalValue] = useState<number>(0);
  const params = usePathname();
  const categoryName = params.split("/").pop();

  useEffect(() => {
    if (categoryName === "airPlane") {
      setData(commonQuestionAirPlane);
    } else if (categoryName === "train") {
      setData(commonQuestiontrain);
    } else if (categoryName === "bus") {
      setData(commonQuestionBus);
    } else if (categoryName === "taxi") {
      setData(commonQuestionTaxi);
    }
  }, []);

  const openAnswerHandler = (index: number) => {
    setOpenModal((e) => !e);
    setModalValue(index);
  };

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          {/* سوال */}
          <div className="mx-2 mt-5 flex items-start justify-between gap-10 space-y-2 border-b-[2px] border-solid border-slate-200 px-2 py-4">
            <p className="text-sm font-semibold">{item.question}</p>
            <span
              onClick={() => openAnswerHandler(index)}
              className={`${openModal && modalValue === index ? "rotate-45" : null} text-blue transition-all duration-150`}
            >
              <Plus width={16} height={18} color="currentColor" />
            </span>
          </div>
          {/* جواب */}
          <AnimatePresence>
            {openModal && modalValue === index ? (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <span className="w-full px-3 text-sm font-semibold text-slate-400">
                  این باکس مخصوص جواب سوال ها میباشد
                </span>
              </motion.ul>
            ) : null}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
}

export default CommonQuestion;
