import React from "react";
import { useNavigate } from "react-router-dom";
import "./table.css";
import axios from "axios";

const bootstrap =
  "https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/bootstrap.jpg";
const angular =
  "https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/angular.jpg";
const sketch =
  "https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/sketch.jpg";
const react =
  "https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/react.jpg";
const vue =
  "https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/vue.jpg";

const Table = () => {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const { data } = await axios.get("/api/v1/logout");
      localStorage.removeItem("User");
      alert(data.message);
      navigate("/");
    }catch (error) {
      if(error.response) alert(error.response.data.error);
    }
  };

  return (
    <>
      <button className="logout-btn" onClick={logoutHandler}>
        Logout
      </button>
      <div className="main-content">
        <div className="container mt-4">
          <div className="row mt-5">
            <div className="col">
              <div className="card bg-default shadow">
                <div className="card-header bg-transparent border-0">
                  <h3 className="text-white mb-0">Card tables</h3>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center table-dark table-flush">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Project</th>
                        <th scope="col">Budget</th>
                        <th scope="col">Status</th>
                        <th scope="col">Users</th>
                        <th scope="col">Completion</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="/" className="avatar rounded-circle mr-3">
                              <img src={bootstrap} alt="img1" />
                            </a>
                            <div className="media-body">
                              <span className="mb-0 text-sm">
                                Argon Design System
                              </span>
                            </div>
                          </div>
                        </th>
                        <td>$2,500 USD</td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-warning"></i> pending
                          </span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Ryan Tompson"
                            >
                              <img
                                src={bootstrap}
                                alt="img2"
                                className="rounded-circle"
                              />
                            </a>
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Romina Hadid"
                            >
                              <img
                                src={react}
                                alt="img3"
                                className="rounded-circle"
                              />
                            </a>
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Alexander Smith"
                            >
                              <img
                                src={vue}
                                alt="img4"
                                className="rounded-circle"
                              />
                            </a>
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Jessica Doe"
                            >
                              <img
                                alt="img5"
                                src={angular}
                                className="rounded-circle"
                              />
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">60%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "60%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="/" className="avatar rounded-circle mr-3">
                              <img alt="img6" src={angular} />
                            </a>
                            <div className="media-body">
                              <span className="mb-0 text-sm">
                                Angular Now UI Kit PRO
                              </span>
                            </div>
                          </div>
                        </th>
                        <td>$1,800 USD</td>
                        <td>
                          <span className="badge badge-dot">
                            <i className="bg-success"></i> completed
                          </span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Ryan Tompson"
                            >
                              <img
                                alt="img11"
                                src={bootstrap}
                                className="rounded-circle"
                              />
                            </a>
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Romina Hadid"
                            >
                              <img
                                alt="img12"
                                src={react}
                                className="rounded-circle"
                              />
                            </a>
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Alexander Smith"
                            >
                              <img
                                alt="img13"
                                src={vue}
                                className="rounded-circle"
                              />
                            </a>
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Jessica Doe"
                            >
                              <img
                                alt="img14"
                                src={angular}
                                className="rounded-circle"
                              />
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">100%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "100%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="/" className="avatar rounded-circle mr-3">
                              <img alt="img8" src={sketch} />
                            </a>
                            <div className="media-body">
                              <span className="mb-0 text-sm">
                                Black Dashboard
                              </span>
                            </div>
                          </div>
                        </th>
                        <td>$3,150 USD</td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-danger"></i> delayed
                          </span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Ryan Tompson"
                            >
                              <img
                                alt="img21"
                                src={bootstrap}
                                className="rounded-circle"
                              />
                            </a>
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Romina Hadid"
                            >
                              <img
                                alt="img22"
                                src={react}
                                className="rounded-circle"
                              />
                            </a>
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Alexander Smith"
                            >
                              <img
                                alt="img23"
                                src={vue}
                                className="rounded-circle"
                              />
                            </a>
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Jessica Doe"
                            >
                              <img
                                alt="img24"
                                src={angular}
                                className="rounded-circle"
                              />
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">72%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  aria-valuenow="72"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "72%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="/" className="avatar rounded-circle mr-3">
                              <img alt="img9" src={react} />
                            </a>
                            <div className="media-body">
                              <span className="mb-0 text-sm">
                                React Material Dashboard
                              </span>
                            </div>
                          </div>
                        </th>
                        <td>$4,400 USD</td>
                        <td>
                          <span className="badge badge-dot">
                            <i className="bg-info"></i> on schedule
                          </span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Ryan Tompson"
                            >
                              <img
                                alt="img31"
                                src={bootstrap}
                                className="rounded-circle"
                              />
                            </a>
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Romina Hadid"
                            >
                              <img
                                alt="img32"
                                src={react}
                                className="rounded-circle"
                              />
                            </a>
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Alexander Smith"
                            >
                              <img
                                alt="img33"
                                src={vue}
                                className="rounded-circle"
                              />
                            </a>
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Jessica Doe"
                            >
                              <img
                                alt="img34"
                                src={angular}
                                className="rounded-circle"
                              />
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">90%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  aria-valuenow="90"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "90%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="/" className="avatar rounded-circle mr-3">
                              <img src={vue} alt="img9" />
                            </a>
                            <div className="media-body">
                              <span className="mb-0 text-sm">
                                Vue Paper UI Kit PRO
                              </span>
                            </div>
                          </div>
                        </th>
                        <td>$2,200 USD</td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-success"></i> completed
                          </span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Ryan Tompson"
                            >
                              <img
                                alt="img41"
                                src={bootstrap}
                                className="rounded-circle"
                              />
                            </a>
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Romina Hadid"
                            >
                              <img
                                alt="img42"
                                src={react}
                                className="rounded-circle"
                              />
                            </a>
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Alexander Smith"
                            >
                              <img
                                alt="img43"
                                src={vue}
                                className="rounded-circle"
                              />
                            </a>
                            <a
                              href="/"
                              className="avatar avatar-sm"
                              data-toggle="tooltip"
                              data-original-title="Jessica Doe"
                            >
                              <img
                                alt="img44"
                                src={angular}
                                className="rounded-circle"
                              />
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">100%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "100%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
