import { HugeiconsProps } from "hugeicons-vue/types";
import { FunctionalComponent } from "vue";

export default interface IService {
  id: number;
  name: string;
  tagLine: string;
  offerings: string[];
  formats: string[];
  callToActionText: string;
  highlights: string[];
  duration: string[];
  highlightHeading: string;
  pricing: string;
  hugeIcon: FunctionalComponent<HugeiconsProps, {}, any, {}>
}