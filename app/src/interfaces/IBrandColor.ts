export default interface IBrandColor {
  primary: IColor[];
  others: IColor[];
}

export interface IColor {
  hexValue: string;
  name: string;
  bgClassName: string;
  textColor: string;
  copied: boolean;
}
