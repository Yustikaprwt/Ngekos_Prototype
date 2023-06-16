import React from "react";
import { useNavigate } from "react-router";
import "../Kost Florentine/KostFlorentine.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import kosan_3 from "../../Asset/kosan_3.jpeg";
import {
  AiFillHome,
  AiFillThunderbolt,
  AiFillClockCircle,
} from "react-icons/ai";
import {
  GiMirrorMirror,
  GiPillow,
  GiComputerFan,
  GiCctvCamera,
} from "react-icons/gi";
import {
  MdOutlineBathroom,
  MdOutlineKitchen,
  MdOutlineLocalAirport,
  MdNotInterested,
} from "react-icons/md";
import { FaToilet, FaWifi, FaMotorcycle } from "react-icons/fa";
import { BsFillCarFrontFill, BsHospital } from "react-icons/bs";
import { LuBedDouble } from "react-icons/lu";
import CardRecommendation from "../../Components/Card Recommendation Campus/CardRecommendation";

const KostSunflower = () => {

  const navigate = useNavigate();

  const paymentSunflower = () => {
    navigate(`/payment/sunflower`);
  };

  return (
    <>
      <div className="detail-kost-section">
        <Navbar />
        <div className="detail-kost-section-1">
          <div className="detail-kost-section-2">
            <img className="detail-kost-image" src={kosan_3} alt="img" />
            <h3>Kost Sunflower</h3>
            <p>
              Jl. Blora I, Klandasan Ilir, Kecamatan Balikpapan Selatan, Kota
              Balikpapan
            </p>
            <p
              style={{
                color: "red",
              }}
            >
              Kamar tersisa 3
            </p>
          </div>

          <div className="detail-kost-price">
            <h3>Rp 900.000/Bulan</h3>
            <input type="date" />
            <button onClick={paymentSunflower}>Rent</button>
          </div>
        </div>

        <div className="detail-kost-section-3">
          <h3>Spesifikasi dan Fasilitas Kamar</h3>
          <div className="detail-kost-section-4">
            <div className="detail-kost-section-5">
              <p>
                <AiFillHome /> Luas kamar 3 x 3 Meter
              </p>
              <p>
                <AiFillThunderbolt /> Belum Termasuk Listrik
              </p>
              <p>
                <LuBedDouble /> Kasur
              </p>
            </div>
            <div className="detail-kost-section-5">
              <p>
                <GiMirrorMirror /> Cermin
              </p>
              <p>
                <GiPillow /> Bantal
              </p>
              <p>
                <GiComputerFan /> Kipas Angin
              </p>
            </div>
          </div>
        </div>

        <div className="detail-kost-section-3">
          <h3>Kamar Mandi</h3>
          <div className="detail-kost-section-4">
            <div className="detail-kost-section-5">
              <p>
                <MdOutlineBathroom /> Kamar Mandi di dalam kamar
              </p>
              <p>
                <FaToilet /> Toilet Duduk
              </p>
            </div>
          </div>
        </div>

        <div className="detail-kost-section-3">
          <h3>Fasilitas Umum</h3>
          <div className="detail-kost-section-4">
            <div className="detail-kost-section-5">
              <p>
                <MdOutlineKitchen /> Dapur Bersama
              </p>
              <p>
                <FaWifi /> Wifi
              </p>
              <p>
                <GiCctvCamera /> CCTV 24 Jam
              </p>
            </div>

            <div className="detail-kost-section-5">
              <p>
                <FaMotorcycle /> Parkiran Motor
              </p>
              <p>
                <BsFillCarFrontFill /> Parkiran Mobil
              </p>
            </div>
          </div>
        </div>

        <div className="detail-kost-section-3">
          <h3>Lokasi Sekitar</h3>
          <div className="detail-kost-section-4">
            <div className="detail-kost-section-5">
              <p>
                <BsHospital /> Dekat dengan Rumah Sakit
              </p>
              <p>
                <MdOutlineLocalAirport /> Dekat dengan Bandara
              </p>
            </div>
          </div>
        </div>

        <div className="detail-kost-section-3">
          <h3>Peraturan</h3>
          <div className="detail-kost-section-4">
            <div className="detail-kost-section-5">
              <p>
                <AiFillClockCircle /> Akses 24 Jam
              </p>
              <p>
                <MdNotInterested /> Lawan Jenis dilarang masuk
              </p>
            </div>
          </div>
        </div>
        <h3 className="detail-kost-section-6">Another Kost</h3>
        <CardRecommendation />
      </div>
      <Footer />
    </>
  );
};

export default KostSunflower;
