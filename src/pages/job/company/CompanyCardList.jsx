import { ClipboardIcon, LocationMarkerIcon } from "@heroicons/react/outline";

function CompanyJobCardList(props) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-auto">
      {props.jobs.map((job, index) => (
        <li
          key={job.name + index}
          className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 flex flex-col justify-between"
        >
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 ">
              <div className="space-x-3">
                <h3 className="text-gray-900 text-sm font-medium line-clamp-2 overflow-ellipsis">
                  {job.name}
                </h3>
                <p
                  className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"
                  style={{ marginLeft: "0" }}
                >
                  {job.category}
                </p>
              </div>
              <p className="mt-2 flex items-center text-sm text-gray-500">
                <LocationMarkerIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                {job.city + ", " + job.country}
              </p>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href="/application"
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <ClipboardIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Applicants</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CompanyJobCardList;
