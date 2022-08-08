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
import { OverallStandingsData } from "../hooks/useStandingsData";
import Link from "./Link";

interface Props {
  data: OverallStandingsData;
}

const OverallStandingsTable = ({ data }: Props) => {
  return (
    <TableContainer
      component={Paper}
      elevation={2}
      sx={{ overflowY: "hidden" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="f1 overall standings table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Rank</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Points</TableCell>
            <TableCell align="center">Wins</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(
            ({ position, Driver, points, wins }) => (
              <TableRow key={Driver.driverId}>
                <TableCell align="center">{position}</TableCell>
                <TableCell align="center">
                  <Link
                    href={`/drivers/${Driver.driverId}`}
                  >{`${Driver.givenName} ${Driver.familyName}`}</Link>
                </TableCell>
                <TableCell align="center">{points}</TableCell>
                <TableCell align="center">{wins}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OverallStandingsTable;
