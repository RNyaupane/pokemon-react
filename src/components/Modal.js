// import { Fragment } from 'react';
// import { Dialog, Transition } from '@headlessui/react';

// import config_values from '../utilities/config';

// function Modal(props){
//     return(
//         <>
//             <Transition appear show = {props.isOpen} as={Fragment}>
//                 <Dialog
//                     as = "div"
//                     className = "fixed inset-0 z-10 overflow-y-auto drop-shadow-lg"
//                     onClose = {props.closeModal}
//                 >
//                     <div className="min-h-screen px-4 text-center">
//                         <Transition.Child
//                             as={Fragment}
//                             enter="ease-out duration-300"
//                             enterFrom="opacity-0"
//                             enterTo="opacity-100"
//                             leave="ease-in duration-200"
//                             leaveFrom="opacity-100"
//                             leaveTo="opacity-0"
//                         >
//                             <Dialog.Overlay className="fixed inset-0" />
//                         </Transition.Child>

//                         {/* This element is to trick the browser into centering the modal contents. */}
//                         <span
//                             className="inline-block h-screen align-middle"
//                             aria-hidden="true"
//                         >
//                             &#8203;
//                         </span>

//                         <Transition.Child
//                             as={Fragment}
//                             enter="ease-out duration-300"
//                             enterFrom="opacity-0 scale-95"
//                             enterTo="opacity-100 scale-100"
//                             leave="ease-in duration-200"
//                             leaveFrom="opacity-100 scale-100"
//                             leaveTo="opacity-0 scale-95"
//                         >
//                             <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">

//                                 {/* modal title according to pokemon */}
//                                 <Dialog.Title
//                                     as="h3"
//                                     className="text-lg font-medium leading-6 text-gray-900"
//                                 >
//                                     {props.data.name.toUpperCase()}
//                                 </Dialog.Title>

//                                 {/* modal svg illustration */}
//                                 <div className="mt-4 flex flex-col items-center justify-center">
//                                     <div className = 'modal-img'>
//                                         <img height = "200px" width = "200px" src = { props.data.image_url.svg_url } alt = { props.data.name } />
//                                     </div>
//                                 </div>

//                                 {/* modal description */}
//                                 <div className = "mt-4 grid grid-cols-2  p-2">
//                                     <div className = "flex flex-col mt-1">
//                                         <div className = 'font-medium'>Base Experience</div>
//                                         <div className=''>{ props.data.base_exp }</div>
//                                     </div>
//                                     <div className = "flex flex-col mt-1">
//                                         <div className = 'font-medium'>Height</div>
//                                         <div className=''>{ props.data.height + " dm"}</div>
//                                     </div>
//                                     <div className = "flex flex-col mt-1">
//                                         <div className = 'font-medium'>Weight</div>
//                                         <div className=''>{ props.data.weight + " hg"}</div>
//                                     </div>
//                                 </div>

//                                 <div className='mt-3 p-2'>
//                                     <div className = "font-medium mb-2">
//                                         Type
//                                     </div>

//                                     <div className = 'flex'>
//                                         {
//                                             props.data.types.map(type => {
//                                                return <div
//                                                     className = { "mr-2 py-1 px-4 rounded-2xl flex items-center bg-gray-500 text-white " + config_values.TYPE_COLORS[type] }
//                                                     key = { type + " " + props.data.id }
//                                                 >
//                                                     { type.toUpperCase() }
//                                                 </div>
//                                             })
//                                         }
//                                     </div>
//                                 </div>

//                                 {/* close button for modal */}
//                                 <div className="mt-4 p-2 flex justify-end items-end">
//                                     <button
//                                         type="button"
//                                         className=" inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none "
//                                         onClick={props.closeModal}
//                                     >
//                                         Close
//                                     </button>
//                                 </div>
//                             </div>
//                         </Transition.Child>
//                     </div>
//                 </Dialog>
//             </Transition>
//         </>
//     );
// }

// export default Modal;
import React from 'react'

const Modal = () => {
  return (
    <div>Modal</div>
  )
}

export default Modal