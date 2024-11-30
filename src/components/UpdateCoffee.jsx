import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const UpdateCoffee = () => {

    
  return (
    <div className="bg-coffee-add-bg bg-center bg-cover bg-no-repeat mb-10 lg:mb-20">
      <div className="px-5 lg:px-0 lg:w-4/5 mx-auto">
        <Link
          to="/"
          className="text-coffee text-lg lg:text-4xl font-semibold font-rancho flex gap-5 items-center py-5 lg:py-10"
        >
          <FaArrowLeft /> Back to Home
        </Link>
        <div className="p-5 sm:p-10 lg:p-20 bg-[#F4F3F0] text-center rounded">
          <h1 className="text-coffee text-4xl font-semibold font-rancho mb-5">
            Update Existing Coffee Details
          </h1>
          <p className="text-gray-500 lg:px-16 mb-8">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>

          <form>
            <div className="lg:flex justify-between items-center gap-3 lg:gap-10 mb-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg font-semibold">Chef</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee chef"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="lg:flex justify-between items-center gap-3 lg:gap-10 mb-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Supplier
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Taste
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee taste"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="lg:flex justify-between items-center gap-3 lg:gap-10 mb-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Category
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee category"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Details
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee details"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-semibold">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Enter photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <button type="submit" className="w-full py-3 mt-10 rounded-md font-rancho text-coffee font-semibold text-lg bg-[#D2B48C]">
              Update Coffee Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
