"use client"

import Navbar from "../homepage components/navbar";
import Additional from "./additional";
import Keystone from "./keystone";
import '../../app/globals.css';

const ResourceSection = () => {

    return (
      <section className="bg-gray-100 dark:bg-gray-800 ">
      <Navbar />
      <div className="container px-10 mx-auto text-center">
          <h2 className="text-2xl font-semibold p-2 text-center dark:text-gray-200">
            Resources - Dive Deeper into the Decentralized Learning Revolution
          </h2>
          <p className="text-md text-center text-wrap dark:text-gray-200">
            Welcome to the ABYA University Resource Center, your one-stop shop for in-depth information,
            technical details, and future plans surrounding our innovative platform.
            Whether you're a curious learner, a potential contributor, or a passionate supporter,
            we have the resources to answer your questions and fuel your understanding.
          </p>
        </div>

      <Keystone />
      <Additional />
    </section>
    );
};

export default ResourceSection;