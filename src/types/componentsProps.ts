export interface ITypeOfTravel {
  type: string;
  way: string;
  setSelectedType: any;
}

export interface ITravelInfo {
  type: string;
  way: string;
}

export interface IOriginPage {
  originName?: string;
  setUserOrigin?: any;
  setSelectOrigin?: any;
  type?: string;
  setStep?: any;
  step?: number;
  back?: string;
  go?: string;
  setUserDate?: any;
  setSelectDate?: any;
  destinationName?: string;
  setUserDestination?: any;
  setSelectDestination?: any;
  selectDestination?: boolean;
  selectOrigin?: boolean;
  selectDate?: boolean;
  dateName: string;
  way: string;
}

export interface ISearch {
  name: string;
  location: string;
}
