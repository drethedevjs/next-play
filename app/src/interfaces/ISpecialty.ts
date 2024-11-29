import { HugeiconsProps } from "hugeicons-vue/types";
import { FunctionalComponent } from "vue";

export default interface ISpecialty {
  id: number;
  iconUrl: string;
  name: string;
  description: string;
  hugeIcon: FunctionalComponent<HugeiconsProps, {}, any, {}>;
}