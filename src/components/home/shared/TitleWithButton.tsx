import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

type PropsType = {
  title: string;
  titleColor: string;
  buttonType: string;
  setButtonType: React.Dispatch<React.SetStateAction<string>>;
  leftButtonName: string;
  rightButtonName: string;
  buttonColorActive: string;
  buttonColorInActive: string;
  buttonBgColorActive: string;
  buttonBgColorInActive: string;
  buttonBorderColor: string;
};

const TitleWithButton = ({
  title,
  titleColor,
  buttonType,
  leftButtonName,
  rightButtonName,
  setButtonType,
  buttonColorActive,
  buttonColorInActive,
  buttonBgColorActive,
  buttonBgColorInActive,
  buttonBorderColor,
}: PropsType) => {
  return (
    <Box sx={{ display: "flex", paddingY: "30px" }}>
      <Typography
        sx={{
          color: titleColor,
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
          border: `1px solid ${buttonBorderColor}`,
          borderRadius: "20px",
        }}
      >
        <Button
          sx={{
            borderRadius: "20px",
            paddingX: "12px",
            fontWeight: 500,
            color:
              buttonType === leftButtonName
                ? buttonColorActive
                : buttonColorInActive,
            backgroundColor:
              buttonType === leftButtonName
                ? `${buttonBgColorActive} !important`
                : `${buttonBgColorInActive} !important`,

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
            fontWeight: 500,
            color:
              buttonType === rightButtonName
                ? buttonColorActive
                : buttonColorInActive,
            backgroundColor:
              buttonType === rightButtonName
                ? `${buttonBgColorActive} !important`
                : `${buttonBgColorInActive} !important`,
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
