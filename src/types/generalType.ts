export interface IIcon {
  width: number;
  height: number;
  color?: string;
}

export interface Icategory {
  nameEN: string;
  nameFA: string;
  stroke: any;
  fill: any;
}

export interface IDate {
  go: string;
  back: string;
}

export interface IPassengerNum {
  older12: number;
  middle12_2: number;
  baby: number;
}

export interface IErrorType {
  isError: boolean;
  number: number;
}

export interface IUserInfoForm {
  gender: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}
