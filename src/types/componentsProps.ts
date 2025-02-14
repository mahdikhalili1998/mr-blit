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
  destinationName?: string;
  setUserDestination?: any;
  setSelectDestination?: any;
}

export interface ISearch {
  name: string;
  location: string;
}

export interface IChooseDate {
  go: string;
  back: string;
  setUserDate: any;
}
