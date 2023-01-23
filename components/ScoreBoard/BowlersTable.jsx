import { useState } from "react";

export default function BowlersTable(props) {
  const { players } = props;

  const [data, setData] = useState(players);

  const handleAddBalls = (index, event) => {
    event.preventDefault();
    const updatedData = [...data];
    const balls = Number(event.target.addBalls.value);
    updatedData[index].O += balls / 6;
    // if(balls % 6 === 0) updatedData[index].M += 1;
    updatedData[index].R += Number(event.target.addRuns.value);
    updatedData[index].ECO = (
      updatedData[index].R / updatedData[index].O
    ).toFixed(2);
    setData(updatedData);
    event.target.addBalls.value = "";
    event.target.addRuns.value = "";
  };

  const handleWickets = (index) => {
    const newData = [...data];
    newData[index].W += 1;
    setData(newData);
  };

  return (
    <div className="flex flex-col gap-4">
      <table className="border-collapse w-full">
        <thead className="text-center text-white bg-gray-900">
          <tr>
            <th className="px-1 py-3">Bowler</th>
            <th className="px-1 py-3">O</th>
            <th className="px-1 py-3">M</th>
            <th className="px-1 py-3">R</th>
            <th className="px-1 py-3">W</th>
            <th className="py-3">ECO</th>
            <th className="p-0">Add Balls</th>
          </tr>
        </thead>
        <tbody className="text-center bg-gray-500 font-semibold">
          {data.map((batter, index) => (
            <tr key={index}>
              <td className="px-1 py-3">{batter.batter}</td>
              <td className="px-1 py-3">{batter.O.toFixed(1)}</td>
              <td className="px-1 py-3">{batter.M}</td>
              <td className="px-1 py-3">{batter.R}</td>
              <td className="px-1 py-3">{batter.W}</td>
              <td className="py-3">{batter.ECO}</td>
              <td className="p-0">
                <form onSubmit={(event) => handleAddBalls(index, event)}>
                  <input
                    className="sm:w-6 md:w-16 border-gray-400 text-black rounded-md"
                    type="number"
                    name="addRuns"
                    placeholder="R"
                    min="0"
                    max="6"
                  />
                  <input
                    className="sm:w-6 md:w-16 border-gray-400 text-black rounded-md"
                    type="number"
                    name="addBalls"
                    placeholder="B"
                    min="1"
                    max="1"
                  />
                  <button
                    type="submit"
                    className="bg-gray-900 text-white w-5 rounded-sm"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => handleWickets(index)}
                    className="bg-gray-900 text-white w-5 rounded-sm"
                  >
                    W
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
