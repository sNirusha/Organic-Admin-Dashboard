// // // import React, { useState, useEffect } from 'react'
// // // import './List.css'
// // // import axios from 'axios'
// // // import {toast} from 'react-toastify'
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faTrash } from '@fortawesome/free-solid-svg-icons';

// // // const List = ({url}) => {

// // //   const [list,setList] = useState([]);

// // //   const fetchList = async () => {
// // //     const response = await axios.get(`${url}/item`);

// // //     console.log(response.data)
    
// // //     if (response.status === 200) {
// // //       setList(response.data)
// // //     }
// // //     else{
// // //       toast.error("Error")
// // //     }
// // //   }

// // //   const removeitem = async(itemId) => {
// // //     console.log(itemId)
// // //     const response = await axios.delete(`${url}/item/delete/${itemId}`);
// // //     await fetchList();

// // //       console.log(response)
    
// // //     if (response.status === 200) {
// // //       toast.success("Deleted")
// // //       setList(response.data)
      
// // //     }
// // //     else{
// // //       toast.error("Error")
// // //     }
// // //   }


// // //   useEffect(()=>{
// // //     fetchList();
// // //   },[])

// // //   return (
// // //     <div className='list add flex-col'>
// // //       <p>All Foods List</p>
// // //       <div className="list-table">
// // //         <div className="list-table-format list">
// // //           {/* <b>Image</b> */}
// // //           <b>Product Name</b>
// // //           <b>Product Description</b>
// // //           <b>Price</b>
// // //           <b>Action</b>
// // //         </div>
// // //         {list.map((item, index)=>{
// // //             return (
// // //               <div key={index} className="list-table-format">
// // //                   {/* <img src={`${url}/images/`+item.image} alt="" /> */}
// // //                   <p>{item.product_name}</p>
// // //                   <p>{item.product_description}</p>
// // //                   <p>${item.product_price}</p>
               
// // //                   <p onClick={()=>removeitem(item._id)} className=''>
// // //                   <FontAwesomeIcon icon={faTrash} style={{ color: "#f01414" }} />
// // //                   </p>
// // //               </div>
// // //             )
// // //         })}
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default List

// // import React, { useState, useEffect } from 'react'
// // import './List.css'
// // import axios from 'axios'
// // import { toast } from 'react-toastify'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faTrash, faPen} from '@fortawesome/free-solid-svg-icons';

// // const List = ({ url }) => {
// //   // Initialize list as an empty array
// //   const [list, setList] = useState([]);

// //   // Function to fetch the list of items
// //   const fetchList = async () => {
// //     try {
// //       const response = await axios.get(`${url}/item`);
// //       console.log(response.data);

// //       // Check if the response data is an array
// //       if (response.status === 200 && Array.isArray(response.data)) {
// //         setList(response.data);  // Set the data if it's an array
// //       } else {
// //         toast.error("Error: Data format is not an array");
// //       }
// //     } catch (error) {
// //       toast.error("Error fetching list");
// //       console.error("Fetch error:", error);
// //     }
// //   };

// //   // Function to remove an item
// //   const removeItem = async (itemId) => {
// //     console.log(itemId);
// //     try {
// //       const response = await axios.delete(`${url}/item/delete/${itemId}`);
      
// //       if (response.status === 200) {
// //         toast.success("Deleted successfully");
// //         fetchList();  // Fetch the updated list after deletion
// //       } else {
// //         toast.error("Error deleting item");
// //       }
// //     } catch (error) {
// //       toast.error("Error deleting item");
// //       console.error("Delete error:", error);
// //     }
// //   };

// //   // Fetch the list when the component mounts
// //   useEffect(() => {
// //     fetchList();
// //   }, []);

// //   // Function to update an item
// // const updateItem = async (itemId, updatedData) => {
// //   console.log("Updating item with ID:", itemId);
// //   try {
// //     // Send a PUT request to update the item
// //     const response = await axios.put(`${url}/item/update/${itemId}`, updatedData);
    
// //     if (response.status === 200) {
// //       toast.success("Updated successfully");
// //       fetchList();  // Fetch the updated list after the update
// //     } else {
// //       toast.error("Error updating item");
// //     }
// //   } catch (error) {
// //     toast.error("Error updating item");
// //     console.error("Update error:", error);
// //   }
// // };

// // // Fetch the list when the component mounts
// // useEffect(() => {
// //   fetchList();
// // }, []);




// //   return (
// //     <div className='list add flex-col'>
// //       <p>All Foods List</p>
// //       <div className="list-table">
// //         <div className="list-table-format list">
// //           {/* <b>Image</b> */}
// //           <b>Product Name</b>
// //           <b>Product Description</b>
// //           <b>Price</b>
// //           <b>Action</b>
// //           <b>Action</b>
// //         </div>
// //         {/* Check if list is an array before mapping */}
// //         {Array.isArray(list) && list.length > 0 ? (
// //           list.map((item, index) => (
// //             <div key={index} className="list-table-format">
// //               {/* <img src={`${url}/images/` + item.image} alt="" /> */}
// //               <p>{item.product_name}</p>
// //               <p>{item.product_description}</p>
// //               <p>${item.product_price}</p>
// //               <p onClick={() => removeItem(item._id)} className=''>
// //                 <FontAwesomeIcon icon={faTrash} style={{ color: "#f01414" }} />
// //               </p>
// //               <p onClick={()=> updateItem(item._id)} className=''>
// //               <FontAwesomeIcon icon={faPen} style={{ color: "#48e704" }} /> 

// //               </p>

// //             </div>
            
// //           ))
// //         ) : (
// //           <p>No items available</p>  // Fallback if list is empty or not an array
// //         )}
// //       </div>
// //     </div>
    
// //   );
// // };

// // export default List;
// import React, { useState, useEffect } from 'react';
// import './List.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

// const List = ({ url }) => {
//   const [list, setList] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
//   const [currentItem, setCurrentItem] = useState(null); // Store the item being edited
//   const [formData, setFormData] = useState({
//     product_name: "",
//     product_description: "",
//     product_price: ""
//   });

//   const fetchList = async () => {
//     const response = await axios.get(`${url}/item`);
//     if (response.status === 200) {
//       setList(response.data);
//     } else {
//       toast.error("Error fetching list");
//     }
//   };

//   const removeItem = async (itemId) => {
//     try {
//       const response = await axios.delete(`${url}/item/delete/${itemId}`);
//       if (response.status === 200) {
//         toast.success("Deleted successfully");
//         fetchList();
//       } else {
//         toast.error("Error deleting item");
//       }
//     } catch (error) {
//       toast.error("Error deleting item");
//     }
//   };

//   const updateItem = (item) => {
//     setCurrentItem(item); // Set the item being updated
//     setFormData({
//       product_name: item.product_name,
//       product_description: item.product_description,
//       product_price: item.product_price
//     });
//     setIsModalOpen(true); // Open the modal
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleUpdate = async () => {
//     try {
//       const response = await axios.put(`${url}/item/update/${currentItem._id}`, formData);
//       if (response.status === 200) {
//         toast.success("Updated successfully");
//         setIsModalOpen(false); // Close the modal
//         fetchList(); // Fetch updated list
//       } else {
//         toast.error("Error updating item");
//       }
//     } catch (error) {
//       toast.error("Error updating item");
//     }
//   };

//   useEffect(() => {
//     fetchList();
//   }, []);

//   return (
//     <div className="list add flex-col">
//       <p>All Foods List</p>
//       <div className="list-table">
//         <div className="list-table-format list">
//           <b>image</b>
//           <b>Product Name</b>
//           <b>Product Description</b>
//           <b>Price</b>
//           <b>Delete</b>
//           <b>Update</b>
//         </div>
//         {list.map((item, index) => {
//           return (
//             <div key={index} className="list-table-format">
//               <p>image</p>
//               <p>{item.product_name}</p>
//               <p>{item.product_description}</p>
//               <p>${item.product_price}</p>
//               <p onClick={() => removeItem(item._id)}>
//                 <FontAwesomeIcon icon={faTrash} style={{ color: "#f01414" }} />
//               </p>
//               <p onClick={() => updateItem(item)}> {/* Show modal when clicked */}
//                 <FontAwesomeIcon icon={faPen} style={{ color: "#48e704" }} />
//               </p>
//             </div>
//           );
//         })}
//       </div>

//       {/* Modal for updating item */}
//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Edit Item</h2>
//             <form>
//               <label>Product Name</label>
//               <input
//                 type="text"
//                 name="product_name"
//                 value={formData.product_name}
//                 onChange={handleInputChange}
//               />
//               <label>Product Description</label>
//               <input
//                 type="text"
//                 name="product_description"
//                 value={formData.product_description}
//                 onChange={handleInputChange}
//               />
//               <label>Product Price</label>
//               <input
//                 type="number"
//                 name="product_price"
//                 value={formData.product_price}
//                 onChange={handleInputChange}
//               />
//               <button type="button" onClick={handleUpdate}>
//                 Update
//               </button>
//               <button type="button" onClick={() => setIsModalOpen(false)}>
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default List;
import React, { useState, useEffect } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [currentItem, setCurrentItem] = useState(null); // Store the item being edited
  const [formData, setFormData] = useState({
    product_name: "",
    product_description: "",
    product_price: "",
    product_image: null, // Add image to formData
  });

  const fetchList = async () => {
    const response = await axios.get(`${url}/item`);
    if (response.status === 200) {
      setList(response.data);
    } else {
      toast.error("Error fetching list");
    }
  };

  const removeItem = async (itemId) => {
    try {
      const response = await axios.delete(`${url}/item/delete/${itemId}`);
      if (response.status === 200) {
        toast.success("Deleted successfully");
        fetchList();
      } else {
        toast.error("Error deleting item");
      }
    } catch (error) {
      toast.error("Error deleting item");
    }
  };

  const updateItem = (item) => {
    setCurrentItem(item); // Set the item being updated
    setFormData({
      product_name: item.product_name,
      product_description: item.product_description,
      product_price: item.product_price,
      product_image: null, // Reset the image for new upload
    });
    setIsModalOpen(true); // Open the modal
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      product_image: e.target.files[0], // Add selected image to formData
    });
  };

  const handleUpdate = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("product_name", formData.product_name);
    formDataToSend.append("product_description", formData.product_description);
    formDataToSend.append("product_price", formData.product_price);
    if (formData.product_image) {
      formDataToSend.append("product_image", formData.product_image); // Append the image if it's selected
    }

    try {
      const response = await axios.put(`${url}/item/update/${currentItem._id}`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        toast.success("Updated successfully");
        setIsModalOpen(false); // Close the modal
        fetchList(); // Fetch updated list
      } else {
        toast.error("Error updating item");
      }
    } catch (error) {
      toast.error("Error updating item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format list">
          <b>Image</b>
          <b>Product Name</b>
          <b>Product Description</b>
          <b>Price</b>
          <b>Delete</b>
          <b>Update</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <p>Image Placeholder</p> {/* Replace with actual image if available */}
              <p>{item.product_name}</p>
              <p>{item.product_description}</p>
              <p>${item.product_price}</p>
              <p onClick={() => removeItem(item._id)}>
                <FontAwesomeIcon icon={faTrash} style={{ color: "#f01414" }} />
              </p>
              <p onClick={() => updateItem(item)}>
                <FontAwesomeIcon icon={faPen} style={{ color: "#48e704" }} />
              </p>
            </div>
          );
        })}
      </div>

      {/* Modal for updating item */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Item</h2>
            <form>
              {/* Image Upload */}
              <label>Upload Image</label>
              <input type="file" name="product_image" accept="image/*" onChange={handleImageChange} />
              
              <label>Product Name</label>
              <input
                type="text"
                name="product_name"
                value={formData.product_name}
                onChange={handleInputChange}
              />
              <label>Product Description</label>
              <input
                type="text"
                name="product_description"
                value={formData.product_description}
                onChange={handleInputChange}
              />
              <label>Product Price</label>
              <input
                type="number"
                name="product_price"
                value={formData.product_price}
                onChange={handleInputChange}
              />
              <button type="button" onClick={handleUpdate}>
                Update
              </button>
              <button type="button" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
