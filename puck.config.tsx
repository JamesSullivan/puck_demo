import type {
    ComponentConfig,
    Config,
    Data,
    DefaultComponentProps,
    DefaultRootProps,
    Fields,
  } from "./measured/puck";

import { initialData } from "./app/configs/custom";
import { conf } from "./app/configs/custom";

export const initalData: Record<string, Data> = initialData;

export const config: Config<{ [key: string]: any; }, DefaultRootProps> =  conf;


export default config;