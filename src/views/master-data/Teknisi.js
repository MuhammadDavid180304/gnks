import React from 'react';
import { teknisi } from './dummydata';
import { gridSpacing } from 'redux/constant';
import { Grid } from '@mui/material';

export default function Teknisi() {
  const dataTeknisi = teknisi;

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <div style={{ width: '100%', overflowX: 'auto', borderRadius: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgorundColor: 'white' }}>
            <thead>
              <tr>
                <th
                  style={{
                    padding: '16px 24px',
                    backgroundColor: 'white',
                    borderTopLeftRadius: '12px'
                  }}
                >
                  <input type="checkbox" className="cursor-pointer" />
                </th>
                <th
                  style={{
                    padding: '16px 24px',
                    backgroundColor: 'white',
                    color: '#4c4c4c'
                  }}
                >
                  Nama Teknisi
                </th>
                <th
                  style={{
                    padding: '16px 24px',
                    backgroundColor: 'white',
                    color: '#4c4c4c'
                  }}
                >
                  Email
                </th>
                <th
                  style={{
                    padding: '16px 24px',
                    backgroundColor: 'white',
                    color: '#4c4c4c'
                  }}
                >
                  Provinsi
                </th>
                <th
                  style={{
                    padding: '16px 24px',
                    backgroundColor: 'white',
                    color: '#4c4c4c'
                  }}
                >
                  Kabupaten
                </th>
                <th
                  style={{
                    padding: '16px 24px',
                    backgroundColor: 'white',
                    color: '#4c4c4c'
                  }}
                >
                  Phone
                </th>
                <th
                  style={{
                    borderTopRightRadius: '12px',
                    padding: '16px 24px',
                    backgroundColor: 'white',
                    color: '#4c4c4c'
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dataTeknisi?.map((teknisi, idx) => {
                return (
                  <tr key={idx}>
                    <td
                      style={{
                        padding: '16px 24px',
                        backgroundColor: 'white',
                        color: '#4c4c4c',
                        textAlign: 'center',
                        borderBottomLeftRadius: idx === dataTeknisi.length - 1 ? '12px' : '0px'
                      }}
                    >
                      <input type="checkbox" className="cursor-pointer" />
                    </td>
                    <td
                      style={{
                        padding: '0px 24px',
                        backgroundColor: 'white',
                        color: '#4c4c4c',
                        textAlign: 'center'
                      }}
                    >
                      {teknisi.nama}
                    </td>
                    <td
                      style={{
                        padding: '0px 24px',
                        backgroundColor: 'white',
                        color: '#4c4c4c',
                        textAlign: 'center'
                      }}
                    >
                      {teknisi.email}
                    </td>
                    <td
                      style={{
                        padding: '0px 24px ',
                        backgroundColor: 'white',
                        color: '#4c4c4c',
                        textAlign: 'center'
                      }}
                    >
                      {teknisi.provinsi}
                    </td>
                    <td
                      style={{
                        padding: '16px 24px',
                        backgroundColor: 'white',
                        color: '#4c4c4c',
                        textAlign: 'center'
                      }}
                    >
                      {teknisi.kabupaten}
                    </td>
                    <td
                      style={{
                        padding: '0px 24px',
                        backgroundColor: 'white',
                        color: '#4c4c4c',
                        textAlign: 'center'
                      }}
                    >
                      {teknisi.phone}
                    </td>
                    <td
                      style={{
                        padding: '0px 24px',
                        backgroundColor: 'white',
                        color: '#4c4c4c',
                        textAlign: 'center',
                        borderBottomRightRadius: idx === dataTeknisi.length - 1 ? '12px' : '0px'
                      }}
                    >
                      <p>hapus</p>
                      {/* <p>edit</p> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Grid>
    </Grid>
  );
}
