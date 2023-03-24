import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function Tbl2() {
  const [productsRows, setProductsRows] = useState([]);
  const getProductsData = async () => {
    try {
      const response = await axios.get("http://localhost:5170/createTbl1");
      setProductsRows(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductsData();
  });
  return (
    <div>
      <TableContainer component={Paper}>
        {/* <TableContainer> */}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Num</TableCell>
              <TableCell align="left">KindOfPackage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsRows.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  {row.Num}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  {row.KindOfPackage}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
