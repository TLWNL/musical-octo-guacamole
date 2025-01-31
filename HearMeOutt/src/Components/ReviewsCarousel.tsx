import React from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

type Review = {
  id: number;
  name: string;
  text: string;
  job: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Kris Seinen",
    text: "Simpelweg geweldig! Door dit geweldige concept ben ik binnen 3 dagen toegelaten tot mijn droomwerk! Geen vooroordelen meer, ik kon direct op gesprek komen en werd aangenomen!",
    job: "Nu werkend als ICT’er",
  },
  {
    id: 2,
    name: "Bob Smith",
    text: "Great service and fast delivery. Very satisfied.",
    job: "Nu werkend als ICT’er",
  },
  {
    id: 3,
    name: "Charlie Davis",
    text: "Decent quality for the price. Would buy again.",
    job: "Nu werkend als ICT’er",
  },
];

const ReviewsCarousel: React.FC = () => {
  return (
    <Carousel
      style={{
        height: "190px",
        borderRadius: "10px",
        backgroundColor: "#6C7584",
      }}
    >
      {reviews.map((review) => (
        <Carousel.Item key={review.id} interval={4000}>
          {/* Center Content */}
          <div
            className="d-flex flex-column justify-content-center "
            style={{ height: "190px", padding: "30px" }}
          >
            <p className="text-white mb-4">{review.text}</p>

            {/* Row for Avatar & Text - Align Left */}
            <div className="d-flex align-items-center">
              {/* FontAwesome User Icon */}
              <FontAwesomeIcon
                icon={faUserCircle}
                size="2x"
                color="white"
                className="me-2"
              />

              {/* Name & Job */}
              <div>
                <h3
                  style={{
                    fontSize: "14px",
                    color: "white",
                    marginBottom: "0",
                  }}
                >
                  {review.name}
                </h3>
                <small className="text-white">{review.job}</small>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ReviewsCarousel;
