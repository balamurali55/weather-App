import React from "react";

function TableData({ item }) {
  const {
    dt_txt,
    main: { temp_min, temp_max, pressure, humidity },
  } = item;
  return (
    <div>
      <div>
        <table className="w-72  border border-black text-center">
          <tbody>
            {/* First two rows with single column spanning 2 columns */}
            <tr className="border-b border-black">
              <td className="px-4 py-2 bg-[#F28C28]" colSpan="2">
                Date :{dt_txt}
              </td>
            </tr>
            <tr className="border-b border-black bg-gray-300">
              <td className="px-4 py-2" colSpan="2">
                Temperature
              </td>
            </tr>

            {/* Rows with two columns */}
            <tr className="border border-black bg-gray-300">
              <td className="px-4 py-2 w-1/2 border-[1px] border-black">min</td>
              <td className="px-4 py-2 w-1/2 border-[1px] border-black">max</td>
            </tr>
            <tr className="border border-black bg-gray-300">
              <td className="px-4 py-2 w-1/2 border-[1px] border-black">
                {temp_min}
              </td>
              <td className="px-4 py-2 w-1/2 border-[1px] border-black">
                {temp_max}
              </td>
            </tr>
            <tr className="border border-black">
              <td className="px-4 py-2 w-1/2 border-[1px] border-black">
                Pressure
              </td>
              <td className="px-4 py-2 w-1/2 border-[1px] border-black">
                {pressure}
              </td>
            </tr>
            <tr className="border border-black">
              <td className="px-4 py-2 w-1/2 border-[1px] border-black">
                Humidity
              </td>
              <td className="px-4 py-2 w-1/2 border-[1px] border-black">
                {humidity}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableData;
