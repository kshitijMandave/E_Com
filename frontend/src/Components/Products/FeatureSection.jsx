import { HiShoppingBag } from "react-icons/hi";
import { HiArrowPathRoundedSquare, HiOutlineCreditCard } from "react-icons/hi2";

function FeatureSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4 bg-gray-100">
            <HiShoppingBag className="text-2xl text-green-700" />
          </div>
          <h4 className="font-semibold text-lg mb-2">Global Shipping, On Us</h4>
          <p className="text-gray-600 text-sm tracking-tight">
            Enjoy free worldwide delivery on orders above ₹1000.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4 bg-gray-100">
            <HiArrowPathRoundedSquare className="text-2xl text-green-700" />
          </div>
          <h4 className="font-semibold text-lg mb-2">45-Day Easy Returns</h4>
          <p className="text-gray-600 text-sm tracking-tight">
            Changed your mind? We’ve got your back — hassle-free returns
            guaranteed.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4 bg-gray-100">
            <HiOutlineCreditCard className="text-2xl text-green-700" />
          </div>
          <h4 className="font-semibold text-lg mb-2">
            Trusted & Secure Payments
          </h4>
          <p className="text-gray-600 text-sm tracking-tight">
            Multiple payment options with bank-level encryption and safety.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
