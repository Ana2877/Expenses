import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { AvailablePlansTableRowProps } from "../types";
import { DeletePlan } from "./DeletePlan";

export function AvailablePlansTableRow({ plan }: AvailablePlansTableRowProps) {
  return (
    <TableRow key={plan.name}>
      <TableCell align='center'>{plan.name}</TableCell>
      <TableCell align='center'>{plan.description}</TableCell>
      <TableCell align='center'>{plan.price}</TableCell>
      <TableCell align='center'>
        <DeletePlan plan={plan} />
      </TableCell>
    </TableRow>
  );
}
