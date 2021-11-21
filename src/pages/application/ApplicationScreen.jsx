import SideBar from "../../components/SideBar";
import { useContext, useEffect, useState } from "react";
import { ApplicationController } from "../../controllers/ApplicationController";
import { UserContext } from "../../context/UserContext";

export default function ApplicationScreen() {
  const [applications, setApplications] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user !== null) {
      if (user.role_id === 1) {
        ApplicationController.getApplicationList({
          paging: {
            page: 0,
            size: 200,
          },
          sort: {
            sort_by: "",
            direction: "",
          },
        }).then((res) => {
          setApplications(res.data.contents);
        });
      } else {
        ApplicationController.getCompanyApplicationList({
          paging: {
            page: 0,
            size: 200,
          },
          sort: {
            sort_by: "",
            direction: "",
          },
        }).then((res) => {
          setApplications(res.data.contents);
        });
      }
    }
  }, [user]);

  return (
    <SideBar>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {user !== null && user.role_id === 1
                        ? "Company"
                        : "Applicant"}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Position
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Last Progress
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((app) => (
                    <tr key={app.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={
                                user !== null && user.role_id === 1
                                  ? app.job.company.image_url
                                  : app.user.image_url
                              }
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user !== null && user.role_id === 1
                                ? app.job.company.name
                                : app.user.first_name +
                                  " " +
                                  app.user.last_name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {app.job.company.category}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {app.job.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {app.job.category}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {app.last_progress.job_step.step.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {!app.done && !app.active ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            {!app.done && !app.active && "Rejected"}
                          </span>
                        ) : (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {app.done ? "Done" : app.active ? "Active" : ""}
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href={"/application-detail/" + app.id}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          View Progress
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </SideBar>
  );
}
