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
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import data from "../../schema.json";

const rows = data.channels;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#c2e0ff",
    color: theme.palette.text,
    height: "3rem",
  },
}));

function DenseTable() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const PrimaryChannel = ({ channels }) => (
    <Select
      value={age}
      onChange={handleChange}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      size="small"
    >
      <MenuItem value="">
        <em>Select Channel</em>
      </MenuItem>
      {channels.map((channel) => (
        <MenuItem value={10} key={channel}>
          {channel}
        </MenuItem>
      ))}
    </Select>
  );

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
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                height: "4rem",
              }}
            >
              <TableCell component="th" scope="row">
                {row.channel}
              </TableCell>
              <TableCell>
                <PrimaryChannel channels={row.primaryChannel} />
              </TableCell>
              <TableCell>
                <PrimaryChannel channels={row.referenceChannel} />
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
