import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-footerbg w-full bg-no-repeat bg-cover bg-center py-10 lg:py-16 lg:pt-28">
      <div className="px-5 lg:px-0 lg:w-4/5 mx-auto grid sm:grid-cols-2 gap-5 sm:gap-16">
        <div className="space-y-5">
          <img
            src={"https://i.ibb.co.com/k2dx74d/logo1.png"}
            alt="logo"
            className="h-28"
          />
          <h1 className="text-coffee text-4xl font-semibold font-rancho ">
            Espresso Emporium
          </h1>
          <p className="text-gray-600">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-2">
            <img
              src={"https://i.ibb.co.com/ryrqpxq/facebook-box.png"}
              alt="facebook icon"
            />
            <img
              src={"https://i.ibb.co.com/3CjPfMJ/instagram.png"}
              alt="instagram icon"
            />
            <img
              src={"https://i.ibb.co.com/PTGgpZK/twitter.png"}
              alt="twitter icon"
            />
            <img
              src={"https://i.ibb.co.com/VC0pHnz/linkedin.png"}
              alt="linkedin icon"
            />
          </div>
          <h2 className="text-coffee text-4xl font-semibold font-rancho ">
            Get in Touch
          </h2>
          <p className="flex items-center gap-5">
            <FaPhoneAlt /> +88 01533 333 333
          </p>
          <p className="flex items-center gap-5">
            <MdEmail />
            espresso-emporium@gmail.com{" "}
          </p>
          <p className="flex items-center gap-5">
            {" "}
            <MdLocationOn /> 117 Access Road, Agrabad, Chittagong
          </p>
        </div>

        <div className="space-y-5">
          <h1 className="text-coffee text-4xl font-semibold font-rancho ">
            Connect with Us
          </h1>
          <input type="text" name="name" placeholder="Name" className="w-full p-5 rounded-md"/>
          <input type="email" name="email" placeholder="Email" className="w-full p-5 rounded-md"/>
                  <textarea name="message" placeholder="Message" rows={5} className="w-full p-5 rounded-md"></textarea>
                  <button className="border px-8 py-2 rounded-full font-rancho text-coffee border-black">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
