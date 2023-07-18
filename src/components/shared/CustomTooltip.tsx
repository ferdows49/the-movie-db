import { Tooltip } from "@mui/material";
import React, { ReactNode } from "react";

type PropsType = {
  children: any;
  title: any;
};

const CustomTooltip = ({ children, title, ...rest }: PropsType) => {
  return (
    <Tooltip
      arrow
      title={title}
      componentsProps={{
        tooltip: {
          sx: {
            fontSize: "16px",
            fontWeight: 300,
            bgcolor: "#032541",
            "& .MuiTooltip-arrow": {
              color: "#032541",
            },
          },
        },
      }}
      {...rest}
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
