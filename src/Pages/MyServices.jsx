import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UpdateServiceModal from "./UpdateServiceModal";
import Loading from "../Components/Loading";

const MyServices = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceToUpdate, setServiceToUpdate] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(
        `https://service-compass-server.vercel.app/services?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setServices(data));
    }
  }, [user]);

  const handleDelete = (serviceId, serviceOwnerEmail) => {
    if (serviceOwnerEmail !== user.email) {
      Swal.fire(
        "Unauthorized!",
        "You can only delete your own services.",
        "error"
      );
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://service-compass-server.vercel.app/services/${serviceId}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then(() => {
            setServices(
              services.filter((service) => service._id !== serviceId)
            );
            Swal.fire("Deleted!", "Your service has been deleted.", "success");
          })
          .catch(() =>
            Swal.fire("Error!", "Failed to delete service.", "error")
          );
      }
    });
  };

  const handleUpdate = (service) => {
    if (service.email !== user.email) {
      Swal.fire(
        "Unauthorized!",
        "You can only update your own services.",
        "error"
      );
      return;
    }

    setServiceToUpdate(service);
    setIsModalOpen(true);
  };

  const handleSaveUpdatedService = (updatedService) => {
    if (updatedService.email !== user.email) {
      Swal.fire(
        "Unauthorized!",
        "You can only update your own services.",
        "error"
      );
      return;
    }

    fetch(
      `https://service-compass-server.vercel.app/services/${updatedService._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedService),
      }
    )
      .then((res) => res.json())
      .then(() => {
        setServices(
          services.map((service) =>
            service._id === updatedService._id ? updatedService : service
          )
        );
        Swal.fire("Updated!", "Your service has been updated.", "success");
        setIsModalOpen(false);
      })
      .catch(() => Swal.fire("Error!", "Failed to update service.", "error"));
  };

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full mx-auto p-6 bg-[#adc5dd]">
      <h2 className="text-2xl md:text-5xl font-bold text-center mb-6 uppercase text-base-300">
        My Services
      </h2>

      <input
        type="text"
        placeholder="Search services"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-6 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-base-300 glass outline outline-black outline-[1px] text-base-300 placeholder-base-300"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-[#c4daf0] text-base-300 rounded-lg shadow-2xl">
          <thead>
            <tr className="bg-[#b3d1ea] text-left">
              <th className="p-4">Image</th>
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-6">
                  <div className="flex items-center justify-center">
                    <Loading />
                  </div>
                </td>
              </tr>
            ) : (
              filteredServices.map((service) => (
                <tr
                  key={service._id}
                  className="border-t border-blue-200 hover:bg-[#d7e8f8] transition-colors"
                >
                  <td className="p-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </td>
                  <td className="p-4">{service.title}</td>
                  <td className="p-4">{service.category}</td>
                  <td className="p-4">${service.price}</td>
                  <td className="p-4 flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => handleUpdate(service)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(service._id, service.email)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <UpdateServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={serviceToUpdate}
        onSave={handleSaveUpdatedService}
      />
    </div>
  );
};

export default MyServices;
