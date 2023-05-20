import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import PrimaryChannel from "../ui/PrimaryChannel";
import ReferenceChannel from "../ui/ReferenceChannel";
import data from "../../schema.json";
import { useGlobalContext } from "../../Contex";

// const rows = getDataFromLocalStorage() || data.channels;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#c2e0ff",
    color: theme.palette.text,
    height: "3rem",
  },
}));

function DenseTable() {
  const { rows } = useGlobalContext();
  const [channelData, setChannelData] = useState(rows);
  console.log("channelData", channelData);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Channel</StyledTableCell>
            <StyledTableCell>
              Primary Channel&nbsp;(Default Select)
            </StyledTableCell>
            <StyledTableCell>
              Reference Channel&nbsp;(Default N/A)
            </StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                height: "4rem",
              }}
            >
              <TableCell component="th" scope="row">
                {row.channel}
              </TableCell>
              <TableCell>
                <PrimaryChannel
                  channels={row}
                  channelData={channelData}
                  setChannelData={setChannelData}
                  id={row.id}
                  data={data}
                />
              </TableCell>
              <TableCell>
                <ReferenceChannel
                  channels={row}
                  channelData={channelData}
                  setChannelData={setChannelData}
                  id={row.id}
                  data={data}
                />
              </TableCell>
              <TableCell>N/A</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default DenseTable;
