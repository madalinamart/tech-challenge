import { Edit2, Slash, TickCircle } from 'iconsax-react';

export const COLUMNS = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Full name', accessor: 'name' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Role', accessor: 'role' },
  { Header: 'Gender', accessor: 'gender' },
  { Header: 'Birth Date', accessor: 'date' },
  { Header: '', accessor: 'nationality' },
  {
    Header: '',
    id: 'icons',
    Cell: () => <><div><Edit2 className='table-icons'/> <Slash className='table-icons'/> <TickCircle className='table-icons'/></div></>,
  },
];
