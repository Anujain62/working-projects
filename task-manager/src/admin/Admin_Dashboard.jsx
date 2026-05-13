import React from 'react'

const Admin_Dashboard = () => {
  return (
    <div className='container'>

      <div>

        <div>
          <h3>Total</h3>
          <p>10</p>
        </div>

        <div>
          <h3>Completed</h3>
          <p>5</p>
        </div>

        <div>
          <h3>Pending</h3>
          <p>5</p>
        </div>

        <div>
          <h3>Ongoing</h3>
          <p>4</p>
        </div>

      </div>

      <div>
        <table>
          <tr>
            <th>Employee Name</th>
            <th>Task Detail</th>
          </tr>
          <tr>
            <td>Anu Jain</td>
            <td>Web develop</td>
          </tr>
          <tr>
            <td>Anu Jain</td>
            <td>Web develop</td>
          </tr>
          <tr>
            <td>Anu Jain</td>
            <td>Web develop</td>
          </tr>
          <tr>
            <td>Anu Jain</td>
            <td>Web develop</td>
          </tr>
          <tr>
            <td>Anu Jain</td>
            <td>Web develop</td>
          </tr>
          <tr>
            <td>Anu Jain</td>
            <td>Web develop</td>
          </tr>
        </table>
      </div>

    </div>
  )
}

export default Admin_Dashboard