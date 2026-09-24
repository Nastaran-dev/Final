import type { ComponentType } from "react";
import type { IconProps } from "@/components/ui/Icon";

export interface Technology {
  id: string;
  name: string;
  icon: ComponentType<IconProps>;
}
