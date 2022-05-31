import React, { useState } from "react";
import { useAppSelector } from "../redux/hooks";


export default function BreadcrumbAndSearch() {
  const { isMobile } = useAppSelector(
    (state) => state.mobileStatus as { isMobile: boolean }
  );

  return (
    <div className="flex flex-row my-16 mx-2 justify-between md:mx-36">
      {isMobile ? (
        <>
          <div className="flex flex-row ">
            <h4 className="text-gray-500 px-4">Categories</h4>
            <h4 className="text-gray-500 px-4">Filter</h4>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row ">
          <h4 className="text-gray-500 px-4">All</h4>
          <h4 className="text-gray-500 ">/</h4>
          <h4 className="text-gray-500 px-4">Bags & Backpacks</h4>
          <h4 className="text-gray-500 ">/</h4>
          <h4 className="text-gray-500 px-4">Decoration</h4>
          <h4 className="text-gray-500 ">/</h4>
          <h4 className="text-gray-500 px-4">Essentials</h4>
          <h4 className="text-gray-500 ">/</h4>
          <h4 className="text-gray-500 px-4">Interior</h4>
          </div>
          <div>
          <div className="flex flex-row ">
            <h4 className="text-gray-500 px-4">Filter</h4>
            <h4 className="text-gray-500 px-4">Search</h4>
         
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
