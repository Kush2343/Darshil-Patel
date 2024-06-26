import React, { useState } from "react";
import img from "../../Images/bgres.jpg";
import Modal from "react-modal";
import ProjectData from "../../Data/data";
import { MdClose } from "react-icons/md";

function Project() {
  const [isOpen, setIsOpen] = useState();
  const [ProjectsDetails, SetProjectDetails] = useState(null);

  const openModal = (details) => {
    SetProjectDetails(details);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    SetProjectDetails(false);
  };

  return (
    <>
      <section className="md:px-20 sm:px-5 sm:pb-20" data-aos="fade">
        <div className="bg-[--bg-color] lg:rounded-xl w-full md:rounded-none lg:px-10 px-3 sm:px-3 md:px-4 pb-10">
          <h2 className="text-[--main-color] text-center md:text-left py-5 text-2xl  lg:text-4xl after-effect after:left-40">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3">
            {ProjectData.map((project) => (
              <div
                key={project.id}
                className="p-4 bg-[--component-color] rounded-2xl"
                onClick={() => openModal(project)}
              >
                <div className="lg:h-[250px] md:h-45 h-35 sm:h-40">
                  <img
                    src={project.img}
                    className="h-[100%] w-[100%] rounded-t-xl object-fill object-center"
                    alt={project.name}
                  />
                </div>
                <div className="bg-[--bg-color] text-center p-2 rounded-b-xl">
                  <h3 className="text-[--main-color]">{project.name}</h3>
                  <p>{project.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          className="outline-none flex items-center rounded-2xl"
        >
          <div className="w-[300px] md:w-80 flex items-center   lg:w-[550px] bg-[--bg-color] rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] shadow-lg my-10">
            <button
              onClick={closeModal}
              className=" text-2xl text-[--main-color] focus:outline-none text-right absolute top-4 right-4 cursor-pointer"
            >
              <MdClose />
            </button>
            {ProjectsDetails && (
    Array.isArray(ProjectsDetails.description) ? (
        <div>
            <h2 className="text-[--main-color]">{ProjectsDetails.name}</h2>
            <a href={ProjectsDetails.website} target="_blank" className="text-[12px]">{ProjectsDetails.website}</a>
            <p>{ProjectsDetails.detail}</p>
            <img src={ProjectsDetails.image} alt={ProjectsDetails.name} />
            {ProjectsDetails.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    ) : (
        <div>
            <h2 className="text-[--main-color]">{ProjectsDetails.name}</h2>
            <a href={ProjectsDetails.website} target="_blank" className="text-[12px]">{ProjectsDetails.website}</a>
            <p className="text-[12px]">{ProjectsDetails.detail}</p>
            <div className="lg:h-[320px] md:h-72 sm:h-40 h-[200px] md:p-[30px] p-3">
            <img src={ProjectsDetails.img} alt={ProjectsDetails.name} className="h-[100%] border border-[--main-color] w-[100%] object-cover object-center object-fill" />
            </div>
            <p className="text-[12px]">{ProjectsDetails.description}</p>
        </div>
    )
)}
          </div>
        </Modal>
      </section>
    </>
  );
}
export default Project;
