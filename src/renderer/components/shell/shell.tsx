import { Outlet } from "react-router-dom";
import { configureRouterLinks } from "../router/router";
import { useAppSelector } from "../../store/hooks";
import { FlexBox } from "../../shared/components/flex-box";
import Typography from "@mui/material/Typography";

export function Shell() {
  const title = useAppSelector((state) => state.heading.title);

  return (
    <>
      {...configureRouterLinks()}
      <FlexBox direction="column" flexDirection="column" justifyContent="start" alignItems="center">
        <Typography>{title}</Typography>
        <Outlet />
      </FlexBox>
    </>
  );
}
