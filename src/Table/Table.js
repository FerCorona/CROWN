import React from 'react';

const Table = ({
  header,
  body,
  extraStyle
}) => (
  <table className={`CROWNTable ${extraStyle}`}>
    <thead>
      <tr className='Header'>
        {header.map(head => (
          <th>{head}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {body.map(row => (
        <tr className='Body'>
          {row.map(cell => (
            <td>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

Table.defaultProps = {
  header: ['NOMBRE', 'APELLIDO', 'CARRERA', 'PROMEDIO'],
  body: [
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100'],
    ['Fernando', 'Garcia', 'Sistemas', '100']
  ],
  extraStyle: ''
};

export default Table;