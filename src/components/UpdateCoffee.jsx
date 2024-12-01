import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { name, chef, supplier, price, category, details, photoURL } = coffee;
  
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const price = form.price.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      price,
      category,
      details,
      photoURL,
      };
      
      fetch(`http://localhost:5000/coffees/${coffee._id}`, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(updatedCoffee)
      })
          .then(res => res.json())
          .then(data => {
            if (data.modifiedCount>0) {
              Swal.fire({
                title: 'Updated!',
                text: 'Coffee updated Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
            }
      })

  };
    
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
            Update Coffee Details - {name}
          </h1>
          <p className="text-gray-500 lg:px-16 mb-8">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>

          <form onSubmit={handleUpdateCoffee}>
            <div className="lg:flex justify-between items-center gap-3 lg:gap-10 mb-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
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
                  name="chef"
                  defaultValue={chef}
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
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Enter coffee supplier"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Price
                  </span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter coffee price"
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
                  name="category"
                  defaultValue={category}
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
                  name="details"
                  defaultValue={details}
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
                name="photoURL"
                defaultValue={photoURL}
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
