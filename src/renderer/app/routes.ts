import { RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/dashboard/dashboard.tsx"),
  index("routes/tools/image-to-icon-converter/image-to-icon-converter.tsx")
] satisfies RouteConfig;
