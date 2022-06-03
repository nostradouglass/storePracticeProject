import { useState } from "react";
import { useActions } from "../redux/hooks";
import { useAppSelector } from "../redux/hooks";

export let SearchBar = ({ searchOpen, closeSearch }: any) => {
  const { setSearchTerm } = useActions();

  const { searchTerm } = useAppSelector(
    (state) => state.searchTerm as { searchTerm: string }
  );

  if (!searchOpen) {
    return <div></div>;
  } else {
    return (
      <div className="flex flex-row justify-between  md:pt-8">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            value={searchTerm}
            onChange={({ target }) => setSearchTerm(target.value)}
            className="md:h-12 text-2xl border-0 outline-none"
            placeholder="Search products"
          />
          {searchTerm.length > 0 ? (
            <h5 className="text-gray-500">Press Enter to search</h5>
          ) : (
            <></>
          )}
        </form>
        <button
          onClick={() => {
            closeSearch();
            setSearchTerm("");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    );
  }
};
