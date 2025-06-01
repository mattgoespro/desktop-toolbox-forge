import { Navigate, RouteObject, createHashRouter } from "react-router-dom";
import { ImageToIconConverter } from "../tools/image-to-icon-converter/image-to-icon-converter";
import { Dashboard } from "../dashboard/dashboard";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true,
        path: "*",
        id: "Dashboard",
        element: <Navigate to="/" />
      },
      {
        id: "Image to Icon Converter",
        path: "/image-to-icon-converter",
        element: <ImageToIconConverter />
      },
      {
        id: "5 Minute Meditation Picker",
        path: "/meditation-picker",
        element: <></>
      }
    ]
  }
];

export const Router = createHashRouter(routes);
