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

import { DriverData } from "../types/driver";
import Link from "./Link";
import { getBackgroundColor } from "../utils/getBackgroundColor";

interface Props {
  data: DriverData;
}

const DriverResultsTable = ({ data }: Props) => {
  return (
    <TableContainer
      component={Paper}
      elevation={2}
      sx={{ overflowY: "hidden" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="f1 overall standings table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Round #</TableCell>
            <TableCell align="center">Circuit Name</TableCell>
            <TableCell align="center">Race Name</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Round Result</TableCell>
            <TableCell align="center">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.MRData.RaceTable.Races.map(
            ({ Circuit: circuit, Results: results, date, round, raceName }) => (
              <TableRow
                key={date + raceName}
                sx={{
                  backgroundColor: getBackgroundColor(results[0].position),
                }}
              >
                <TableCell align="center">{round}</TableCell>
                <TableCell align="center">
                  {circuit.circuitName}
                  {circuit.url && (
                    <Link
                      sx={{ textDecoration: "none", fontSize: 10 }}
                      href={circuit.url}
                      target="_blank"
                    >
                      {` [wiki]`}
                    </Link>
                  )}
                </TableCell>
                <TableCell align="center">
                  <Link
                    sx={{ textDecoration: "none" }}
                    href={`/races/${round}`}
                  >
                    {raceName}
                  </Link>
                </TableCell>
                <TableCell align="center">{circuit.Location.country}</TableCell>
                <TableCell align="center">{date}</TableCell>
                <TableCell align="center">{results[0].position}</TableCell>
                <TableCell align="center">{results[0].points}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DriverResultsTable;
