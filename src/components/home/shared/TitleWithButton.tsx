import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

type PropsType = {
  title: string;
  buttonType: string;
  setButtonType: React.Dispatch<React.SetStateAction<string>>;
  leftButtonName: string;
  rightButtonName: string;
};

const TitleWithButton = ({
  title,
  buttonType,
  leftButtonName,
  rightButtonName,
  setButtonType,
}: PropsType) => {
  return (
    <Box sx={{display: "flex", paddingY: "30px"}}>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 600,
          marginRight: "20px",
          textTransform: "capitalize",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          border: "1px solid #03243f",
          borderRadius: "20px",
        }}
      >
        <Button
          sx={{
            borderRadius: "20px",
            paddingX: "12px",
            color: buttonType === leftButtonName ? "#FFFFFF" : "#000000",
            backgroundColor:
              buttonType === leftButtonName
                ? "#03243f !important"
                : "#FFFFFF !important",

            textTransform: "capitalize",
          }}
          onClick={() => setButtonType(leftButtonName)}
        >
          {leftButtonName}
        </Button>
        <Button
          sx={{
            borderRadius: "20px",
            paddingX: "12px",
            color: buttonType === rightButtonName ? "#FFFFFF" : "#000000",
            backgroundColor:
              buttonType === rightButtonName
                ? "#03243f !important"
                : "#FFFFFF !important",
            textTransform: "capitalize",
          }}
          onClick={() => setButtonType(rightButtonName)}
        >
          {rightButtonName}
        </Button>
      </Box>
    </Box>
  );
};

export default TitleWithButton;
