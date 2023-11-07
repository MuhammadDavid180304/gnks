import React from 'react';
import { kortek } from './dummydata';
import { Grid } from '@mui/material';
import { gridSpacing } from 'redux/constant';

export default function Kortek() {
  const dataKortek = kortek;
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
                  Nama Koordinator Teknisi
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
              {dataKortek?.map((kortek, idx) => {
                return (
                  <tr key={idx}>
                    <td
                      style={{
                        padding: '16px 24px',
                        backgroundColor: 'white',
                        color: '#4c4c4c',
                        textAlign: 'center',
                        borderBottomLeftRadius: idx === dataKortek.length ? '12px' : '0px'
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
                      {kortek.nama}
                    </td>
                    <td
                      style={{
                        padding: '0px 24px',
                        backgroundColor: 'white',
                        color: '#4c4c4c',
                        textAlign: 'center'
                      }}
                    >
                      {kortek.email}
                    </td>
                    <td
                      style={{
                        padding: '0px 24px ',
                        backgroundColor: 'white',
                        color: '#4c4c4c',
                        textAlign: 'center'
                      }}
                    >
                      {kortek.provinsi}
                    </td>
                    <td
                      style={{
                        padding: '0px 24px',
                        backgroundColor: 'white',
                        color: '#4c4c4c',
                        textAlign: 'center'
                      }}
                    >
                      {kortek.phone}
                    </td>
                    <td
                      style={{
                        padding: '0px 24px',
                        backgroundColor: 'white',
                        color: '#4c4c4c',
                        textAlign: 'center',
                        borderBottomRightRadius: idx === dataKortek.length ? '12px' : '0px'
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
