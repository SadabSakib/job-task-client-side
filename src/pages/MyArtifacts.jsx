// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../provider/AuthProvider";
// import useAxiosSecure from "../components/hooks/useAxiosSecure";

// const MyArtifacts = () => {
//   const { user } = useContext(AuthContext);
//   // const loadedVisas = useLoaderData();
//   // console.log(loadedVisas)

//     const [myAdded, setMyAdded] = useState(null);
//     const axiosSecure = useAxiosSecure();
//   useEffect(() => {
//     // fetch(`https://assignment-11-server-side-omega-beige.vercel.app/artifact/${user?.email}`)
//     //   .then((res) => res.json())
//     //   .then((data) => {
//     //     console.log(data);
//     //     setMyAdded(data);
//     //     // console.log(myAdded)
//     //   });
//     useAxiosSecure
//       .get(`artifact/${user?.email}`)
//       .then((res) => setMyAdded(res.data));
//   }, [user]);
//   //    const handleDelete = (_id) => {
//   //      console.log(_id);

//   //      fetch(`https://assignment-11-server-side-omega-beige.vercel.app/visa/${_id}`, {
//   //        method: "DELETE",
//   //      })
//   //        .then((res) => res.json())
//   //        .then((data) => {
//   //          console.log(data);
//   //          if (data.deletedCount > 0) {
//   //            const remaining = myAdded.filter((visa) => visa._id !== _id);
//   //            setMyAdded(remaining);
//   //          }
//   //        })
//   //        .catch((err) => {
//   //          console.log(err);
//   //        });
//   //    };

//   console.log(myAdded, user);
//   return (
//     <div className="overflow-x-auto">
//       <table className="table w-full">
//         <thead>
//           <tr>
//             <th>Artifact Name</th>
//             <th>Artifact Type</th>
//             <th>Discovered By</th>
//             <th>Present Location</th>
//             <th>Created & Discovered</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {myAdded?.map(individual => {
//                       <tr>
//                         <td>a</td>
//                         <td>Artifact Type</td>
//                         <td>d</td>
//                         <td>g</td>
//                         <td>c - f</td>
//                         <td>
//                           <button className="btn btn-xs btn-icon">
//                             <i className="icon-edit"></i>
//                           </button>
//                           <button
//                             className="btn btn-xs btn-icon"
//                             onClick={handleDelete(user?._id)}
//                           >
//                             <i className="icon-copy"></i>
//                           </button>
//                         </td>
//                       </tr>;
//                   })} */}

//           {/* Repeat rows as needed */}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyArtifacts;
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../components/hooks/useAxiosSecure";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaEdit, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyArtifacts = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure(); // Get the Axios instance from the hook

  const [myAdded, setMyAdded] = useState(null);

  useEffect(() => {
    if (user) {
      axiosSecure
        .get(`artifact/${user?.email}`)
        .then((res) => {
          setMyAdded(res.data);
          console.log(res.data);
        })
        .catch((err) => console.error("Error fetching artifacts:", err));
    }
  }, [user, axiosSecure]);

  const handleDelete = (_id) => {
    console.log(_id);

    //   fetch(`https://assignment-11-server-side-omega-beige.vercel.app/myVisaApplication/${_id}`, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       if (data.deletedCount > 0) {
    //         const remaining = visas.filter((visa) => visa._id !== _id);
    //         setVisas(remaining);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    axiosSecure
      .delete(`artifact/${_id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          const remaining = myAdded.filter(
            (singleAdded) => singleAdded._id !== _id
          );
          setMyAdded(remaining);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(myAdded, user);
  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>Artifact Tracker|Add Artifacts</title>
      </Helmet>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Artifact Name</th>
            <th>Artifact Type</th>
            <th>Discovered By</th>
            <th>Present Location</th>
            <th>Created & Discovered</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Render table rows dynamically */}
          {myAdded?.map((artifact) => (
            <tr key={artifact._id}>
              <td>{artifact.artifactName}</td>
              <td>{artifact.artifactType}</td>
              <td>{artifact.discoveredBy}</td>
              <td>{artifact.presentLocation}</td>
              <td>
                {artifact.createdAt} - {artifact.discoveredAt}
              </td>
              <td>
                <NavLink to={`/update-artifact/${artifact._id}`}>
                  <button className="btn btn-xs btn-icon">
                    {" "}
                    <FaEdit className="h-5 w-5" />
                  </button>{" "}
                </NavLink>

                <button
                  className="btn btn-xs btn-icon"
                  onClick={() => handleDelete(artifact._id)}
                >
                  {" "}
                  <FaTimes className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyArtifacts;
