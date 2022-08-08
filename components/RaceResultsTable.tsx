import React from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { RaceResult } from "../types/race";
import { getBackgroundColor } from "../utils/getBackgroundColor";
import { getFullName } from "../utils/getFullName";
import Link from "./Link";

interface Props {
  data: RaceResult[];
}

const RaceResultsTable = ({ data }: Props) => {
  return (
    <TableContainer
      component={Paper}
      elevation={2}
      sx={{ overflowY: "hidden" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="f1 overall standings table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Position</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Points</TableCell>
            <TableCell align="center">Fastest Lap Time</TableCell>
            <TableCell align="center">Average Speed</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(
            ({ position, Driver: driver, points, status, FastestLap: lap }) => (
              <TableRow
                key={position}
                sx={{
                  backgroundColor: getBackgroundColor(position),
                }}
              >
                <TableCell align="center">{position}</TableCell>
                <TableCell align="center">
                  <Link
                    href={`/drivers/${driver.driverId}`}
                    sx={{ textDecoration: "none" }}
                  >
                    {getFullName(driver)}
                  </Link>
                </TableCell>
                <TableCell align="center">{points}</TableCell>
                <TableCell align="center">{lap.Time.time}</TableCell>
                <TableCell align="center">{`${lap.AverageSpeed.speed} ${lap.AverageSpeed.units}`}</TableCell>
                <TableCell align="center">{status}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RaceResultsTable;
