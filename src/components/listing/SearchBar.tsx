"use client";

import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Divider,
  TextField,
  Chip,
  Autocomplete,
  Slider,
  styled,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch } from "@/src/redux/hooks";
import { filter } from "@/src/redux/listing/listingSlice";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Popularity Descending",
  "Popularity Ascending",
  "Rating Descending",
  "Rating Ascending",
  "Release Date Descending",
  "Release Date Ascending",
  "Revenue Descending",
  "Revenue Ascending",
];

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];

function getStyles(name: string, sortBy: string, theme: Theme) {
  return {
    fontWeight:
      sortBy.indexOf(name) === -1
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightBold,
  };
}

const Separator = styled("div")(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`
);

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

// type SearchPropsTypes = {
//   filterBy: object;
// };

// const SearchBar = ({ filterBy }: SearchPropsTypes) => {
const SearchBar = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const [filterBy, setFilterBy] = React.useState<object>({});
  const [sortBy, setSortBy] = React.useState<string>("");

  console.log("filterBy", filterBy);
  console.log("sortBy", sortBy);

  const handleSortByChange = (event: SelectChangeEvent<typeof sortBy>) => {
    const {
      target: { value },
    } = event;
    setSortBy(value);
  };

  const handleClear = () => {
    setFilterBy({});
  };

  const handleSearch = () => {
    let params = {};
    if (sortBy) {
      if (sortBy === "Popularity Descending") {
        params = {
          ...params,
          sortBy: "popularity.desc",
        };
      } else if (sortBy === "Popularity Ascending") {
        params = {
          ...params,
          sortBy: "popularity.asc",
        };
      } else if (sortBy === "Rating Descending") {
        params = {
          ...params,
          sortBy: "vote_average.desc",
        };
      } else if (sortBy === "Rating Ascending") {
        params = {
          ...params,
          sortBy: "vote_average.asc",
        };
      } else if (sortBy === "Release Date Descending") {
        params = {
          ...params,
          sortBy: "primary_release_date.desc",
        };
      } else if (sortBy === "Release Date Ascending") {
        params = {
          ...params,
          sortBy: "primary_release_date.asc",
        };
      } else if (sortBy === "Revenue Descending") {
        params = {
          ...params,
          sortBy: "revenue.desc",
        };
      } else if (sortBy === "Revenue Ascending") {
        params = {
          ...params,
          sortBy: "revenue.asc",
        };
      }
    }
    dispatch(filter(params));
  };

  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Card>
      <CardContent>
        <Box>
          <Typography className="mb-2">Sort Result By</Typography>
          <FormControl sx={{ width: "-webkit-fill-available" }}>
            <Select
              size="small"
              displayEmpty
              value={sortBy}
              onChange={handleSortByChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Default</em>;
                }
                return selected;
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
              className="font-medium"
            >
              <MenuItem disabled value="">
                <em>Default</em>
              </MenuItem>
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, sortBy, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Divider className="py-2" />

        <Box>
          <Typography className="mt-4 mb-2">Release Date</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Basic date picker"
                slotProps={{ textField: { size: "small" } }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Basic date picker"
                slotProps={{ textField: { size: "small" } }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>

        <Divider className="py-2" />

        <Box>
          <Typography className="mt-4 mb-2">Geners</Typography>
          <Box>
            <Chip
              className="m-1 cursor-pointer font-medium"
              label="primary"
              variant="outlined"
              size="medium"
            />
            <Chip
              className="m-1 cursor-pointer font-medium"
              label="primary"
              variant="outlined"
              size="medium"
            />
            <Chip
              className="m-1 cursor-pointer font-medium"
              label="primary"
              variant="outlined"
              size="medium"
            />
            <Chip
              className="m-1 cursor-pointer font-medium"
              label="primary"
              variant="outlined"
              size="medium"
            />
            <Chip
              className="m-1 cursor-pointer font-medium"
              label="primary"
              variant="outlined"
              size="medium"
            />
            <Chip
              className="m-1 cursor-pointer font-medium"
              label="primary"
              variant="outlined"
              size="medium"
            />
            <Chip
              className="m-1 cursor-pointer font-medium"
              label="primary"
              variant="outlined"
              size="medium"
            />
            <Chip
              className="m-1 cursor-pointer font-medium"
              label="primary"
              variant="outlined"
              size="medium"
            />
            <Chip
              className="m-1 cursor-pointer font-medium"
              label="primary"
              variant="outlined"
              size="medium"
            />
          </Box>
        </Box>

        <Divider className="py-2" />

        <Box>
          <Typography className="mt-4 mb-2">Language</Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: "-webkit-fill-available" }}
            size="small"
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Box>

        <Divider className="py-2" />

        <Box>
          <Typography className="mt-4 mb-2">User Score</Typography>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>

        <Box>
          <Typography className="mt-4 mb-2">Runtime</Typography>
          <Slider
            track="inverted"
            aria-labelledby="track-inverted-range-slider"
            getAriaValueText={valuetext}
            defaultValue={[20, 37]}
            marks={marks}
          />
        </Box>

        <Box>
          <Typography className="mt-4 mb-2">Runtime</Typography>
          <Slider
            track="inverted"
            aria-labelledby="track-inverted-range-slider"
            getAriaValueText={valuetext}
            defaultValue={[20, 37]}
            marks={marks}
          />
        </Box>

        <Divider className="py-2" />

        <Box>
          <Typography className="mt-4 mb-2">Keywords</Typography>
          <TextField className="w-full" id="outlined-basic" label="Outlined" variant="outlined" size="small" />
        </Box>

        <Box className="flex flex-row justify-center items-center mt-4">
          <Button variant="outlined" onClick={handleClear}>
            Clear
          </Button>
          <Button
            variant="contained"
            className="bg-sky-400 hover:bg-blue-950 ml-2"
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SearchBar;

// inputProps={{
//   // "aria-label": "Without label",
//   endAdornment: filterBy && (
//     <span onClick={() => setFilterBy([])}>close</span>
//   ),
// }}

// const [open, setOpen] = React.useState(true);

// const handleClick = () => {
//   setOpen(!open);
// };

{
  /* <List
  sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
  component="nav"
  aria-labelledby="nested-list-subheader"
>
  <ListItemButton>
    <ListItemIcon>
      <SendIcon />
    </ListItemIcon>
    <ListItemText primary="Sent mail" />
  </ListItemButton>
  <ListItemButton>
    <ListItemIcon>
      <DraftsIcon />
    </ListItemIcon>
    <ListItemText primary="Drafts" />
  </ListItemButton>
  <ListItemButton onClick={handleClick}>
    <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
    <ListItemText primary="Inbox" />
    {open ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>
  <Collapse in={open} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary="Starred" />
      </ListItemButton>
    </List>
  </Collapse>
</List> */
}
