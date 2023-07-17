import React, { useState } from "react";
import { Tab, Tabs, Menu, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@mui/icons-material";

const PersonDetailTab = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (event: React.MouseEvent<{}>, index: number) => {
    setAnchorEl(event.currentTarget as HTMLElement);
    setSelectedTab(index);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (index: number) => {
    setSelectedTab(index);
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Tabs
        value={selectedTab}
        onChange={() => {}}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="Tab menu"
      >
        <Tab
          label={
            <div onClick={(event) => handleTabClick(event, 0)}>
              Tab 1 <KeyboardArrowDownIcon />
            </div>
          }
        />
        <Tab
          label={
            <div onClick={(event) => handleTabClick(event, 1)}>
              Tab 2 <KeyboardArrowDownIcon />
            </div>
          }
        />
      </Tabs>

      <Menu
        id={`dropdown-menu-${selectedTab}`}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleDropdownClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => handleMenuItemClick(0)}>Action 1</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick(1)}>Action 2</MenuItem>
      </Menu>
    </Box>
  );
};

export default PersonDetailTab;

// import React, { SyntheticEvent, useState } from "react";
// import { Box, Button, Menu, MenuItem } from "@mui/material";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// const PersonDetailTab = () => {
//   const [value, setValue] = useState("1");
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);

//   const handleChange = (event: SyntheticEvent, newValue: string) => {
//     setValue(newValue);
//   };

//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Box sx={{ width: "100%", typography: "body1" }}>
//       <TabContext value={value}>
//         <Box sx={{ display: "flex", justifyContent: "center" }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab
//               label={
//                 <Button
//                   sx={{ padding: 0 }}
//                   id="basic-button"
//                   aria-controls={open ? "basic-menu" : undefined}
//                   aria-haspopup="true"
//                   aria-expanded={open ? "true" : undefined}
//                   onClick={handleClick}
//                   endIcon={<ArrowDropDownIcon />}
//                 >
//                   Dashboard
//                 </Button>
//               }
//               value="1"
//             />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">Item One</TabPanel>
//         <TabPanel value="2">Item Two</TabPanel>
//         <TabPanel value="3">Item Three</TabPanel>
//       </TabContext>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           "aria-labelledby": "basic-button",
//         }}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </Box>
//   );
// };

// export default PersonDetailTab;
