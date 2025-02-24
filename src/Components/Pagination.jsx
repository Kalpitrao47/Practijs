import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Items per page

  const FetchJsonApi = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      if (!res.ok) throw new Error("Network response was not Ok");
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchJsonApi();
  }, []);

  // Calculate the indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data for the current page
  const currentData = data.slice(startIndex, endIndex);
  console.log("currentData",currentData)

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <Layout>
        <div>
          <h1>Pagination</h1>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading &&
            !error &&
            currentData.map((d) => (
              <div key={d.id}>
                <h2>Name: {d.name}</h2>
                <h3>Email: {d.email}</h3>
                <p>Comment: {d.body}</p>
              </div>
            ))}

          {/* Pagination Controls */}
          {!loading && !error && (
            <div className="text-center" style={{ marginTop: "20px" }}>
              <button
              className=" bg-blue-200 border border-blue-300 p-2 rounded-lg"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                style={{ marginRight: "10px" }}
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
              className=" bg-blue-200 border border-blue-300 p-2 rounded-lg"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                style={{ marginLeft: "10px" }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Pagination;




// 1. 𝗜𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 𝗮 𝗣𝗮𝗴𝗶𝗻𝗮𝘁𝗶𝗼𝗻 𝗖𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁:
// Create a pagination component for a list of items fetched from an API.
// Handle scenarios where the user navigates between pages, and ensure the data is displayed correctly.



// The try...catch...finally statements combo handles errors without stopping JavaScript.
// The try statement defines the code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error.
// Both catch and finally are optional, but you must use one of them.


// SYNTAX
// try {
//   tryCode - Code block to run
// }
// catch(err) {
//   catchCode - Code block to handle errors
// }
// finally {
//   finallyCode - Code block to be executed regardless of the try result
// }





// STEPS FOR NAVIGATION
// 1. State Management
// I introduced the following states to manage pagination and data flow:

// currentPage: Tracks the current page number, initialized to 1.
// itemsPerPage: Sets how many items should appear on each page (20 in this case).

// 2. Fetching Data
// The function FetchJsonApi fetches all the data (from a fake API: https://jsonplaceholder.typicode.com/comments). Once fetched:

// The data is stored in the data state.
// The loading and error states manage the fetch's success or failure.

// 3. Calculating Pagination
// To display only the items for the current page:

// ------------------->Start and End Indices:

// const startIndex = (currentPage - 1) * itemsPerPage;
// const endIndex = startIndex + itemsPerPage;


// startIndex: The index in the data array where the current page's items begin.
// endIndex: The index in the data array where the current page's items end.

// ------------------->Slice the Data:
// const currentData = data.slice(startIndex, endIndex);

// slice extracts only the items between startIndex and endIndex.


// ------------------->Total Pages:
// const totalPages = Math.ceil(data.length / itemsPerPage);
// This divides the total items (data.length) by itemsPerPage and rounds up to ensure every item has a page.



// 4. Pagination Navigation
// Two buttons allow navigation between pages:

// Previous Button:
// const handlePrevPage = () => {
//   if (currentPage > 1) {
//     setCurrentPage((prev) => prev - 1);
//   }
// };

// Decreases currentPage by 1, but only if currentPage > 1 (prevents going below page 1).


// Next Button:
// const handleNextPage = () => {
//   if (currentPage < totalPages) {
//     setCurrentPage((prev) => prev + 1);
//   }
// };

// Increases currentPage by 1, but only if currentPage < totalPages.


// 5. Displaying Data
// Only the sliced currentData is rendered:

// {!loading && !error &&
//   currentData.map((d) => (
//     <div key={d.id}>
//       <h2>Name: {d.name}</h2>
//       <h3>Email: {d.email}</h3>
//       <p>Comment: {d.body}</p>
//     </div>
//   ))
// }




// Summary
// Fetched all data at once.
// Split the data into chunks of 20 items per page using slice.
// Dynamically updated the displayed data based on currentPage.
// Added navigation buttons to switch between pages, disabling them at the boundaries.
// Handled loading and error states for smooth user experience.

