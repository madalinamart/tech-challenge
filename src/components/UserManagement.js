import React, { useMemo } from 'react'
import { Edit2, Slash, TickCircle } from 'iconsax-react'
import {useTable, useGlobalFilter, usePagination} from 'react-table'
import { COLUMNS } from './tableColumns'
import GlobalFilter from './GlobalFilter'
 
const users = [
  { id: "001",
    name: "Alin Ionescu",
    email: 'alin.ionescu@idesk.com', 
    role: 'Administrator',
    gender: 'Male',
    date: '02.10.1999',
    nationality: 'RO',
    icons: <div><Edit2 className='table-icons'/> <Slash className='table-icons'/> <TickCircle className='table-icons'/></div>
  },
  { id: "002",
    name: "Madalina Ionescu",
    email: 'madalina.ionescu@idesk.com', 
    role: 'Office Administrator',
    gender: 'Feale',
    date: '26.03.1997',
    nationality: 'RO',
    icons: <div><Edit2 className='table-icons'/> <Slash className='table-icons'/> <TickCircle className='table-icons'/></div>
  },
  { id: "001",
  name: "Alin Ionescu",
  email: 'alin.ionescu@idesk.com', 
  role: 'Administrator',
  gender: 'Male',
  date: '02.10.1999',
  nationality: 'RO',
  icons: <div><Edit2 className='table-icons'/> <Slash className='table-icons'/> <TickCircle className='table-icons'/></div>
},
{ id: "002",
  name: "Madalina Ionescu",
  email: 'madalina.ionescu@idesk.com', 
  role: 'Office Administrator',
  gender: 'Feale',
  date: '26.03.1997',
  nationality: 'RO',
  icons: <div><Edit2 className='table-icons'/> <Slash className='table-icons'/> <TickCircle className='table-icons'/></div>
},
{ id: "001",
name: "Alin Ionescu",
email: 'alin.ionescu@idesk.com', 
role: 'Administrator',
gender: 'Male',
date: '02.10.1999',
nationality: 'RO',
icons: <div><Edit2 className='table-icons'/> <Slash className='table-icons'/> <TickCircle className='table-icons'/></div>
},
{ id: "002",
name: "Madalina Ionescu",
email: 'madalina.ionescu@idesk.com', 
role: 'Office Administrator',
gender: 'Feale',
date: '26.03.1997',
nationality: 'RO',
icons: <div><Edit2 className='table-icons'/> <Slash className='table-icons'/> <TickCircle className='table-icons'/></div>
},
{ id: "001",
name: "Alin Ionescu",
email: 'alin.ionescu@idesk.com', 
role: 'Administrator',
gender: 'Male',
date: '02.10.1999',
nationality: 'RO',
icons: <div><Edit2 className='table-icons'/> <Slash className='table-icons'/> <TickCircle className='table-icons'/></div>
},
{ id: "002",
name: "Madalina Ionescu",
email: 'madalina.ionescu@idesk.com', 
role: 'Office Administrator',
gender: 'Feale',
date: '26.03.1997',
nationality: 'RO',
icons: <div><Edit2 className='table-icons'/> <Slash className='table-icons'/> <TickCircle className='table-icons'/></div>
},
{ id: "001",
name: "Alin Ionescu",
email: 'alin.ionescu@idesk.com', 
role: 'Administrator',
gender: 'Male',
date: '02.10.1999',
nationality: 'RO',
icons: <div><Edit2 className='table-icons'/> <Slash className='table-icons'/> <TickCircle className='table-icons'/></div>
},
{ id: "002",
name: "Madalina Ionescu",
email: 'madalina.ionescu@idesk.com', 
role: 'Office Administrator',
gender: 'Feale',
date: '26.03.1997',
nationality: 'RO',
icons: <div><Edit2 className='table-icons'/> <Slash className='table-icons'/> <TickCircle className='table-icons'/></div>
},
{ id: "001",
name: "Alin Ionescu",
email: 'alin.ionescu@idesk.com', 
role: 'Administrator',
gender: 'Male',
date: '02.10.1999',
nationality: 'RO',
icons: <div><Edit2 className='table-icons'/> <Slash className='table-icons'/> <TickCircle className='table-icons'/></div>
},
{ id: "002",
name: "Madalina Ionescu",
email: 'madalina.ionescu@idesk.com', 
role: 'Office Administrator',
gender: 'Feale',
date: '26.03.1997',
nationality: 'RO',
icons: <div><Edit2 className='table-icons'/> <Slash className='table-icons'/> <TickCircle className='table-icons'/></div>
},
{ id: "002",
name: "Adina Martiniuc",
email: 'madalina.ionescu@idesk.com', 
role: 'Office Administrator',
gender: 'Feale',
date: '26.03.1997',
nationality: 'RO',
icons: <div><Edit2 className='table-icons'/> <Slash className='table-icons'/> <TickCircle className='table-icons'/></div>
}
] 


const UsersEdit = () => {

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => users, [])

  const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, canNextPage, canPreviousPage, previousPage, pageOptions, gotoPage, pageCount, setPageSize, prepareRow, state, setGlobalFilter} = useTable({
    columns,    
    data,
    initialState: {pageSize: 9},
  }, useGlobalFilter, usePagination)
  
  const { globalFilter, pageIndex} = state

  return (
    <div className='user-management'>      
      <p>Users</p>
      <h1> Users Management</h1>
      <h3>Search user</h3>
      <div className='search-bar'>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <button>+ADD USER</button>
      </div>
      <p>Users: <span>110</span></p>
      <div className='users-table'>
       <table {...getTableProps()}>
        <thead>
          {
            headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
              headerGroup.headers.map( column => (
               <th {...column.getHeaderProps()}>
                 {column.render('Header')}
                </th>
              ))
            }            
          </tr>
            ))
          }          
        </thead>
        <tbody {...getTableBodyProps()}>
{page.map(row => {
  prepareRow(row)
  return (
    <tr {...row.getRowProps()}>
      {
        row.cells.map( (cell) => {
         return <td {...cell.getCellProps()}>
            {cell.render('Cell')}            
          </td>
        })
      }
    </tr>
  )
})}          
        </tbody>
      </table> 
      <div className='pagination'>            
        <button onClick={() => gotoPage(0)} >{'<<'}</button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</button>
        <span>
          Page{' '}
          <span>
            {pageIndex + 1} of {pageOptions.length}
          </span> {' '}
        </span>  
        <button onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</button>
        <button onClick={() => gotoPage(pageCount -1)} disabled={!canNextPage}>{'>>'}</button>
      </div>
      </div>
    </div>
  )
}

export default UsersEdit