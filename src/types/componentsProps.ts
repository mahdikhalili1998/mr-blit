export interface ITypeOfTravel {
  type?: string;
  way?: string;
  setSelectedType?: any;
  checked?: boolean;
  setChecked?: any;
}

export interface ITravelInfo {
  type?: string;
  way?: string;
  setSelectedType?: any;
  userOrigin: string;
  setUserOrigin: any;
  userDestination?: string;
  setUserDestination?: any;
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
  dateName?: string;
  way?: string;
  setSelectedType?: any;
  setSelectNumber?: any;
  older12?: number;
  middle12_2?: number;
  baby?: number;
  selectNumber?: boolean;
  setpassengerNum?: any;
  sum?: number;
  calculateNum?: any;
}

export interface ISearch {
  name: string;
  location: string;
}

export interface ISearchResult {
  userOrigin?: string;
  userDestination?: string;
}

export interface IInsertOtp {
  userNumber: string;
  otp: string;
  setNextLevel: any;
}

export interface IUserProfile {
  name: string;
  lastName: string;
  phoneNumber: string;
}

export interface ProfilePageProps {
  params: {
    userId: string;
  };
}
