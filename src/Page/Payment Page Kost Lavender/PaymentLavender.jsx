import { React, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import kosan_4 from "../../Asset/kosan_4.jpg";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";

const PaymentLavender = () => {
  const [fieldCount, setFieldCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(900000);
  const [startDate, setStartDate] = useState("");

  const handleAddField = () => {
    setFieldCount(fieldCount + 1);
    setTotalPrice(totalPrice * 2);
  };

  const handleRemoveField = () => {
    if (fieldCount > 1) {
      setFieldCount(fieldCount - 1);
      setTotalPrice(totalPrice / 2);
    }
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const navigate = useNavigate();
  const homePage = () => {
    navigate(`/home`);
  };

  return (
    <>
      <div className="payment-section">
        <Navbar />
        <h2>Detail Payment</h2>
        <div className="payment-section-1">
          <div className="payment-section-2">
            <h3>Kost Lavender</h3>
            <img src={kosan_4} alt="img" />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="payment-section-3">
              <p>
                Jl. Blora I, Klandasan Ilir, Kecamatan Balikpapan Selatan, Kota
                Balikpapan
              </p>
              <p
                style={{
                  color: "red",
                }}
              >
                Kamar Tersisa 3
              </p>
            </div>
            <div className="field-count">
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
              />
              <AiFillPlusSquare
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "10px",
                }}
                onClick={handleAddField}
              />
              {fieldCount} Kamar
              <AiFillMinusSquare
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "10px",
                }}
                onClick={handleRemoveField}
              />
            </div>
          </div>
        </div>

        <div className="payment-section-4">
          <h3>
            Tanggal Mulai Kost <span>: {startDate}</span>
          </h3>
        </div>

        <div className="payment-section-4">
          <h3>
            Total Harga <span>: Rp {totalPrice.toLocaleString()}</span>
          </h3>
        </div>

        <div className="payment-section-5">
          <button onClick={homePage}>Rent</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentLavender;
