import { useAuth } from "contexts";
import { useEffect, useState } from "react";
import { getLeaderboardDataService } from "services";

export const ScoreCard = () => {
  const [scoreboardData, setScoreboardData] = useState([]);
  const { setShowLoader, authUser } = useAuth();

  useEffect(() => {
    setShowLoader(true);
    (async () => {
      try {
        let response = await getLeaderboardDataService();
        console.log(response);
        setScoreboardData(
          response.filter((data) => data.userId === authUser.uid)
        );
      } catch (err) {
        console.error(err.message);
      } finally {
        setShowLoader(false);
      }
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section className="mx-auto w-[80%] p-12 flex justify-start flex-col min-h-[70vh] shadow-[0px_0px_5px_0px_rgba(0,0,0,.2)] rounded-lg">
        <table>
          <caption className="text-4xl font-bold border-b-4 px-4 pb-2 border-violet-300 w-max m-auto rounded-lg mb-20">
            ScoreCard
          </caption>
          <thead className="bg-violet-300 text-3xl font-medium w-full">
            <tr className="w-full">
              <th scope="col" className="w-1/2 p-4">
                Category Name
              </th>
              <th scope="col" className="w-1/2 p-4">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {!scoreboardData.length ? (
              <tr className="text-2xl w-full text-center font-semi-bold even:bg-violet-100">
                <td data-label="Rank" colspan="2" className="py-6">
                  No Results
                </td>
              </tr>
            ) : (
              scoreboardData.map((data) => (
                <tr
                  key={data.id}
                  className="text-2xl font-semi-bold even:bg-violet-100"
                >
                  <td data-label="Rank" className="w-1/2 text-center py-6">
                    {data.categoryName}
                  </td>
                  <td
                    data-label="Total Score"
                    className="w-1/2 text-center py-6"
                  >
                    {data.score}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};