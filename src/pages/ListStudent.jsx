import React, { useState, useEffect } from "react";
import { firestore } from "../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function ListStudent() {
  // state
  const [dataSiswa, setDataSiswa] = useState([]);

  // get data from firebase
  const getDataSiswa = async () => {
    let arrDataSiswa = [];
    let dataSiswaRef = await collection(firestore, "data_siswa");
    let compileData = await getDocs(dataSiswaRef).then((res) => {
      res.forEach((e) => {
        arrDataSiswa.push(e.data());
      });
    });
    return arrDataSiswa;
  };

  // component lifecycle
  useEffect(() => {
    getDataSiswa().then((res) => {
      setDataSiswa(res);
    });
  }, []);

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-2xl">List Student</h1>

      <table className="w-full mt-4">
        <thead>
          <tr>
            <th>id</th>
            <th>full name</th>
            <th>nis</th>
            <th>address</th>
            <th>created</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {dataSiswa.map((e, i) => (
            <tr key={e.id}>
              <td> {i + 1} </td>
              <td> {e.full_name} </td>
              <td> {e.nis} </td>
              <td> {e.address} </td>
              <td> {e.createdAt} </td>
              <td>
                <div className="flex gap-2">
                  <button>edit</button>
                  <button>delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
