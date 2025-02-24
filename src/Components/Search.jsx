import React, { useState } from 'react'
import Layout from './Layout/Layout'

const Search = () => {
  const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
    { id: 4, name: "Date" },
    { id: 5, name: "Elderberry" },
    { id: 6, name: "Fig" },
    { id: 7, name: "Grape" },
  ];

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered items based on the search query
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <>
    <Layout>
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Search Filter</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      {/* Display Filtered Items */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li
              key={item.id}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                marginBottom: "5px",
                borderRadius: "5px",
              }}
            >
              {item.name}
            </li>
          ))
        ) : (
          <p>No items found</p>
        )}
      </ul>
    </div>
    </Layout>
    </>
  )
}

export default Search



// 2. 𝗗𝗲𝘀𝗶𝗴𝗻 𝗮 𝗦𝗲𝗮𝗿𝗰𝗵 𝗙𝗶𝗹𝘁𝗲𝗿:
// Build a search filter for a list of items, such as a list of products or contacts. 
// The filter should update the displayed items based on the search input in real-time.