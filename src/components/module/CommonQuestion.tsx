import { usePathname } from "next/navigation";
import { commonQuestion } from "@/constant/DataForMap";
import Plus from "../icon/Plus";

function CommonQuestion() {
  // const params = usePathname();
  // const categoryName = params.split("/").pop();
  return (
    <>
      {commonQuestion.map((item, index) => (
        <div
          key={index}
          className="mx-2 flex items-start justify-between space-y-2 border-b-[2px] border-solid border-slate-200 px-2 py-4 mt-5 gap-10"
        >
          <p className="text-sm font-semibold">{item.question}</p>
          <span className="text-blue">
            <Plus width={16} height={18} color="currentColor" />
          </span>
        </div>
      ))}
    </>
  );
}

export default CommonQuestion;
