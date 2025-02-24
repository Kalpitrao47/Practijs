import React, { useEffect, useState } from 'react'
import Layout from './Layout/Layout'


const PaginationSelf = () => {
  const [data, setData] = useState([]);
  console.log("data", data)
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500")
    const json = await data.json();
    setData(json.products);
  }
  useEffect(() => {
    fetchData();
  }, [])

  const PAGE_SIZE = 10;
  const Total_Pages = Math.ceil(data.length / PAGE_SIZE);
  console.log("Total", Total_Pages)

  const numbers = [...Array(Total_Pages)].map((_, index) => index);
  console.log("🚀 ~ PaginationSelf ~ numbers:", numbers)

  const [currentPage, setCurrentPage] = useState(0);
  const start = currentPage * PAGE_SIZE
  console.log("🚀 ~ PaginationSelf ~ start:", start)
  const end = start + PAGE_SIZE
  console.log("🚀 ~ PaginationSelf ~ end:", end)


  const handlePagination = (n) => {
    console.log("Page Number", n)
    setCurrentPage(n);
  }

  const handlePrevious = () => {
    // setCurrentPage(currentPage - 1)
    setCurrentPage((prev) => prev + 1);
  }

  const handleNext = () => {
    // setCurrentPage(currentPage + 1)
    setCurrentPage((prev) => prev + 1);
  }

  return (
    <>
      <Layout>
        <div className='flex flex-col'>
          <div className='flex'>
            {data.slice(start, end).map((d) => {
              return (
                <>
                  <div key={d.index} className='flex'>
                    <div className='border-black h-32 w-32 flex flex-col text-center'>
                      <div>
                        <img src={d.images} alt="Image" />
                      </div>
                      <div>
                        <h1>{d.brand}</h1>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>

          <div className='mt-10 mb-10'>
            <button disabled={currentPage === 0} className='border border-black p-2 mr-2' onClick={handlePrevious}>Previous</button>
            {numbers.map((n) => {
              return (
                <span className='border border-black p-2 cursor-pointer' onClick={() => handlePagination(n)}>{n + 1}</span>
              )
            })}
            <button disabled={currentPage === Total_Pages - 1} className='border border-black p-2 ml-2' onClick={handleNext}>Next</button>
          </div>

        </div>
      </Layout>
    </>
  )
}

export default PaginationSelf


// Step1:Map the data
// Step2:Slice the data
// Step3:Create a Variable PAGE_SIZE
// Step4:Create Total_Pages
// Step4:Create an Array of Total_Pages:
// Breakdown:
// Array(20):

// Ye Array(20) ek array banata hai, jisme 20 "empty" slots hote hain. Matlab, 20 elements hain, lekin unme koi specific value nahi hai abhi.
// [...] (Spread Operator):

// Ye spread operator ka use ho raha hai, jo us "empty" array ko ek naya array mein convert kar deta hai. Matlab jo "empty slots" the unko ek actual array mein badal diya gaya hai.
// To isse ek array ban jayega jisme 20 undefined values hain.
// .map((_, index) => index + 1):

// map() function use ho raha hai array ke har element pe kaam karne ke liye.
// Pehla parameter (_) ko hum use nahi kar rahe, kyunki hume sirf index ki zarurat hai. _ aise placeholders hain jab hum kisi value ko use nahi karte.
// index + 1 ka matlab hai: har element ke index ko 1 se badha dena. Matlab, agar index 0 hai toh result 1 ho jayega, agar index 1 hai toh result 2 ho jayega, aur aise hi 20 tak.

// Step 5: Create a handlePagination function and pass n
// Step 6: Create a State for Current Page
// Step 7: Create a variable
// start = currentPage * PAGE_SIZE
// Step 8: Create a variable
// end = start+PAGE_SIZE

// Step9: Pass start,end inside mapped data.
// Step10: Inside handlePagination function setCurrentPage(n)