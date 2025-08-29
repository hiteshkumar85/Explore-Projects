
import React, { useEffect, useState } from "react";
import { FaEdit, FaUpload, FaTrash, FaEye, FaEyeSlash } from "react-icons/fa";


export default function ManagerForm({ onClose, onAdd }) {
  const generateManagerId = () => {
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yy = String(date.getFullYear()).slice(-2);
    const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `m-${dd}${mm}${yy}-${rand}`;
  };

  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    id: generateManagerId(),
    status: "Active", // Active / Inactive
    profileImage: null,
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    department: "",
    position: "",
    joiningDate: "",
    experience: "",
    employmentType: "Full-time",
    workMode: "On-site",
    reportingTo: "",
    ctc: "",
    highestDegree: "",
    university: "",
    keySkills: "",
    notes: "",
    confirmationMessage: "",
    digitalSignature: "",
    portalPassword: "",
  });

  // Validation / errors
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // regenerate id only when necessary (not on every render)
    if (!formData.id) setFormData((p) => ({ ...p, id: generateManagerId() }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (!file) return;
    const maxBytes = 5 * 1024 * 1024; // 5MB
    if (file.size > maxBytes) {
      setErrors((s) => ({ ...s, profileImage: "File must be <= 5MB" }));
      return;
    }
    if (!/image\/(png|jpe?g)/i.test(file.type)) {
      setErrors((s) => ({ ...s, profileImage: "Only PNG/JPG allowed" }));
      return;
    }
    setErrors((s) => ({ ...s, profileImage: null }));
    setFormData({ ...formData, [field]: file });
  };

  const removeImage = () => {
    setFormData({ ...formData, profileImage: null });
  };

  const simpleValidateStep = (s) => {
    const err = {};
    if (s === 1) {
      if (!formData.name) err.name = "Full name required";
      if (!formData.email) err.email = "Email required";
    }
    if (s === 2) {
      if (!formData.position) err.position = "Position required";
      if (!formData.department) err.department = "Department required";
    }
    if (s === 4) {
      if (!formData.highestDegree) err.highestDegree = "Degree required";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleNext = (s) => {
    const ok = simpleValidateStep(s);
    if (!ok) return;
    setStep(s + 1);
  };

  const handleBack = () => setStep((p) => Math.max(1, p - 1));

  const handleSave = () => {
    // final validation
    const finalErr = {};
    if (!formData.digitalSignature)
      finalErr.digitalSignature = "Please type your name to sign";
    if (!formData.portalPassword)
      finalErr.portalPassword = "Please set a portal password";
    setErrors(finalErr);
    if (Object.keys(finalErr).length) return;

    // Prepare a lightweight payload (avoid sending File objects directly if backend expects multipart)
    onAdd && onAdd(formData);
    setStep(5); // show success/complete or you can close
  };

  const resetForm = () => {
    setFormData({ ...formData, id: generateManagerId() });
    setStep(1);
    setErrors({});
  };

  return (
    <div className="fixed inset-0 flex items-center  z-50 p-4">
      <div className="">
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-semibold">Add Manager • Enhanced</h2>
          <div className="flex items-center gap-3">
            <div className="text-sm">ID:</div>
            <div className="font-mono text-sm px-3 py-1 bg-gray-100 rounded">{formData.id}</div>
            <button
              onClick={() => setFormData({ ...formData, id: generateManagerId() })}
              className="text-xs px-3 py-1 border rounded bg-gray-50 hover:bg-gray-100">
              Regenerate
            </button>
            <button
              onClick={() => onClose && onClose()}
              className="px-3 py-1 rounded bg-red-50 hover:bg-red-100 text-red-600">
              Close
            </button>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: ID & Status */}
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border"> 
              <h6 className="text-sm font-semibold">Manager ID</h6>
              <p className="text-xs text-gray-600">Auto-generated — edit if needed</p>
              <input
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                className="mt-2 w-full border px-3 py-2 rounded"
              />

              <h6 className="mt-4 text-sm font-semibold">Status</h6>
              <div className="flex gap-2 mt-2">
                {['Active','Inactive'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setFormData({ ...formData, status: s })}
                    className={`px-3 py-1 rounded-full border ${formData.status === s ? 'bg-blue-600 text-white' : 'bg-white'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Profile image box */}
            <div className="p-4 bg-white rounded-lg border flex flex-col items-center">
              <h6 className="font-semibold">Profile Image</h6>
              <p className="text-xs text-gray-500">PNG/JPG up to 5MB — required</p>
              <div className="mt-3 w-40 h-40 rounded-full overflow-hidden border-4 border-gray-100 shadow flex items-center justify-center bg-gray-50">
                {formData.profileImage ? (
                  <img
                    src={URL.createObjectURL(formData.profileImage)}
                    alt="preview"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="text-gray-400 text-sm">No image</div>
                )}
              </div>

              <label className="flex items-center gap-2 mt-3 cursor-pointer">
                <FaUpload />
                <span className="text-sm">Upload</span>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={(e) => handleFileChange(e, 'profileImage')}
                  className="hidden"
                />
              </label>
              <button
                onClick={removeImage}
                className="mt-2 text-sm text-red-600 flex items-center gap-2">
                <FaTrash /> Remove
              </button>
              {errors.profileImage && (
                <p className="text-xs text-red-600 mt-2">{errors.profileImage}</p>
              )}
            </div>

            {/* Quick action: Remove or regenerate id */}
            <div className="p-4 bg-gray-50 rounded-lg border text-sm">
              <p className="font-semibold">Quick actions</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => setFormData({ ...formData, id: generateManagerId() })}
                  className="px-3 py-1 border rounded">New ID</button>
                <button
                  onClick={() => setFormData({ ...formData, profileImage: null })}
                  className="px-3 py-1 border rounded">Clear Image</button>
              </div>
            </div>
          </div>

          {/* Middle column: Main inputs (two-column stacked areas) */}
          <div className=" [space-y-6">
            {/* Basic Info */}
            {step === 1 && (
              <div className="p-10 w-[50vw] h-[85.5vh] border rounded-lg bg-white">
                <h3 className="font-semibold mb-3">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium"> Name</label>
                    <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border px-3 py-2 rounded" />
                    {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
                  </div>
 <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border px-3 py-2 rounded" />
                    {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border px-3 py-2 rounded" />
                    {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border px-3 py-2 rounded" />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Date of Birth</label>
                    <input type="date" value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })} className="w-full border px-3 py-2 rounded" />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Gender</label>
                    <div className="flex gap-3 mt-2">
                      {['Male','Female','Other'].map((g) => (
                        <label key={g} className="flex items-center gap-2">
                          <input type="radio" checked={formData.gender === g} onChange={() => setFormData({ ...formData, gender: g })} /> <span className="text-sm">{g}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-medium">Address</label>
                    <textarea value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full border px-3 py-2 rounded h-20" />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button onClick={() => onClose && onClose()} className="px-4 py-2 border rounded">Cancel</button>
                  <button onClick={() => handleNext(1)} className="px-4 py-2 bg-blue-600 text-white rounded">Next →</button>
                </div>
              </div>
            )}

            {/* Role & Employment */}
            {step === 2 && (
              <div className="p-10 w-[63vw]  h-[85vh] border rounded-lg bg-white">
                <h3 className="font-semibold mb-6 text-[25px]">Post / Role </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div>
                    <label className="text-sm font-medium">Department</label>
                    <input value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })} className="w-full border px-3 py-2 rounded" />
                    {errors.department && <p className="text-xs text-red-600">{errors.department}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium">Position / Title</label>
                    <input value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} className="w-full border px-3 py-2 rounded" />
                    {errors.position && <p className="text-xs text-red-600">{errors.position}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium">Joining Date</label>
                    <input type="date" value={formData.joiningDate} onChange={(e) => setFormData({ ...formData, joiningDate: e.target.value })} className="w-full border px-3 py-2 rounded" />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Experience (years)</label>
                    <input value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} className="w-full border px-3 py-2 rounded" />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Manager Type</label>
                    <select value={formData.employmentType} onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })} className="w-full border px-3 py-2 rounded">
                      <option>Project Manager</option>
                      <option>Client Manager</option>
                      <option>Contract</option>
                      <option>Intern</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Work Mode</label>
                    <select value={formData.workMode} onChange={(e) => setFormData({ ...formData, workMode: e.target.value })} className="w-full border px-3 py-2 rounded">
                      <option>On-site</option>
                      <option>Hybrid</option>
                      <option>Remote</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Reporting To</label>
                    <input value={formData.reportingTo} onChange={(e) => setFormData({ ...formData, reportingTo: e.target.value })} className="w-full border px-3 py-2 rounded" />
                  </div>

                  <div>
                    <label className="text-sm font-medium">CTC (₹/year)</label>
                    <input value={formData.ctc} onChange={(e) => setFormData({ ...formData, ctc: e.target.value })} className="w-full border px-3 py-2 rounded" />
                  </div>
                </div>

                <div className="flex justify gap-140 pt-12">
                  <button onClick={handleBack} className="px-4 py-2 border rounded  ">← Back</button>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(3)} className="px-4 py-2 border rounded">Skip to Qualifications</button>
                    <button onClick={() => handleNext(2)} className="px-4 py-2 bg-blue-600 text-white rounded">Next →</button>
                  </div>
                </div>
              </div>
            )}

            {/* Qualifications */}
            {step === 3 && (
              <div className="p-4 border w-[63vw]  h-[85vh] rounded-lg bg-white">
                <h3 className="font-semibold mb-3">Qualification & Notes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Highest Degree</label>
                    <input value={formData.highestDegree} onChange={(e) => setFormData({ ...formData, highestDegree: e.target.value })} className="w-full border px-3 py-2 rounded" />
                    {errors.highestDegree && <p className="text-xs text-red-600">{errors.highestDegree}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium">University / Institute</label>
                    <input value={formData.university} onChange={(e) => setFormData({ ...formData, university: e.target.value })} className="w-full border px-3 py-2 rounded" />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-medium">Key Skills (comma separated)</label>
                    <input value={formData.keySkills} onChange={(e) => setFormData({ ...formData, keySkills: e.target.value })} className="w-full border px-3 py-2 rounded" />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-medium">Notes</label>
                    <textarea value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="w-full border px-3 py-2 rounded h-24" />
                  </div>
                </div>

                <div className="flex justify-between gap-3 pt-4">
                  <button onClick={handleBack} className="px-4 py-2 border rounded">← Back</button>
                  <button onClick={() => setStep(4)} className="px-4 py-2 bg-blue-600 text-white rounded">Next →</button>
                </div>
              </div>
            )}

            {/* Confirmation, Signature & Password */}
            {step === 4 && (
              <div className="p-4 border w-[63vw]  h-[85vh]  rounded-lg bg-white">
                <h3 className="font-semibold mb-3">Confirmation & Create Portal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium">Confirmation Message</label>
                    <textarea value={formData.confirmationMessage} onChange={(e) => setFormData({ ...formData, confirmationMessage: e.target.value })} className="w-full border px-3 py-2 rounded h-20" />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Digital Signature (type full name)</label>
                    <input value={formData.digitalSignature} onChange={(e) => setFormData({ ...formData, digitalSignature: e.target.value })} className="w-full border px-3 py-2 rounded" />
                    {errors.digitalSignature && <p className="text-xs text-red-600">{errors.digitalSignature}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium">Create Portal Password</label>
                    <div className="flex items-center gap-2">
                      <input type={showPassword ? 'text' : 'password'} value={formData.portalPassword} onChange={(e) => setFormData({ ...formData, portalPassword: e.target.value })} className="w-full border px-3 py-2 rounded" />
                      <button type="button" onClick={() => setShowPassword((s) => !s)} className="px-3">
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {errors.portalPassword && <p className="text-xs text-red-600">{errors.portalPassword}</p>}
                  </div>
                </div>

                <div className="flex justify-between gap-3 pt-4">
                  <button onClick={handleBack} className="px-4 py-2 border rounded">← Back</button>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(3)} className="px-4 py-2 border rounded">Edit</button>
                    <button onClick={() => setStep(6)} className="px-4 py-2 bg-gray-100 rounded">Preview</button>
                    <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded">Done</button>
                  </div>
                </div>
              </div>
            )}

            {/* Preview Step (read-only) */}
            {step === 6 && (
              <div className="p-4 border w-[63vw] h-[100] rounded-lg bg-white">
                <h3 className="font-semibold mb-3">Final Preview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1 flex flex-col items-center">
                    <div className="w-36 h-36 rounded-full overflow-hidden border">
                      {formData.profileImage ? (
                        <img src={URL.createObjectURL(formData.profileImage)} className="w-full h-full object-cover" alt="pf" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
                      )}
                    </div>
                    <p className="mt-3 font-medium">{formData.name}</p>
                    <p className="text-sm text-gray-500">{formData.position} • {formData.department}</p>
                  </div>

                  <div className="md:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div><b>ID:</b> {formData.id}</div>
                      <div><b>Status:</b> {formData.status}</div>
                      <div><b>Email:</b> {formData.email}</div>
                      <div><b>Phone:</b> {formData.phone}</div>
                      <div><b>DOB:</b> {formData.dob}</div>
                      <div><b>Gender:</b> {formData.gender}</div>
                      <div className="md:col-span-2"><b>Address:</b> {formData.address}</div>
                      <div><b>Joining:</b> {formData.joiningDate}</div>
                      <div><b>Experience:</b> {formData.experience} years</div>
                      <div><b>Employment:</b> {formData.employmentType}</div>
                      <div><b>Work Mode:</b> {formData.workMode}</div>
                      <div><b>Reporting To:</b> {formData.reportingTo}</div>
                      <div><b>CTC:</b> {formData.ctc}</div>
                      <div className="md:col-span-2"><b>Degree:</b> {formData.highestDegree} • {formData.university}</div>
                      <div className="md:col-span-2"><b>Skills:</b> {formData.keySkills}</div>
                      <div className="md:col-span-2"><b>Notes:</b> {formData.notes}</div>
                      <div className="md:col-span-2"><b>Confirmation:</b> {formData.confirmationMessage}</div>
                      <div className="md:col-span-2"><b>Signature:</b> {formData.digitalSignature}</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between gap-3 pt-4">
                  <button onClick={() => setStep(4)} className="px-4 py-2 border rounded">← Back</button>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(1)} className="px-4 py-2 border rounded">Edit</button>
                    <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded">Confirm & Save</button>
                  </div>
                </div>
              </div>
            )}

            {/* Success / Done Step */}
            {step === 5 && (
              <div className="p-10 text-center">
                <h3 className="text-2xl font-bold text-green-600">🎉 Manager added successfully!</h3>
                <p className="mt-3 text-gray-600">You can add another manager or close this dialog.</p>
                <div className="flex justify-center gap-3 mt-6">
                  <button onClick={resetForm} className="px-4 py-2 bg-blue-600 text-white rounded">Add Another</button>
                  <button onClick={() => onClose && onClose()} className="px-4 py-2 border rounded">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 