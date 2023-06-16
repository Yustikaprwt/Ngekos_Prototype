import React from "react";
import "../Help Center/HelpCenter.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Accordion from "react-bootstrap/Accordion";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdNotificationsActive, MdOutlineCancel } from "react-icons/md";

const HelpCenter = () => {
  return (
    <>
      <div className="help-center-section">
        <Navbar />
        <div className="help-center-section-1">
          <h1>Hi, how can we help you?</h1>
          <h3>Most Frequently Asked Questions</h3>
        </div>

        <div className="toogle-help-center">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordion-header">
                <HiOutlineDocumentSearch className="accordion-icon" />
                Bagaimana cara user menghubungi pemilik kost?
              </Accordion.Header>
              <Accordion.Body>
                Pada tampilan home, klik detail kos. Pada laman selanjutnya akan
                menampilkan nomor telepon dari pemilik kost, beserta detail dari
                kost tersebut.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <RiLockPasswordFill className="accordion-icon" />
                Bagaimana cara user mengganti password akun?
              </Accordion.Header>
              <Accordion.Body>
                Klik icon akun pada tampilan navbar. Setelah masuk ke laman
                profile, klik edit password, dan ganti password baru, kemudian
                simpan.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <MdNotificationsActive className="accordion-icon" />
                Bagaimana cara mengelola notifikasi akun pemilik yang dikirimkan
                untuk saya?
              </Accordion.Header>
              <Accordion.Body>
                Pada bagian navbar, klik notification, maka akan menampilkan
                seluruh notifikasi kepada user tersebut.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <MdOutlineCancel className="accordion-icon" />
                Bagaimana jika saya ingin membatalkan penyewaan yang saya sudah
                DP?
              </Accordion.Header>
              <Accordion.Body>
                Untuk membatalkan pemesanan kamar yang telah dibayar di awal,
                dapat menghubungi pihak pemilik kost pada nomor yang tertera
                pada detail kost.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpCenter;
