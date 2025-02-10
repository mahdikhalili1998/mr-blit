import AirplaneHeaderFill from "@/components/icon/AirplaneHeaderFill";
import AirplaneHeaderStrock from "@/components/icon/AirplaneHeaderStrock";
import HotelStroke from "@/components/icon/HotelStroke";
import HotelFill from "@/components/icon/HotelFill";
import TrainStroke from "@/components/icon/TrainStroke";

import BusStroke from "@/components/icon/BusStroke";
import BusFill from "@/components/icon/BusFill";
import TaxiStroke from "@/components/icon/TaxiStroke";
import TAxiFill from "@/components/icon/TAxiFill";
import TrainFill from "@/components/icon/TrainFill";

const categoryTransfer = [
  {
    nameEN: "airPlane",
    nameFA: "هواپیما",
    stroke: (
      <AirplaneHeaderStrock width={20} height={16} color="currentColor" />
    ),
    fill: <AirplaneHeaderFill width={20} height={16} color="currentColor" />,
  },
  {
    nameEN: "hotel",
    nameFA: "هتل",
    stroke: <HotelStroke width={16} height={16} color="currentColor" />,
    fill: <HotelFill width={16} height={16} color="currentColor" />,
  },
  {
    nameEN: "train",
    nameFA: "قطار",
    stroke: <TrainStroke width={16} height={16} color="currentColor" />,
    fill: <TrainFill width={16} height={16} color="currentColor" />,
  },
  {
    nameEN: "bus",
    nameFA: "اتوبوس",
    stroke: <BusStroke width={16} height={16} color="currentColor" />,
    fill: <BusFill width={16} height={16} color="currentColor" />,
  },
  {
    nameEN: "taxi",
    nameFA: "سواری",
    stroke: <TaxiStroke width={16} height={16} color="currentColor" />,
    fill: <TAxiFill width={16} height={16} color="currentColor" />,
  },
];

export default categoryTransfer;
