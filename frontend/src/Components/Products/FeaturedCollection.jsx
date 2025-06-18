import React from "react";

function FeaturedCollection() {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        {/*Left content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Not Just Apparel, It's a Lifestyle
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Redefining Everyday Fashion
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            From chill weekends to bold weekdays explore essentials that offer
            the perfect balance between laid-back comfort and street-smart
            style. It's more than fashion; it’s how you live.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollection;
