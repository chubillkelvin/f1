import React from "react";

import {
  Box,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DirectionsCar, Menu as MenuIcon } from "@mui/icons-material";
import { useAllRacesData } from "../../hooks/useAllRacesData";
import Link from "../common/Link";
import AppBarItem from "../common/AppBarItem";

const RaceResultsMenu = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const { data } = useAllRacesData();

  // only shows past races data
  const races = data
    ? data.MRData.RaceTable.Races.filter(
        (race) => new Date(race.date) < new Date()
      )
    : null;

  return (
    <Box>
      {races ? (
        <>
          {isSmallScreen ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleOpenMenu}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box onClick={handleOpenMenu}>
              <AppBarItem icon={<DirectionsCar />} title="Race Results" />
            </Box>
          )}
          <Menu
            id="race-results-menu"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            {races.map((race) => (
              <Link
                key={race.date + race.raceName}
                href={`/races/${race.round}`}
                sx={{ textDecoration: "none" }}
              >
                <MenuItem>{`Round ${race.round} - ${race.raceName}`}</MenuItem>
              </Link>
            ))}
          </Menu>
        </>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default RaceResultsMenu;
