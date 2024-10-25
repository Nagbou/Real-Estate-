import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import LandingImage from "../components/LandingImage";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <LandingImage />
      <AboutSection />

      {/* swiper */}
      {/* <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper> */}
      {/* listing results for offer, sale and rent */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-[#0F4C5C] text-4xl border-l-8 border-[#FFD700] pl-2 mb-10">
                Recent offers
              </h2>
            </div>
            <div className="flex flex-wrap gap-14 mb-5 justify-center items-center">
              {offerListings.slice(0, 3).map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
            <Link
              className="text-xl text-[#0F4C5C] hover:underline ml-3 border-l-8 border-[#FFD700] pl-2"
              to={"/search?offer=true"}
            >
              Show more offers...
            </Link>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-[#0F4C5C] text-4xl border-l-8 border-[#FFD700] pl-2 my-10 ">
                Recent Rent offers
              </h2>
            </div>
            <div className="flex flex-wrap gap-14 mb-5 justify-center items-center">
              {rentListings.slice(0, 3).map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
            <Link
              className="text-xl text-[#0F4C5C] hover:underline ml-3 border-l-8 border-[#FFD700] pl-2"
              to={"/search?type=rent"}
            >
              Show more places for rent
            </Link>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-[#0F4C5C] text-4xl border-l-8 border-[#FFD700] pl-2 my-10 ">
                Recent Sale offers
              </h2>
            </div>
            <div className="flex flex-wrap gap-14 mb-5 justify-center items-center">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
            <Link
              className="text-xl text-[#0F4C5C] hover:underline ml-3 border-l-8 border-[#FFD700] pl-2"
              to={"/search?type=sale"}
            >
              Show more places for sale
            </Link>
          </div>
        )}
      </div>
      <ContactSection />
    </div>
  );
}
