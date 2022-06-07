import { useAuth } from "contexts";
import { useEffect, useState } from "react";
import { getLeaderboardDataService, getUserDataService } from "services";

export const LeaderBoard = () => {
  const [leaderboardData, setleaderboardData] = useState([]);
  const [userData, setUserData] = useState([]);
  const { setShowLoader } = useAuth();

  useEffect(() => {
    setShowLoader(true);
    (async () => {
      try {
        let response: any = await getUserDataService();
        setUserData(response);
      } catch (err: any) {
        console.error(err.message);
      } finally {
        setShowLoader(false);
      }
    })();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setShowLoader(true);
    (async () => {
      try {
        let response: any = await getLeaderboardDataService();
        setleaderboardData(response);
      } catch (err: any) {
        console.error(err.message);
      } finally {
        setShowLoader(false);
      }
    })();
    // eslint-disable-next-line
  }, []);

  const getUserName = (id: any) => {
    let user: any = userData.filter((user: any) => user.uid === id);
    return user[0].name;
  };

  return (
    <>
      <div className="dark:bg-gray-700 py-16 min-h-[92vh]">
        <section className="mx-auto w-[95%] py-12 px-8 flex justify-start flex-col min-h-[70vh] shadow-[0px_0px_5px_0px_rgba(0,0,0,.2)] rounded-lg dark:bg-slate-400 md:w-[70%] md:px-12 lg:w-[60%]">
          <table>
            <caption className="text-4xl font-bold border-b-4 px-4 pb-2 border-violet-300 w-max m-auto rounded-lg mb-20 dark:text-slate-100">
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
              {!leaderboardData.length ? (
                <tr className="text-2xl w-full text-center font-semi-bold even:bg-violet-100">
                  <td data-label="Rank" colSpan={3} className="py-6">
                    No Results
                  </td>
                </tr>
              ) : (
                leaderboardData.map((data: any, index: number) => (
                  <tr
                    key={data.id}
                    className="text-2xl font-semi-bold even:bg-violet-100"
                  >
                    <td data-label="Rank" className="w-1/3 text-center py-6">
                      {index + 1}
                    </td>
                    <td data-label="Name" className="w-1/3 text-center py-6">
                      {getUserName(data.userId)}
                    </td>
                    <td
                      data-label="Total Score"
                      className="w-1/3 text-center py-6"
                    >
                      {data.score}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};
