import React, { useMemo, useState, useEffect } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import { COLUMNS } from './tableColumns';
import GlobalFilter from './GlobalFilter';
import { Link } from 'react-router-dom';
import {getEmployees} from '../api/employees'



const UsersEdit = () => {
  const [employees, setEmployees] = useState([]);
 
 
 useEffect(() => {
   getAllEmployees();
 }, []);

 const getAllEmployees = async () => {
   let response = await getEmployees();
   setEmployees(response.data)
 }

  const columns = useMemo(() => COLUMNS, []);
  const data =  employees;
 

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    canNextPage,
    canPreviousPage,
    previousPage,
    pageOptions,
    gotoPage,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 9 },
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  return (
   
    <div className='user-management'>
      <p>Users</p>
      <h1> Users Management</h1>
      <h3>Search user</h3>
      <div className='search-bar'>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
         <Link to='add-user'>
         <button>+ADD USER</button>    
         </Link>     
      </div>
      <p>
        Users: <span>110</span>
      </p>
      <div className='users-table'>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>
                        {cell.render('Cell')}                                                 
                      </td>                         
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className='pagination'>
          <button onClick={() => gotoPage(0)}>{'<<'}</button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>
          <span>
            Page{' '}
            <span>
              {pageIndex + 1} of {pageOptions.length}
            </span>{' '}
          </span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </button>
        </div>
      </div>

    </div>
  
  );
};

export default UsersEdit;
