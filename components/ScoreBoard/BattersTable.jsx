import { useState } from "react";

export default function BattersTable(props) {
  const { players } = props;

  const [data, setData] = useState(players);

  const handleAddRuns = (index, event) => {
    event.preventDefault();
    const updatedData = [...data];
    const runs = Number(event.target.addRuns.value);
    if (!runs) return;
    updatedData[index].r += runs;
    (updatedData[index].b += 1);
    updatedData[index].SR = (
      (updatedData[index].r / updatedData[index].b) *
      100
    ).toFixed(2);
  
    if (runs === 4) updatedData[index][4] += 1;
    if (runs === 6) updatedData[index][6] += 1;

    // const body = { r: runs, b: balls, fours, sixes, sr: strikeRate };

    // fetch(`/api/teams/teamplayers/${index}`, {
    //   method: "PUT",
    //   body: JSON.stringify(body),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    setData(updatedData);
    event.target.addRuns.value = "";
  };

  return (
    <div className="flex flex-col gap-4">
      <table className="border-collapse w-full">
        <thead className="text-center text-white bg-gray-900">
          <tr>
            <th className="p-3">Batter</th>
            <th className="p-3">R</th>
            <th className="p-3">B</th>
            <th className="p-3">4s</th>
            <th className="p-3">6s</th>
            <th className="p-3">SR</th>
            <th className="p-2">Add Runs</th>
          </tr>
        </thead>
        <tbody className="p-2 text-center bg-gray-500 font-semibold">
          {data.map((batter, index) => (
            <tr key={index}>
              <td className="p-3">{batter.batter}</td>
              <td className="p-3">{batter.r}</td>
              <td className="p-3">{batter.b}</td>
              <td className="p-3">{batter[4]}</td>
              <td className="p-3">{batter[6]}</td>
              <td className="p-1">{batter.SR}</td>
              <td>
                <form onSubmit={(event) => handleAddRuns(index, event)}>
                  <input
                    className="sm:w-8 md:w-16 border-gray-400 text-black rounded-md"
                    type="number"
                    name="addRuns"
                    placeholder="R"
                    min="0"
                    max="6"
                  />
                  <button
                    type="submit"
                    className="bg-gray-900 text-white w-5 rounded-sm"
                  >
                    +
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
