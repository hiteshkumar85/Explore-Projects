

import React, { useState } from "react";
import { FaEdit, FaUpload } from "react-icons/fa";

export default function ManagerForm({ onClose, onAdd }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    type: "",
    phone: "",
    department: "",
    projects: "",
    profileImage: null,
    resume: null,
  });

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [field]: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3); // Show confirmation
    onAdd(formData);
  };

  return (
    <div className="fixed inset-0 bg-bla bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal Box */}
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 rounded-xl shadow-2xl relative">
        {/* Stepper */}
        <div className="flex justify-between items-center mb-6">
          {["Add Details", "Confirm", "Success"].map((label, idx) => {
            const stepNum = idx + 1;
            return (
              <div key={idx} className="flex-1 flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                    step >= stepNum ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  {stepNum}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">
                  {label}
                </span>
                {idx < 2 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step > stepNum ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </div>
            );
          })}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Step 1: Input Form */}
        {step === 1 && (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            {/* Profile Upload */}
            <div className="flex flex-col items-center">
              <div className="relative w-28 h-28">
                <img
                  src={
                    formData.profileImage
                      ? URL.createObjectURL(formData.profileImage)
                      : "https://via.placeholder.com/150"
                  }
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover border-4 border-gray-300 shadow-md"
                />
                <label className="absolute bottom-1 right-1 bg-blue-600 p-2 rounded-full text-white cursor-pointer hover:bg-blue-700 shadow-md">
                  <FaEdit size={14} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "profileImage")}
                    className="hidden"
                  />
                </label>
              </div>
              <p className="text-gray-500 text-sm mt-2">Upload Profile Image</p>
            </div>

            {/* Sections */}
            <div className="space-y-6">
              {/* Manager Info */}
              <div>
                <h3 className="text-lg font-semibold mb-2">🧑‍💼 Manager Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Manager ID", field: "id", type: "text" },
                    { label: "Full Name", field: "name", type: "text" },
                    { label: "Type", field: "type", type: "text" },
                    { label: "Department", field: "department", type: "text" },
                  ].map((i, idx) => (
                    <div key={idx}>
                      <label className="text-sm font-semibold">{i.label}</label>
                      <input
                        type={i.type}
                        value={formData[i.field]}
                        onChange={(e) =>
                          setFormData({ ...formData, [i.field]: e.target.value })
                        }
                        className="w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-2">📞 Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Email", field: "email", type: "email" },
                    { label: "Phone Number", field: "phone", type: "tel" },
                  ].map((i, idx) => (
                    <div key={idx}>
                      <label className="text-sm font-semibold">{i.label}</label>
                      <input
                        type={i.type}
                        value={formData[i.field]}
                        onChange={(e) =>
                          setFormData({ ...formData, [i.field]: e.target.value })
                        }
                        className="w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualifications */}
              <div>
                <h3 className="text-lg font-semibold mb-2">🎓 Qualifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold">Assigned Projects</label>
                    <input
                      type="text"
                      value={formData.projects}
                      onChange={(e) =>
                        setFormData({ ...formData, projects: e.target.value })
                      }
                      className="w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Resume / CV</label>
                    <div className="flex items-center gap-2 border rounded-lg px-3 py-2 shadow-sm bg-gray-50">
                      <FaUpload className="text-gray-500" />
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileChange(e, "resume")}
                        className="w-full text-sm text-gray-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"

                 onClick={() => window.close("/dashboard/manager", "_manager")}

                className="px-5 py-2 border rounded-lg shadow-sm hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
              >
                Next →
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Confirmation */}
        {step === 2 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Review Manager Details</h3>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Profile */}
              <div className="flex flex-col items-center w-full md:w-1/3">
                <img
                  src={
                    formData.profileImage
                      ? URL.createObjectURL(formData.profileImage)
                      : "https://via.placeholder.com/150"
                  }
                  alt="Profile Preview"
                  className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-md"
                />
                <p className="mt-3 font-medium">{formData.name}</p>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg shadow-sm flex-1">
                <p><b>ID:</b> {formData.id}</p>
                <p><b>Name:</b> {formData.name}</p>
                <p><b>Email:</b> {formData.email}</p>
                <p><b>Type:</b> {formData.type}</p>
                <p><b>Phone:</b> {formData.phone}</p>
                <p><b>Department:</b> {formData.department}</p>
                <p><b>Projects:</b> {formData.projects}</p>
                <p>
                  <b>Resume:</b>{" "}
                  {formData.resume ? (
                    <a
                      href={URL.createObjectURL(formData.resume)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {formData.resume.name}
                    </a>
                  ) : (
                    "Not uploaded"
                  )}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between gap-3 pt-6">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-5 py-2 border rounded-lg shadow-sm hover:bg-gray-100"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-5 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
              >
                Confirm & Save
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              🎉 Manager Added Successfully!
            </h3>
            <p className="text-gray-600 mb-6">
              The manager details have been saved securely.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setStep(1)}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
              >
                ➕ Add Another Manager
              </button>
              <button
                 onClick={() => window.open("/dashboard/manager", "_manager")}
                className="px-5 py-2 border rounded-lg shadow-sm hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}