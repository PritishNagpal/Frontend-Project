import React,{ useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useMediaQuery } from 'react-responsive';


function createData(name, eid,email , department, doj) {
  return {name, eid,email , department, doj};
}

const iconStyle = {
  color: 'red'
}


const TableData = ({currentData,setCurrentData}) => {
  const isLargeMobile = useMediaQuery({ query: '(min-width: 425px)' });
  const isMediumMobile = useMediaQuery({ query: '(min-width: 375px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  let table = {
    width: '80%',
    position: 'absolute',
    top: '80%',
    background: 'white',
    left: '10%',
    borderRadius: '10px'
  }

  if(isMediumMobile){
    table = {
      ...table,
      left: '0',
    }
  }

  if(isLargeMobile){
    table = {
      ...table,
      width: '20%',
      left: '1%',
      top: '100%'
    }
  }
  if(isTablet){
    table = {
      ...table,
      top: '90%',
      width: '90%',
      left: '5%',
    }
  }


  const rows = [];
    currentData.map(data => {
        const val =  createData(data.name,data.eid,data.email,data.department,data.doj)
        rows.push(val)
    })

    const deleteHandler = () => {
      currentData.filter(el => el.eid != el.id )
      console.log("YOO")
    }

  return (
    <TableContainer component={Paper}>
      <Table style={table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Employee Id</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Date Of Joining</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.eid}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.doj}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableData;