import React from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";
const Testimonial = () => {
  return (
    <div className="flex flex-col items-center px-6 md:p-16 lg:px-24 bg-slate-50">
      <Title
        title={"What our Guests Say"}
        subTilte={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quis optio dolor eaque facere dolore obcaecati! Dolorum vero deserunt distinctio consequuntur? Quia debitis earum reprehenderit illum ullam, nostrum dolorem distinctio?"
        }
      />
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-[#F5F7FF] pt-20 pb-30">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-[40px] font-playfair">
            Customer Testimonials
          </h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-[696px]">
            Hear what our users say about us. We're always looking for ways to
            improve. If you have a positive experience with us, leave a review.
          </p>
        </div>

        <div className="flex flex-wrap items-center  gap-6 mt-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow "
            >
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <p className="font-playfair text-xl">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-gray-500 max-w-90 mt-4">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
