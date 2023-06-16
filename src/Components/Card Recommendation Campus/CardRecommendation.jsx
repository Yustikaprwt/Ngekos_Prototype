import React from "react";
import { useNavigate } from "react-router";
import "../Card Recommendation Campus/CardRecommendation.css";
import { Card, Button } from "react-bootstrap";
import kosan_1 from "../../Asset/kosan_1.jpeg";
import kosan_2 from "../../Asset/kosan_2.jpg";
import kosan_3 from "../../Asset/kosan_3.jpeg";
import kosan_4 from "../../Asset/kosan_4.jpg";
import { IoMdMan, IoMdWoman } from "react-icons/io";

const CardRecommendation = () => {
  const navigate = useNavigate();
  const kostFlorentine = () => {
    navigate(`/kost/Florentine`);
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

  return (
    <>
      <div className="card-recommendation-section">
        <Card
          style={{
            width: "15rem",
            border: "0",
            backgroundColor: "#F7F7F7",
          }}
        >
          <Card.Img
            variant="top"
            src={kosan_1}
            alt="alt"
            style={{
              borderRadius: "10px",
              width: "250px",
              height: "165px",
            }}
          />
          <Card.Body>
            <Card.Title
              style={{
                fontFamily: "poppins",
                fontSize: "19px",
              }}
            >
              Kost Florentine <IoMdWoman className="icon-card" />
            </Card.Title>
            <Card.Text
              style={{
                textAlign: "justify",
                fontSize: "13px",
              }}
            >
              Jl. Blora I, Klandasan Ilir, Kecamatan Balikpapan Selatan, Kota
              Balikpapan
            </Card.Text>
            <Card.Text
              style={{
                textAlign: "justify",
                fontSize: "15px",
              }}
            >
              Rp. 900.000/Bulan
            </Card.Text>
            <Button
              onClick={kostFlorentine}
              className="button-card-recommendation-section"
            >
              Detail
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "15rem",
            border: "0",
            backgroundColor: "#F7F7F7",
          }}
        >
          <Card.Img
            variant="top"
            src={kosan_2}
            alt="alt"
            style={{
              borderRadius: "10px",
              width: "250px",
            }}
          />
          <Card.Body>
            <Card.Title
              style={{
                fontFamily: "poppins",
                fontSize: "19px",
              }}
            >
              Kost Tulip <IoMdWoman className="icon-card" />
            </Card.Title>
            <Card.Text
              style={{
                textAlign: "justify",
                fontSize: "13px",
              }}
            >
              Jl. Blora I, Klandasan Ilir, Kecamatan Balikpapan Selatan, Kota
              Balikpapan
            </Card.Text>
            <Card.Text
              style={{
                textAlign: "justify",
                fontSize: "15px",
              }}
            >
              Rp. 900.000/Bulan
            </Card.Text>
            <Button
              onClick={kostTulip}
              className="button-card-recommendation-section"
            >
              Detail
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "15rem",
            border: "0",
            backgroundColor: "#F7F7F7",
          }}
        >
          <Card.Img
            variant="top"
            src={kosan_3}
            alt="alt"
            style={{
              borderRadius: "10px",
              width: "250px",
            }}
          />
          <Card.Body>
            <Card.Title
              style={{
                fontFamily: "poppins",
                fontSize: "19px",
              }}
            >
              Kost Sunflower <IoMdMan className="icon-card" />
            </Card.Title>
            <Card.Text
              style={{
                textAlign: "justify",
                fontSize: "13px",
              }}
            >
              Jl. Blora I, Klandasan Ilir, Kecamatan Balikpapan Selatan, Kota
              Balikpapan
            </Card.Text>
            <Card.Text
              style={{
                textAlign: "justify",
                fontSize: "15px",
              }}
            >
              Rp. 900.000/Bulan
            </Card.Text>
            <Button
              onClick={kostSunflower}
              className="button-card-recommendation-section"
            >
              Detail
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "15rem",
            border: "0",
            backgroundColor: "#F7F7F7",
          }}
        >
          <Card.Img
            variant="top"
            src={kosan_4}
            alt="alt"
            style={{
              borderRadius: "10px",
              width: "250px",
            }}
          />
          <Card.Body>
            <Card.Title
              style={{
                fontFamily: "poppins",
                fontSize: "19px",
              }}
            >
              Kost Lavender <IoMdMan className="icon-card" />
            </Card.Title>
            <Card.Text
              style={{
                textAlign: "justify",
                fontSize: "13px",
              }}
            >
              Jl. Blora I, Klandasan Ilir, Kecamatan Balikpapan Selatan, Kota
              Balikpapan
            </Card.Text>
            <Card.Text
              style={{
                textAlign: "justify",
                fontSize: "15px",
              }}
            >
              Rp. 900.000/Bulan
            </Card.Text>
            <Button
              onClick={kostLavender}
              className="button-card-recommendation-section"
            >
              Detail
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div className="card-recommendation-section">
        <Card
          style={{
            width: "15rem",
            border: "0",
            backgroundColor: "#F7F7F7",
          }}
        >
          <Card.Img
            variant="top"
            src={kosan_1}
            alt="alt"
            style={{
              borderRadius: "10px",
              width: "250px",
              height: "165px",
            }}
          />
          <Card.Body>
            <Card.Title
              style={{
                fontFamily: "poppins",
                fontSize: "19px",
              }}
            >
              Kost Florentine <IoMdWoman className="icon-card" />
            </Card.Title>
            <Card.Text
              style={{
                textAlign: "justify",
                fontSize: "13px",
              }}
            >
              Jl. Blora I, Klandasan Ilir, Kecamatan Balikpapan Selatan, Kota
              Balikpapan
            </Card.Text>
            <Card.Text
              style={{
                textAlign: "justify",
                fontSize: "15px",
              }}
            >
              Rp. 900.000/Bulan
            </Card.Text>
            <Button
              onClick={kostFlorentine}
              className="button-card-recommendation-section"
            >
              Detail
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "15rem",
            border: "0",
            backgroundColor: "#F7F7F7",
          }}
        >
          <Card.Img
            variant="top"
            src={kosan_2}
            alt="alt"
            style={{
              borderRadius: "10px",
              width: "250px",
            }}
          />
          <Card.Body>
            <Card.Title
              style={{
                fontFamily: "poppins",
                fontSize: "19px",
              }}
            >
              Kost Tulip <IoMdWoman className="icon-card" />
            </Card.Title>
            <Card.Text
              style={{
                textAlign: "justify",
                fontSize: "13px",
              }}
            >
              Jl. Blora I, Klandasan Ilir, Kecamatan Balikpapan Selatan, Kota
              Balikpapan
            </Card.Text>
            <Card.Text
              style={{
                textAlign: "justify",
                fontSize: "15px",
              }}
            >
              Rp. 900.000/Bulan
            </Card.Text>
            <Button
              onClick={kostTulip}
              className="button-card-recommendation-section"
            >
              Detail
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "15rem",
            border: "0",
            backgroundColor: "#F7F7F7",
          }}
        >
          <Card.Img
            variant="top"
            src={kosan_3}
            alt="alt"
            style={{
              borderRadius: "10px",
              width: "250px",
            }}
          />
          <Card.Body>
            <Card.Title
              style={{
                fontFamily: "poppins",
                fontSize: "19px",
              }}
            >
              Kost Sunflower <IoMdMan className="icon-card" />
            </Card.Title>
            <Card.Text
              style={{
                textAlign: "justify",
                fontSize: "13px",
              }}
            >
              Jl. Blora I, Klandasan Ilir, Kecamatan Balikpapan Selatan, Kota
              Balikpapan
            </Card.Text>
            <Card.Text
              style={{
                textAlign: "justify",
                fontSize: "15px",
              }}
            >
              Rp. 900.000/Bulan
            </Card.Text>
            <Button
              onClick={kostSunflower}
              className="button-card-recommendation-section"
            >
              Detail
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "15rem",
            border: "0",
            backgroundColor: "#F7F7F7",
          }}
        >
          <Card.Img
            variant="top"
            src={kosan_4}
            alt="alt"
            style={{
              borderRadius: "10px",
              width: "250px",
            }}
          />
          <Card.Body>
            <Card.Title
              style={{
                fontFamily: "poppins",
                fontSize: "19px",
              }}
            >
              Kost Lavender <IoMdMan className="icon-card" />
            </Card.Title>
            <Card.Text
              style={{
                textAlign: "justify",
                fontSize: "13px",
              }}
            >
              Jl. Blora I, Klandasan Ilir, Kecamatan Balikpapan Selatan, Kota
              Balikpapan
            </Card.Text>
            <Card.Text
              style={{
                textAlign: "justify",
                fontSize: "15px",
              }}
            >
              Rp. 900.000/Bulan
            </Card.Text>
            <Button
              onClick={kostLavender}
              className="button-card-recommendation-section"
            >
              Detail
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CardRecommendation;
