import React, { useContext, useState, useEffect } from "react";
import "./records.css";
import { FaFileCsv } from "react-icons/fa";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { payDataContext } from "../context/pay";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import jsPDF from "jspdf";

function Records() {
  const { payd } = useContext(payDataContext);
  // console.log(payd);
  const productId = payd ? payd.latestPayment.transaction_reference : "";
  // console.log(productId);

  const [product, setProduct] = useState([]);
  const [recordIndex, setRecordIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get().userToken;

    const getSingleProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3005/api/user/products/usersingleproduct/${productId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        // console.log(response);

        setProduct(response.data.singleProduct);
      } catch (err) {
        // console.log(err);

        if (err.response.status === 401) {
          toast.error("Not Authorized");
          navigate("/");
        } else if (err.response.status === 404) {
          toast.error("Product Not found");
        } else if (err.response.status === 500) {
          toast.error("A problem with our servers, hang on");
        }
      }
    };

    getSingleProduct();
  }, [productId]);

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text("Purchased products List", 10, 10);

    doc.text(`Product Name: ${product ? product.name : "product"}`, 10, 20);
    doc.text(
      `Amount:Ksh. ${payd ? payd.latestPayment.Amount[0] : "0"}`,
      10,
      30
    );
    doc.text(`Payment Status: Paid`, 10, 40);
    doc.text(`Delivery Status: Pending`, 10, 50);

    const pdfFileName = `Product_Purchased_${product.name}.pdf`;

    doc.save(pdfFileName);
  };

  const convertToCSV = () => {
    const productData = [
      {
        No: recordIndex + 1,
        Product: product ? product.name : "product",
        Amount: `ksh.${payd ? payd.latestPayment.Amount[0] : "0"}`,
        "Payment Status": "Paid",
        "Delivery Status": "Pending",
      },
    ];

    const header = Object.keys(productData[0]);

    const csvContent = [
      header.join(","),
      ...productData.map((row) =>
        header.map((fieldName) => JSON.stringify(row[fieldName])).join(",")
      ),
    ];

    return csvContent.join("\n");
  };

  const downloadCSV = () => {
    const csv = convertToCSV();
    const csvBlob = new Blob([csv], { type: "text/csv" });
    const csvUrl = URL.createObjectURL(csvBlob);

    const a = document.createElement("a");
    a.href = csvUrl;
    a.download = "Product_purchased.csv";
    a.click();
    URL.revokeObjectURL(csvUrl);
  };

  return (
    <>
      <div className="records">
        <div className="table-container">
          <div className="table-btns">
            <button className="csv" onClick={downloadCSV}>
              <FaFileCsv /> Export as CSV
            </button>
            <button className="pdf" onClick={generatePDF}>
              <BsFillFileEarmarkPdfFill />
              Export as PDF
            </button>
          </div>
          <table className="products-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Product</th>
                {/* <th>Quantity</th> */}
                <th>Amount</th>
                <th>Payment Status</th>
                <th>Delivery Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{recordIndex + 1}</td>
                <td>{product ? product.name : "product"}</td>
                {/* <td>3</td> */}
                <td>Ksh. {payd ? payd.latestPayment.Amount[0] : "0"}</td>
                <td className="paid">Paid</td>
                <td className="pending">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Records;
