import React from "react";
import Proptypes from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

function RepoItem({ repo }) {
  //deconstruct
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (
    <div className="mb-2 rounded-md card bg-blue-500 hover:bg-red-500">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url}>
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div className="flex space-x-2">
        <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset"><FaEye className="mr-2"/>{watchers_count}</span>
        <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset"><FaStar className="mr-2"/>{stargazers_count}</span>
        <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset"><FaInfo className="mr-2"/>{forks}</span>
        <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset"><FaUtensils className="mr-2"/>{open_issues}</span></div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: Proptypes.object.isRequired,
};
export default RepoItem;
