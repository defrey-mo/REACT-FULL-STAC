import React from 'react'
import '../CSS/update.css'

export default function Update({ setAppTitle,setActivePage }) {
  setActivePage("update-student")

  return (
      <>
        <div className='updating'>
          <div className='searching-by'>
            <input type="text" name="" id=""  placeholder='Search by Names'/>
            <input type="text" name="" id=""  placeholder='Search by Reg.No'/>
          </div>
          <table>
            <tr>
              <th>Reg.No</th>
              <th>Full Names</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>1048</td>
              <td>Bwire O. Fredrick</td>
              <td>Expelled For Inciting a Strike</td>
            </tr>
            <tr>
              <td>1048</td>
              <td>Bwire O. Fredrick</td>
              <td>Expelled For Inciting a Strike</td>
            </tr>
            <tr>
              <td>1048</td>
              <td>Bwire O. Fredrick</td>
              <td>Expelled For Inciting a Strike</td>
            </tr>
            <tr>
              <td>1048</td>
              <td>Bwire O. Fredrick</td>
              <td>Expelled For Inciting a Strike</td>
            </tr>
            <tr>
              <td>1048</td>
              <td>Bwire O. Fredrick</td>
              <td>Expelled For Inciting a Strike</td>
            </tr>
            <tr>
              <td>1048</td>
              <td>Bwire O. Fredrick</td>
              <td>Expelled For Inciting a Strike</td>
            </tr>
            <tr>
              <td>1048</td>
              <td>Bwire O. Fredrick</td>
              <td>Expelled For Inciting a Strike</td>
            </tr>
            <tr>
              <td>1048</td>
              <td>Bwire O. Fredrick</td>
              <td>Expelled For Inciting a Strike</td>
            </tr>
          </table>
        </div>
      </>
  )
}
