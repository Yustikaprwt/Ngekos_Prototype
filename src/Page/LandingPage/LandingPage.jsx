import { React } from "react";
import "../../Page/LandingPage/LandingPage.css";
import { useNavigate } from "react-router";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import bannerImage from "../../Asset/banner_home.png";
import { BsFillStarFill } from "react-icons/bs";
import kosan_1 from "../../Asset/kosan_1.jpeg";
import kosan_2 from "../../Asset/kosan_2.jpg";
import kosan_3 from "../../Asset/kosan_3.jpeg";
import kosan_4 from "../../Asset/kosan_4.jpg";
import kampus_1 from "../../Asset/kampus_1.jpg";
import kampus_2 from "../../Asset/kampus_2.jpg";
import kampus_3 from "../../Asset/kampus_3.jpeg";
import kampus_4 from "../../Asset/kampus_4.jpg";
import avatar_1 from "../../Asset/avatar_1.jpg";
import avatar_2 from "../../Asset/avatar_2.jpg";
import avatar_3 from "../../Asset/avatar_3.jpg";
import avatar_4 from "../../Asset/avatar_4.jpg";
import { Image, Card } from "react-bootstrap";

const LandingPage = () => {
  const navigate = useNavigate();
  const registerPage = () => {
    navigate(`/register`);
  };

  const kostFlorentine = () => {
    navigate(`/kost/florentine`);
  };

  const kostTulip = () => {
    navigate(`/kost/tulip`);
  };

  const kostSunflower = () => {
    navigate(`/kost/sunflower`);
  };

  const kostLavender = () => {
    navigate(`/kost/lavender`);
  };

  const kostAroundCampus = () => {
    navigate(`/kost/around/campus`);
  };

  return (
    <>
      <div className="section-landing-page">
        <Header />
        <div className="banner-image-section">
          <img
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            src={bannerImage}
            alt="img"
          />
          <div
            className="banner-text-section"
            style={{
              position: "auto",
              top: "60%",
              left: "25%",
              width: "45%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1>Easy Solutions to Find ur Cheap Kost</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <button
                onClick={registerPage}
                className="button-register-landing-page"
              >
                Register ur Account
              </button>
            </div>
          </div>
        </div>
        <div className="recommendation-section">
          <h1>Kost Recommendations Around Campus</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div className="kost-image-overlay">
              <Image
                onClick={kostFlorentine}
                className="kost-image-recommendation"
                src={kosan_1}
                alt="img"
              />
              <div className="kost-image-text">
                <p>Kost Florentine</p>
                <div className="rating">
                  <span>
                    <BsFillStarFill
                      style={{
                        color: "#FFCD3C",
                      }}
                    />
                    4,9
                  </span>
                </div>
              </div>
            </div>

            <div className="kost-image-overlay">
              <Image
                onClick={kostTulip}
                className="kost-image-recommendation"
                src={kosan_2}
                alt="img"
              />
              <div className="kost-image-text">
                <p>Kost Tulip</p>
                <div className="rating">
                  <span>
                    <BsFillStarFill
                      style={{
                        color: "#FFCD3C",
                      }}
                    />
                    4,9
                  </span>
                </div>
              </div>
            </div>

            <div className="kost-image-overlay">
              <Image
                onClick={kostSunflower}
                className="kost-image-recommendation"
                src={kosan_3}
                alt="img"
              />
              <div className="kost-image-text">
                <p>Kost Sunflower</p>
                <div className="rating">
                  <span>
                    <BsFillStarFill
                      style={{
                        color: "#FFCD3C",
                      }}
                    />
                    4,9
                  </span>
                </div>
              </div>
            </div>

            <div className="kost-image-overlay">
              <Image
                onClick={kostLavender}
                className="kost-image-recommendation"
                src={kosan_4}
                alt="img"
              />
              <div className="kost-image-text">
                <p>Kost Lavender</p>
                <div className="rating">
                  <span>
                    <BsFillStarFill
                      style={{
                        color: "#FFCD3C",
                      }}
                    />
                    4,9
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="recommendation-section">
            <h1>Kost Area Around Campus</h1>
            <div className="recommendation-campus-section">
              <div className="kost-image-overlay-1">
                <Image src={kampus_1} className="campus-image" alt="img" />
                <p onClick={kostAroundCampus}>UNIBA Balikpapan</p>
              </div>
              <div className="kost-image-overlay-1">
                <Image src={kampus_2} className="campus-image" alt="img" />
                <p onClick={kostAroundCampus}>Poltekba Balikpapan</p>
              </div>

              <div className="kost-image-overlay-1">
                <Image src={kampus_3} className="campus-image" alt="img" />
                <p onClick={kostAroundCampus}>ITK Balikpapan</p>
              </div>

              <div className="kost-image-overlay-1">
                <Image src={kampus_4} className="campus-image" alt="img" />
                <p onClick={kostAroundCampus}>Universitas Mulia Balikpapan</p>
              </div>
            </div>

            <div className="recommendation-section">
              <h1>Owner's comment</h1>
              <div className="card-container-owner">
                <Card style={{ width: "25rem" }}>
                  <Card.Img variant="top" src={avatar_1} />
                  <Card.Body
                    style={{
                      backgroundColor: "#F19100",
                    }}
                  >
                    <Card.Title className="owner-name">
                      Amanda Rawles
                    </Card.Title>
                    <Card.Title className="kost-name">
                      Kost Florentine
                    </Card.Title>
                    <Card.Text className="text-card-owner">
                      "Saya bergabung dengan NgeKos sudah 1 tahun 5 bulan dan
                      sudah mendapatkan 281 favorit. Kos Aloha menjadi terkenal
                      dan mendapatkan banyak peminat. Terima kasih NgeKost. Saya
                      akan tetap bekerja sama dengan Ngekos."
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: "25rem" }}>
                  <Card.Img variant="top" src={avatar_2} />
                  <Card.Body
                    style={{
                      backgroundColor: "#F19100",
                    }}
                  >
                    <Card.Title className="owner-name">
                      Marcello Tahitoe
                    </Card.Title>
                    <Card.Title className="kost-name">Kost Tulip</Card.Title>
                    <Card.Text className="text-card-owner">
                      "NgeKos (menurut saya adalah) tempat promosi kos nomor 1
                      saat ini. Hasil pencarian kos yang mengarah ke tempat kami
                      cukup baik. (Sehingga) okupansi lumayan cepat meningkat.
                      Luar biasa NgeKos!"
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="card-container-owner">
                <Card style={{ width: "25rem" }}>
                  <Card.Img variant="top" src={avatar_3} />
                  <Card.Body
                    style={{
                      backgroundColor: "#F19100",
                    }}
                  >
                    <Card.Title className="owner-name">Bryan Domani</Card.Title>
                    <Card.Title className="kost-name">
                      Kost Sunflower
                    </Card.Title>
                    <Card.Text className="text-card-owner">
                      "NgeKos (menurut saya adalah) tempat promosi kos nomor 1
                      saat ini. Hasil pencarian kos yang mengarah ke tempat kami
                      cukup baik. (Sehingga) okupansi lumayan cepat meningkat.
                      Luar biasa NgeKos!"
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: "25rem" }}>
                  <Card.Img variant="top" src={avatar_4} />
                  <Card.Body
                    style={{
                      backgroundColor: "#F19100",
                    }}
                  >
                    <Card.Title className="owner-name">
                      Bella Graceva
                    </Card.Title>
                    <Card.Title className="kost-name">Kost Lavender</Card.Title>
                    <Card.Text className="text-card-owner">
                      "Saya bergabung dengan NgeKos sudah 1 tahun 5 bulan dan
                      sudah mendapatkan 281 favorit. Kos Aloha menjadi terkenal
                      dan mendapatkan banyak peminat. Terima kasih NgeKost. Saya
                      akan tetap bekerja sama dengan Ngekos."
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
