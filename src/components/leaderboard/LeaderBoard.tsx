export const LeaderBoard = () => {
  return (
    <>
      <section className="mt-12 mx-auto w-[60%] p-12 flex justify-center flex-col min-h-[70vh] shadow-[0px_0px_5px_0px_rgba(0,0,0,.2)] rounded-lg">
        <table>
          <caption className="text-5xl font-bold border-b-4 px-4 pb-2 border-violet-300 w-max m-auto rounded-lg mb-20">
            Leaderboard
          </caption>
          <thead className="bg-violet-300 text-3xl font-medium w-full">
            <tr className="w-full">
              <th scope="col" className="w-1/3 p-4">
                Rank
              </th>
              <th scope="col" className="w-1/3 p-4">
                Name
              </th>
              <th scope="col" className="w-1/3 p-4">
                Total Score
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-2xl font-semi-bold border-b-2 border-gray-200">
              <td data-label="Rank" className="w-1/3 text-center py-6">
                1
              </td>
              <td data-label="Name" className="w-1/3 text-center py-6">
                User 1
              </td>
              <td data-label="Total Score" className="w-1/3 text-center py-6">
                500
              </td>
            </tr>
            <tr className="text-2xl font-semi-bold border-b-2 border-gray-200">
              <td data-label="Rank" className="w-1/3 text-center py-6">
                2
              </td>
              <td data-label="Name" className="w-1/3 text-center py-6">
                User 2
              </td>
              <td data-label="Total Score" className="w-1/3 text-center py-6">
                400
              </td>
            </tr>
            <tr className="text-2xl font-semi-bold border-b-2 border-gray-200">
              <td data-label="Rank" className="w-1/3 text-center py-6">
                3
              </td>
              <td data-label="Name" className="w-1/3 text-center py-6">
                User 3
              </td>
              <td data-label="Total Score" className="w-1/3 text-center py-6">
                300
              </td>
            </tr>
            <tr className="text-2xl font-semi-bold border-b-2 border-gray-200">
              <td data-label="Rank" className="w-1/3 text-center py-6">
                4
              </td>
              <td data-label="Name" className="w-1/3 text-center py-6">
                User 4
              </td>
              <td data-label="Total Score" className="w-1/3 text-center py-6">
                200
              </td>
            </tr>
            <tr className="text-2xl font-semi-bold ">
              <td data-label="Rank" className="w-1/3 text-center py-6">
                5
              </td>
              <td data-label="Name" className="w-1/3 text-center py-6">
                User 5
              </td>
              <td data-label="Total Score" className="w-1/3 text-center py-6">
                100
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};
