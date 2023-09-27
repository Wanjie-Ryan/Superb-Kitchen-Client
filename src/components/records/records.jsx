import React from "react";
import "./records.css";
import { FaFileCsv } from "react-icons/fa";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
function Records() {
  

  return (
    <>
    <div classname='records'>

      <div className="table-container">
        <div className="table-btns">
          <button className="csv">
            <FaFileCsv /> Export as CSV
          </button>
          <button className="pdf">
            <BsFillFileEarmarkPdfFill />
            Export as PDF
          </button>
        </div>
        <table className="products-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Payment Status</th>
              <th>Delivery Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Spoons</td>
              <td>3</td>
              <td>ksh.100</td>
              <td className='paid'>Paid</td>
              <td className='pending'>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default Records;
