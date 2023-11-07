import React from 'react';

export default function Kortek() {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', backgorundColor: 'white' }}>
      <thead>
        <tr>
          <th
            style={{
              border: '1px',
              borderColor: 'gray',
              padding: '16px 24px',
              backgroundColor: 'white',
              borderTopLeftRadius: '12px'
            }}
          >
            <input type="checkbox" className="cursor-pointer" />
          </th>
          <th
            style={{
              border: '1px',
              borderColor: 'gray',
              padding: '16px 24px',
              backgroundColor: 'white',
              color: '#4c4c4c'
            }}
          >
            Order Code
          </th>
          <th
            style={{
              border: '1px',
              borderColor: 'gray',
              padding: '16px 24px',
              backgroundColor: 'white',
              color: '#4c4c4c'
            }}
          >
            Customer
          </th>
          <th
            style={{
              border: '1px',
              borderColor: 'gray',
              padding: '16px 24px',
              backgroundColor: 'white',
              color: '#4c4c4c'
            }}
          >
            Resi
          </th>
          <th
            style={{
              border: '1px',
              borderColor: 'gray',
              padding: '16px 24px',
              backgroundColor: 'white',
              color: '#4c4c4c'
            }}
          >
            Status
          </th>
          <th
            style={{
              border: '1px',
              borderColor: 'gray',
              padding: '16px 24px',
              backgroundColor: 'white',
              color: '#4c4c4c'
            }}
          >
            Order
          </th>
          <th
            style={{
              border: '1px',
              borderColor: 'gray',
              padding: '16px 24px',
              backgroundColor: 'white',
              color: '#4c4c4c'
            }}
          >
            Transfer
          </th>
          <th
            style={{
              border: '1px',
              borderColor: 'gray',
              padding: '16px 24px',
              backgroundColor: 'white',
              color: '#4c4c4c'
            }}
          >
            Barcode
          </th>
          <th
            style={{
              border: '1px',
              borderColor: 'gray',
              padding: '16px 24px',
              backgroundColor: 'white',
              color: '#4c4c4c',
              borderTopRightRadius: '12px'
            }}
          >
            Actions
          </th>
        </tr>
      </thead>
    </table>
  );
}
