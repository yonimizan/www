import React from "react";
import Typography from "@mui/material/Typography";
import NavBarLink from "../../../../routes/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

const Logo = () => {
  return (
    <NavBarLink to={ROUTES.ROOT}>
      <Typography
        variant="h4"
        sx={{
          display: { xs: "none", md: "inline-flex" },
          marginRight: 2,
          fontFamily: "fantasy",
        }}
      >
        iCard
      </Typography>
    </NavBarLink>
  );
};

export default Logo;
