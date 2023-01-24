import { parseSwiperBuildModulesEnv } from "./utils/helper.js";

const envBuildModules = parseSwiperBuildModulesEnv();

export const modules = envBuildModules || ['navigation', 'pagination', 'scrollbar', 'a11y'];

export default {
  modules,
};
