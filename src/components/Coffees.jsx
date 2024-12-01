import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffees = ({ loadedCoffees }) => {
  const [coffees, setCoffees] = useState(loadedCoffees)

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
          fetch(`http://localhost:5000/coffees/${id}`, {
              method: 'DELETE'
        })
          .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your coffee has been deleted.",
                    icon: "success",
                });
                  const remaing = coffees.filter(cof => cof._id !== id);
                  setCoffees(remaing)
              }
          });
      }
    });
  };

  return (
    <div className="px-5 lg:px-0 lg:w-4/5 mx-auto grid md:grid-cols-2 gap-5">
      {coffees.map((coffee) => (
        <div
          key={coffee._id}
          className="bg-[#F5F4F1] p-5 rounded-lg flex gap-2 lg:gap-5 items-center justify-between"
        >
          <div className="flex items-center gap-5">
            <div className="w-28 lg:w-48">
              <img src={coffee.photoURL} alt="coffee" />
            </div>
            <div className="space-y-3 xl:text-lg">
              <p>
                <span className="font-semibold">Name: </span>
                {coffee.name}
              </p>
              <p>
                <span className="font-semibold">Chef: </span>
                {coffee.chef}
              </p>
              <p>
                <span className="font-semibold">Price: </span>
                {coffee.price} $
              </p>
            </div>
          </div>
          <div className="space-y-1 lg:space-y-3 lg:pr-5 text-lg lg:text-3xl">
            <h1 className="bg-[#D2B48C] text-white p-2 rounded-md cursor-pointer">
              <IoMdEye />
            </h1>
            <Link to={`updateCoffee/${coffee._id}`} className="block">
            {/* / */}
            <h1 className="bg-[#3C393B] text-white p-2 rounded-md cursor-pointer">
              <MdEdit />
            </h1>
            </Link>
            <h1
              onClick={() => handleDelete(coffee._id)}
              className="bg-[#EA4744] text-white p-2 rounded-md cursor-pointer"
            >
              <MdDelete />
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Coffees;
