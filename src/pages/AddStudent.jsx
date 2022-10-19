import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../config/firebaseConfig";

export default function AddStudent() {
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // tangkap value
    let full_name = e.target.full_name.value;
    let nis = e.target.nis.value;
    let address = e.target.address.value;

    // clear value
    e.target.full_name.value = "";
    e.target.nis.value = "";
    e.target.address.value = "";

    console.log({ full_name, nis, address });

    // firebase store
    let dataSiswaRef = doc(firestore, "data_siswa", Date.now().toString());
    setDoc(dataSiswaRef, {
      id: Date.now(),
      full_name,
      nis,
      address,
      createdAt: Date.now(),
    })
      .then((res) => {
        console.log("Data has been successfully store to Firebase");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form
        className=" w-[500px] p-6 flex flex-col gap-4"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-2 justify-between items-center">
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            id="full_name"
            className="h-10 px-3 border-[1px] border-gray-300 rounded-md w-[250px] "
          />
        </div>

        <div className="flex gap-2 justify-between items-center">
          <label htmlFor="nis">Student ID</label>
          <input
            type="text"
            id="nis"
            className="h-10 px-3 border-[1px] border-gray-300 rounded-md w-[250px] "
          />
        </div>

        <div className="flex gap-2 justify-between items-center">
          <label htmlFor="address">Address</label>
          <textarea
            type="text"
            id="address"
            className="h-10 p-3 border-[1px] border-gray-300 rounded-md w-[250px] "
          ></textarea>
        </div>

        <div className="flex mt-4 gap-2 ml-auto">
          <button
            type="reset"
            className="h-10 w-[120px] bg-gray-400 text-white rounded-md "
          >
            reset
          </button>
          <button
            type="submit"
            className="h-10 w-[120px] bg-green-700 text-white rounded-md "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
