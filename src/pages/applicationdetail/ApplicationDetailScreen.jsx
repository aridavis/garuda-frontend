import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import SideBar from "../../components/SideBar";
import { ApplicationController } from "../../controllers/ApplicationController";

import ApplicationProcess from "./ApplicationProcess";
import { UserContext } from "../../context/UserContext";

function ApplicationDetailScreen(props) {
  let { id } = useParams();

  const [application, setapplication] = useState({});

  const [user, setUser] = useState({});

  useEffect(() => {
    ApplicationController.getApplicationDetail(id).then((res) => {
      setapplication(res.data.content);
      setUser(res.data.content.user);
    });
    // eslint-disable-next-line
  }, []);

  // const job = {
  //   position: "Software Engineer",
  //   company: "BeliBeli",
  //   payrange: 120000,
  //   country: "Indonesia",
  //   city: "Jakarta",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // };
  const { job } = application;

  return (
    <SideBar>
      <div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 mt-5">
            Job Information
          </h3>
        </div>
        {job !== undefined && user !== null && (
          <>
            <div className="mt-5 border-t border-gray-200">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    Position
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {job.name}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">Company</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {job.company.name}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    Pay Range
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {job.pay_range}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {job.city + ", " + job.country}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    Description
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {job.description.split("\n").map((res) => (
                      <p>{res}</p>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mt-5">
                Applicant Information
              </h3>
            </div>
            <div className="mt-5 border-t border-gray-200">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.first_name} {user.last_name}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.email}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">Address</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.address}, {user.city}, {user.state}, {user.country}
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mt-5">
                Application Process
              </h3>
            </div>
            <div className="mt-5 border-t border-gray-200">
              <ApplicationProcess
                steps={application.process}
                cv={application.cv_url}
              />
            </div>
          </>
        )}
      </div>
    </SideBar>
  );
}

export default ApplicationDetailScreen;
