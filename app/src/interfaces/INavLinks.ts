export default interface INavLinks {
  name: string;
  path: string;
  isActive: boolean;
  subMenu?: INavLinks[]
  showSubmenu?: boolean
}