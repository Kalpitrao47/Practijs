import React, { useState } from 'react'
import Layout from './Layout/Layout'
import ModalView from './ModalView';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Layout>
        <div>
          <button className='border border-blue-300 p-2 rounded-lg' onClick={openModal}>
            Modal
          </button>
          {isModalOpen && (
            <ModalView onClose={closeModal}>
              <h2 className="text-xl font-semibold mb-4">
                Welcome to the Modal!
              </h2> 
              <p className="text-gray-700 mb-6">
                This is a reusable modal component styled with Tailwind CSS.
              </p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={closeModal}
              >
                Close Modal
              </button>
            </ModalView>
          )}
        </div>
      </Layout>
    </>
  )
}

export default Modal




// 4. 𝗖𝗿𝗲𝗮𝘁𝗲 𝗮 𝗠𝗼𝗱𝗮𝗹 𝗖𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁:
// Develop a reusable modal component that can be triggered by various buttons or links. The modal should handle different content types and have a close button to dismiss it.