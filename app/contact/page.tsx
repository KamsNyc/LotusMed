"use client";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"


const About = () => {
  const [scriptLoaded, setScriptLoaded] = React.useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "true");
    script.defer = true;

    // Set scriptLoaded to true once the script is loaded
    script.onload = () => {
      setScriptLoaded(true);
    };

    // Append the script to the document body
    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-y-hidden">
      {/* Background GIF */}
      <Image
        className="w-full h-full opacity-[60%] z-0"
        src="/mumbai.jpg"
        fill={true}
        objectFit="fill"
        alt="replay intro video"
      />
      {/* NAVBAR */}
      <Navbar />

      <div className="px-10 tracking-wide pt-18 xl:mt-[15rem] ">
        <section className="w-full pt-24 md:pt-76 z-[2] md:flex items-center">
          <section className="block lg:flex items-center justify-center w-full border-gray-800 pt-4 z-10 relative">
            {/* LEFT SECTION */}
            <div className="w-full md:w-[350px] flex md:absolute left-5 top-28 flex-col items-center text-center z-10 ">
              {/* ITEM */}
              <div className="py-2 md:py-4 ">
                <h2 className="text-white font-[300] text-[21px]">
                  Contact Us
                </h2>
                <p className="text-[15px] pt-6">Lotus Med Innovation LLC</p>
              </div>
              {/* ITEM */}
              <div className="py-2 md:py-4  flex gap-1 justify-center">
                <h2 className="text-white text-[15px] font-[300] ">Address:</h2>
                <p className="text-[15px] flex flex-col text-center font-[300]">
                  369 S Doheny Dr., PH 132<span>Beverly Hills, CA 90211</span>
                  <span>U.S.A.</span>{" "}
                </p>
              </div>
              {/* ITEM */}
              <div className="py-2 md:py-1  flex gap-1 justify-center">
                <h2 className="text-white font-[300] text-[15px]">Email:</h2>
                <p className="text-[15px] text-[#fff] font-[300] underline">
                  info@lotusmedinnovation.com
                </p>
              </div>
            </div>
            {/* RIGHT SECTION with Placeholder */}
            <div className="w-full flex items-center justify-end">
              {!scriptLoaded ? (
                // Placeholder using Skeleton
                <Skeleton className="w-[498px] h-[515px] rounded-full bg-transparent" />
              ) : (
                // Render the elfsight app once the script is loaded
                <>
                  <script
                    src="https://static.elfsight.com/platform/platform.js"
                    data-use-service-core
                    defer
                  ></script>
                  <div className="elfsight-app-5ea2e3a0-1943-4f8d-a113-6b2876a71a66"></div>
                </>
              )}
            </div>
          </section>
        </section>
      </div>

      {/* COPYRIGHT */}
      <div className="absolute left-1/2 bottom-2 translate-x-[-50%]">
        <p className="text-[15px] text-[#fff] font-[400] text-center z-40">
          Copyright © 2024 Lotus Med Innovation LLC.<br/> All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default About;
