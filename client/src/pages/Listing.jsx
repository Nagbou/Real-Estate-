import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from "react-icons/fa";

import Contact from "../components/Contact";
import "./Listing.css";

export default function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  return (
    <main className="bg-[#1A1A2E] p-5">
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <div>
          <Swiper navigation modules={[Navigation]}>
            {listing.imageUrls.map((url, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-[550px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="container mx-auto">
            {/* Image Rows */}
            <div className="flex mt-5 space-x-3">
              <div className="flex-1">
                <img
                  src={listing.imageUrls[0]}
                  alt="horizontal"
                  className="h-96 w-4/5 object-cover mx-auto"
                />
              </div>
              <div className="w-1/4">
                <img
                  src={listing.imageUrls[1]}
                  alt="vertical"
                  className="h-96 w-4/5 object-cover mx-auto"
                />
              </div>
            </div>

            <div className="flex mt-5 space-x-3">
              <div className="flex-1 px-3">
                <img
                  src={listing.imageUrls[2]}
                  alt="vertical"
                  className="h-[800px] w-4/5 object-cover mx-auto pt-10"
                />
              </div>
              <div className="flex-1 space-y-5">
                <img
                  src={listing.imageUrls[3]}
                  alt="horizontal"
                  className="h-96 w-4/5 object-cover mx-auto pt-14 mb-5"
                />
                <img
                  src={listing.imageUrls[4]}
                  alt="horizontal"
                  className="h-[350px] w-4/5 object-cover mx-auto"
                />
              </div>
            </div>
          </div>

          <div className="fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
            <FaShare
              className="text-slate-500"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>

          {copied && (
            <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2">
              Link copied!
            </p>
          )}
          <div className="fixed top-1/4 left-0 text-white text-4xl z-50">
            <p className="bg-[#0F4C5C] w-full max-w-[200px] text-white text-center p-2 ps-8 pe-5 shadow-md">
              {listing.type === "rent" ? "For Rent" : "For Sale"}
            </p>
          </div>
          <div className="fixed top-1/3 mt-5 left-0 text-white text-4xl z-50">
            {listing.offer && (
              <p className="bg-red-800 w-full max-w-[200px] text-white text-center p-1 ps-12 pe-5 shadow-md">
                ${+listing.regularPrice - +listing.discountPrice} OFF
              </p>
            )}
          </div>

          <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
          
            <h5 className="text-4xl font-semibold text-white -mb-10 mt-10 ms-11 vertical_yellow_box">
              {listing.name} - ${" "}
              {listing.offer
                ? listing.discountPrice.toLocaleString("en-US")
                : listing.regularPrice.toLocaleString("en-US")}
              {listing.type === "rent" && " / month"}
            </h5>
            <h4 className="details_infos mt-10 -mb-20 -ms-2">
              <FaMapMarkerAlt className="text-yellow-500 inline-block  me-3 " />
              {listing.address}
            </h4>
            <p className="describ vertical_white_box">{listing.description}</p>
            <div className="details_section">
              <div className="details_section_body flex-col md:flex-row">
                <h4 className="details_infos">
                  <FaBed className="text-yellow-500 inline-block  me-4" />
                  {listing.bedrooms > 1
                    ? `${listing.bedrooms} beds`
                    : `${listing.bedrooms} bed`}
                </h4>
                <h4 className="details_infos">
                  <FaBath className="text-yellow-500 inline-block  me-4" />
                  {listing.bathrooms > 1
                    ? `${listing.bathrooms} baths`
                    : `${listing.bathrooms} bath`}
                </h4>
                <h4 className="details_infos">
                  <FaParking className="text-yellow-500 inline-block  me-4" />
                  {listing.parking ? "Parking spot" : "No Parking"}
                </h4>
                <h4 className="details_infos">
                  <FaChair className="text-yellow-500 inline-block  me-4" />
                  {listing.furnished ? "Furnished" : "Unfurnished"}
                </h4>
              </div>
            </div>
            {currentUser && listing.userRef !== currentUser._id && !contact && (
              <button
                onClick={() => setContact(true)}
                className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3"
              >
                Contact landlord
              </button>
            )}
            {contact && <Contact listing={listing} />}
          </div>
        </div>
      )}
    </main>
  );
}
