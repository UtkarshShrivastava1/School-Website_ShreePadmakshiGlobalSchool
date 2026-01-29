import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

const CandidateList = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [allCandidates, setAllCandidates] = useState([]);
  const [shortlistedCandidates, setShortlistedCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rejectedCandidates, setRejectedCandidates] = useState([]);
  useEffect(() => {
    fetchAllCandidates();
    fetchShortlistedCandidates();
  }, []);

  const viewPdf=async(candidateId)=>{
    try{
      const res=await api.get(`/candidateForm/downloadCandidateForm/${candidateId}`,{
        responseType:"blob",
      });
      const blob=new Blob([res.data],{type:"application/pdf"});
      const url=window.URL.createObjectURL(blob);
      window.open(url,"_blank");
     
    } catch(error){
      console.error("PDF view failed:",error);
      toast.error("PDF view failed");
      
    }
  }
  const downloadPdf = async (candidateId) => {
    try {
      const res = await api.get(
        `/candidateForm/downloadCandidateForm/${candidateId}`,
        {
          responseType: "blob",
        },
      );

      const blob = new Blob([res.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Candidate_Application_Form.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF download failed:", error);
      toast.error("PDF download failed");
    }
  };

  const fetchAllCandidates = async () => {
    try {
      const res = await api.get("/candidateForm/getPendingCandidateForms");
      setAllCandidates(res.data.candidates);
      console.log("All Candidates:", res.data.candidates);
    } catch (error) {
      console.error("Error fetching all candidates:", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchRejectedCandidates = async () => {
    try {
      const res = await api.get("/candidateForm/getRejectedCandidates");
      setRejectedCandidates(res.data.candidates);
    } catch (error) {
      console.error("Error fetching rejected candidates:", error);
    }
  };

  const fetchShortlistedCandidates = async () => {
    try {
      const res = await api.get("/candidateForm/getShortlistedCandidate");
      setShortlistedCandidates(res.data.candidates);
    } catch (error) {
      console.error("Error fetching shortlisted candidates:", error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/candidateForm/updateStatus/${id}`, {
        status,
      });

      fetchAllCandidates();
      fetchShortlistedCandidates();
    } catch (error) {
      console.error("Status update failed:", error);
    }
  };

  if (loading) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  return (
    <div className="p-6 font-['Open_Sans']">
      <h2 className="text-2xl font-bold mb-4">Candidate Management</h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded ${
            activeTab === "all" ? "bg-orange-600 text-white" : "bg-gray-200"
          }`}
        >
          All Candidates
        </button>

        <button
          onClick={() => setActiveTab("shortlisted")}
          className={`px-4 py-2 rounded ${
            activeTab === "shortlisted"
              ? "bg-orange-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Shortlisted Candidates
        </button>
        <button
          onClick={() => {
            setActiveTab("rejected");
            fetchRejectedCandidates();
          }}
          className={`px-4 py-2 rounded ${
            activeTab === "rejected"
              ? "bg-orange-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Rejected Candidates
        </button>
      </div>

      {/* All Candidates */}
      {activeTab === "all" &&
        (allCandidates.length === 0 ? (
          <p className="text-center">No candidates Found.</p>
        ) : (
          <div className="w-full overflow-x-auto">
            <table className="  min-w-[900px]  border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Mobile</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Status</th>
                  <th className="border p-2">Action</th>
                  <th className="border  p-2">Download/View Pdf</th>
                </tr>
              </thead>

              <tbody>
                {allCandidates.map((c) => (
                  <tr key={c._id} className="text-center">
                    <td className="border p-2">{c.name}</td>
                    <td className="border p-2">{c.mobileNumber}</td>
                    <td className="border p-2">{c.email}</td>
                    <td className="border p-2 capitalize">{c.status}</td>
                    <td className="border p-2 space-x-2">
                      <button
                        onClick={() => updateStatus(c._id, "shortlisted")}
                        className="bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Shortlist
                      </button>

                      <button
                        onClick={() => updateStatus(c._id, "rejected")}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                    </td>
                  <td className="border p-3">
  <div className="flex justify-center gap-2">
    <button
      onClick={() => downloadPdf(c._id)}
      className="
        px-4 py-1.5
        text-blue-600
        border border-blue-500
        rounded-full
        hover:bg-blue-50
        transition
        cursor-pointer
      "
    >
      Download
    </button>

    <button onClick={() => viewPdf(c._id)}
      className="
        px-4 py-1.5
        bg-blue-500
        text-white
        rounded-full
        hover:bg-blue-600
        transition
        cursor-pointer
      "
    >
      View
    </button>
  </div>
</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

      {/* Shortlisted Candidates */}
      {activeTab === "shortlisted" &&
        (shortlistedCandidates.length === 0 ? (
          <p className="text-center">No shortlisted candidates found.</p>
        ) : (
          <div className="w-full overflow-x-auto">
            <table className=" min-w-[900px]  border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Mobile</th>
                  <th className="border p-2">Email</th>

                  <th className="border p-2">Download/View Pdf</th>
                </tr>
              </thead>

              <tbody>
                {shortlistedCandidates.map((c) => (
                  <tr key={c._id} className="text-center">
                    <td className="border p-2">{c.name}</td>
                    <td className="border p-2">{c.mobileNumber.join(",")}</td>
                    <td className="border p-2">{c.email}</td>
                    <td className="border p-3">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => downloadPdf(c._id)}
                          className="
                    px-4 py-1.5
                    text-blue-600
                    border border-blue-500
                    rounded-full
                    hover:bg-blue-50
                    transition
                      cursor-pointer
                  "
                        >
                          Download
                        </button>

                        <button onClick={() => viewPdf(c._id)}
                          className="
        px-4 py-1.5
        bg-blue-500
        text-white
        rounded-full
        hover:bg-blue-600
        transition
          cursor-pointer
      "
                        >
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

      {activeTab === "rejected" &&
        (rejectedCandidates.length === 0 ? (
          <p className="text-center">No rejected candidates found.</p>
        ) : (
          <div className="w-full overflow-x-auto">
            <table className=" min-w-[900px]  border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Mobile</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Download/View Pdf</th>
                </tr>
              </thead>
              <tbody>
                {rejectedCandidates.map((c) => (
                  <tr key={c._id} className="text-center">
                    <td className="border p-2">{c.name}</td>
                    <td className="border p-2">{c.mobileNumber.join(",")}</td>
                    <td className="border p-2">{c.email}</td>
                    <td className="border p-3">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => downloadPdf(c._id)}
                          className="
                                px-4 py-1.5
                                text-blue-600
                                border border-blue-500
                                rounded-full
                                hover:bg-blue-50
                                transition
                                  cursor-pointer
                              "
                        >
                          Download
                        </button>

                        <button onClick={() => viewPdf(c._id)}
                          className="
                                  px-4 py-1.5
                                  bg-blue-500
                                  text-white
                                  rounded-full
                                  hover:bg-blue-600
                                  transition
                                    cursor-pointer
                                "
                        >
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
};

export default CandidateList;
