import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import defaultUserImg from '../../../../assets/defaultUserImg.png';

export default function AddEmployee() {
  const { register, handleSubmit, watch, reset, setValue, getValues, formState: { errors }, trigger } = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      dob: "",
      gender: "Male",
      phone: "",
      address: "",
      status: "Active",
      joiningDate: "",
      salary: "",
      position: "employee",
      role: "",
      degree: "",
      institute: "",
      experience: "0",
      skills: "",
      accountHolder: "",
      bankName: "",
      ifsc: "",
      accountNumber: "",
      employeeId: "",
    },
    mode: "onChange"
  });

  const navigate = useNavigate();

  const [mode, setMode] = useState("form");
  const [currentStep, setCurrentStep] = useState(1);
  const lastEmployeeNumberRef = useRef(0);
  const [employeeId, setEmployeeId] = useState("");
  const profileFile = watch("profileImage");
  const resumeFile = watch("resume");
  const [profilePreview, setProfilePreview] = useState(defaultUserImg);

  // generate employee id
  function generateId() {
    const year = new Date().getFullYear();
    lastEmployeeNumberRef.current += 1;
    const padded = String(lastEmployeeNumberRef.current).padStart(3, "0");
    const id = `EMP${year}-${padded}`;
    setEmployeeId(id);
    setValue("employeeId", id);
  }

  useEffect(() => {
    generateId();
  }, []);

  useEffect(() => {
    if (profileFile && profileFile.length > 0) {
      const file = profileFile[0];
      const url = URL.createObjectURL(file);
      setProfilePreview(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setProfilePreview(defaultUserImg);
    }
  }, [profileFile]);

  function removeImage() {
    setValue("profileImage", null);
    setProfilePreview(defaultUserImg);
  }

  function nextStep() {
    if (currentStep < 4) setCurrentStep((s) => s + 1);
    else setMode("confirm");
  }

  function handleNextStep() {
    let stepFields = [];

    if (currentStep === 1) {
      stepFields = ["email", "password", "fullName", "dob", "phone"];
    } else if (currentStep === 2) {
      stepFields = ["email", "password", "joiningDate", "salary", "role"];
    } else if (currentStep === 3) {
      stepFields = ["email", "password", "resume"];
    } else {
      stepFields = ["email", "password"];
    }

    trigger(stepFields).then((isValid) => {
      if (isValid) {
        nextStep();
      }
    });
  }

  function prevStep() {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  }

  function backToForm() {
    setMode("form");
    setCurrentStep(1);
  }

  function onConfirm() {
    setMode("success");
  }

  function onReset() {
    reset();
    setProfilePreview(defaultUserImg);
    setMode("form");
    setCurrentStep(1);
    generateId();
  }

  const values = getValues();

  function progressStage() {
    if (mode === "form") return 1;
    if (mode === "confirm") return 2;
    return 3;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-pink-50 text-gray-900 p-2">
      <div className="relative w-[97%] h-[95vh] bg-white rounded-3xl shadow-2xl p-3 flex flex-col border border-gray-100">
        <h1 className="text-4xl font-extrabold text-center mb-3 text-blue-700 tracking-tight">Add Employee</h1>

        <div className="absolute left-4 top-4 flex justify-end mb-2">
          <button
            onClick={() => navigate("/dashboard/employee")}
            className="px-5 py-2 bg-gray-200 text-blue-700 rounded-lg font-semibold shadow hover:bg-blue-50 transition"
          >
            Back
          </button>
        </div>

        {/* Progress */}
        <div id="progressContainer" className="w-2/3 mx-auto flex items-center justify-between mb-5">
          {[1, 2, 3].map((n, idx) => {
            const stage = progressStage();
            const isCompleted = n < stage;
            const isActive = n === stage;
            return (
              <React.Fragment key={n}>
                <div className="flex items-center space-x-2">
                  <div
                    className={
                      "step-circle flex items-center justify-center w-12 h-12 rounded-full font-bold shadow " +
                      (isCompleted || isActive
                        ? "bg-blue-600 text-white border-2 border-blue-400"
                        : "border-2 border-gray-300 text-gray-400 bg-white")
                    }
                  >
                    {isCompleted ? (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : n}
                  </div>
                  <span className={"step-label font-semibold text-lg " + (isCompleted || isActive ? "text-blue-700" : "text-gray-400")}>
                    {n === 1 ? "Employee Details" : n === 2 ? "Confirmation" : "Success"}
                  </span>
                </div>
                {idx < 2 && (
                  <div
                    className={
                      "line flex-1 h-2 mx-4 rounded-full " +
                      (idx < stage - 1 ? "bg-gradient-to-r from-blue-400 to-pink-300" : "bg-gray-200")
                    }
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div id="formContainer" className={"flex flex-1 gap-10 " + (mode !== "form" ? "hidden" : "")}>
          {/* Left */}
          <div className="w-1/3 bg-white rounded-2xl p-4 flex flex-col items-center border border-gray-100 shadow">
            <div className="relative w-44 h-44 mb-6">
              <img id="profilePreview" src={profilePreview} className="w-44 h-44 rounded-full object-cover border-4 border-blue-600 shadow" alt="Profile" />
            </div>
            <div className="flex gap-2 mb-10">
              <label className="px-3 py-1 bg-blue-600 text-white rounded-lg cursor-pointer">
                Upload
                <input type="file" accept="image/*" className="hidden" {...register("profileImage")} />
              </label>
              <button onClick={removeImage} className="px-3 py-1 bg-red-500 text-white rounded-lg">Remove</button>
            </div>

            <label className="block w-full mb-1 font-semibold text-blue-700">Employee ID</label>
            <input id="employeeId" {...register("employeeId")} readOnly className="w-full p-2 rounded bg-gray-50 border border-gray-300 mb-2 outline-none" />

            <label className="block w-full font-semibold text-blue-700">Email <span className={`${errors.email ? 'text-red-600' : ''}`}>*</span></label>
            <div className="relative mb-2 w-full">
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required"
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email"
                  }
                })}
                type="email"
                className={`w-full p-2 rounded border outline-none ${errors.email ? 'border-red-600 bg-red-50' : 'border-gray-300 bg-gray-50'}`}
              />
              {errors.email && (
                <span className="absolute right-2 -bottom-5 text-xs text-red-600">
                  {errors.email.message}
                </span>
              )}
            </div>
            <label className="block w-full font-semibold text-blue-700">Password <span className={`${errors.password ? 'text-red-600' : ''}`}>*</span></label>
            <div className="relative mb-2 w-full">
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required"
                  },
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters"
                  }
                })}
                type="password"
                className={`w-full p-2 rounded outline-none border ${errors.password ? 'border-red-600 bg-red-50' : 'border-gray-300 bg-gray-50'}`}
              />
              {errors.password && (
                <span className="absolute right-2 -bottom-5 text-xs text-red-600 ">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="w-2/3 bg-white rounded-2xl p-4 flex flex-col border border-gray-100 shadow">
            <div className="grid grid-cols-4 gap-4 mb-4">
              {[
                { i: 1, t: "Personal" },
                { i: 2, t: "Other" },
                { i: 3, t: "Education" },
                { i: 4, t: "Bank" },
              ].map((tab) => (
                <div key={tab.i} className={"tabHeader text-center py-3 rounded-xl cursor-pointer font-semibold text-lg shadow " + (currentStep === tab.i ? "bg-blue-600 text-white" : "bg-gray-100 text-blue-700 hover:bg-blue-50 transition")}>
                  {tab.t}
                </div>
              ))}
            </div>

            <hr className="border-gray-200 mb-2" />

            <div id="formSteps" className="flex-1">
              {/* Step 1 */}
              <div className={currentStep === 1 ? "grid grid-cols-2 gap-3" : "hidden"}>
                <div className="relative">
                  <label className="block mb-1 font-medium text-blue-700">
                    Full Name <span className={`${errors.fullName ? 'text-red-600' : ''}`}>*</span>
                  </label>
                  <input
                    {...register("fullName", {
                      required: {
                        value: true,
                        message: "Full name is required"
                      },
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Enter a valid name"
                      },
                      onChange: (e) => {
                        setValue("fullName", e.target.value.toUpperCase());
                      }
                    })}
                    type="text"
                    className={`w-full p-3 rounded border outline-none ${errors.fullName ? 'border-red-600 bg-red-50' : 'border-gray-300 bg-gray-50'}`}
                  />
                  {errors.fullName && (
                    <span className="absolute right-2 -bottom-6 text-xs text-red-600">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <label className="block mb-1 font-medium text-blue-700">
                    Date of Birth <span className={`${errors.dob ? 'text-red-600' : ''}`}>*</span>
                  </label>
                  <input
                    {...register("dob", {
                      required: {
                        value: true,
                        message: "Date of birth is required"
                      },
                      validate: value => {
                        const today = new Date();
                        const dob = new Date(value);
                        const age = today.getFullYear() - dob.getFullYear();
                        return age >= 18 || "Employee must be at least 18 years old";
                      }
                    })}
                    type="date"
                    className={`w-full p-3 rounded border outline-none ${errors.dob ? 'border-red-600 bg-red-50' : 'border-gray-300 bg-gray-50'}`}
                  />
                  {errors.dob && (
                    <span className="absolute right-2 -bottom-6 text-xs text-red-600">
                      {errors.dob.message}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block mb-1 font-medium text-blue-700">Gender</label>
                  <select {...register("gender", { required: true })} className="w-full p-3 rounded bg-gray-50 border border-gray-300 outline-none">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block mb-1 font-medium text-blue-700">
                    Phone <span className={`${errors.phone ? 'text-red-600' : ''}`}>*</span>
                  </label>
                  <input
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Phone number is required"
                      },
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Enter a valid 10-digit phone number"
                      }
                    })}
                    type="text"
                    className={`w-full p-3 rounded border outline-none ${errors.phone ? 'border-red-600 bg-red-50' : 'border-gray-300 bg-gray-50'}`}
                  />
                  {errors.phone && (
                    <span className="absolute right-2 -bottom-6 text-xs text-red-600">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
                <div className="col-span-2">
                  <label className="block mb-1 font-medium text-blue-700">Address <span>(optional)</span></label>
                  <textarea {...register("address")} className="w-full p-3 rounded bg-gray-50 border border-gray-300" />
                </div>
              </div>

              {/* Step 2 */}
              <div className={currentStep === 2 ? "grid grid-cols-2 gap-3" : "hidden"}>
                <div>
                  <label className="block mb-1 font-medium text-blue-700">Status</label>
                  <select {...register("status", {
                    required: true
                  })} className="w-full p-3 rounded bg-gray-50 border border-gray-300 outline-none">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block mb-1 font-medium text-blue-700">Joining Date <span className={`${errors.joiningDate ? 'text-red-600' : ''}`}>*</span></label>
                  <input {...register("joiningDate", {
                    required: {
                      value: true,
                      message: "Joining date is required"
                    },
                    validate: value => {
                      const today = new Date();
                      const joiningDate = new Date(value);
                      return joiningDate >= today || "Joining date cannot be in the future";
                    }
                  })} type="date" className={`w-full p-3 rounded border outline-none ${errors.joiningDate ? 'bg-red-50 border-red-600' : 'bg-gray-50 border-gray-300'}`} />
                  {errors.joiningDate && (
                    <span className="text-xs text-red-600 absolute right-2 -bottom-5">
                      {errors.joiningDate.message}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <label className="block mb-1 font-medium text-blue-700">Salary(₨) <span className={`${errors.salary ? 'text-red-600' : ''}`}>*</span>
                  </label>
                  <input
                    {...register("salary", {
                      required: {
                        value: true,
                        message: "Salary is required"
                      },
                      min: {
                        value: 0,
                        message: "Salary must be a positive number"
                      },
                      onChange: (e) => {
                        let value = e.target.value.replace(/,/g, '');
                        if (!isNaN(value) && value !== "") {
                          value = Number(value).toLocaleString('en-IN');
                        }
                        setValue("salary", value);
                      }
                    })}
                    type="text"
                    inputMode="numeric"
                    className={`w-full p-3 rounded border outline-none ${errors.salary ? 'bg-red-50 border-red-600' : 'bg-gray-50 border-gray-300'}`}
                  />
                  {errors.salary && (
                    <span className="text-xs text-red-600 absolute right-2 -bottom-5">
                      {errors.salary.message}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block mb-1 font-medium text-blue-700">Position</label>
                  <input {...register("position")} type="text" className="w-full p-3 rounded bg-gray-50 border border-gray-300 outline-none" readOnly />
                </div>
                <div className="col-span-2 relative">
                  <label className="block mb-1 font-medium text-blue-700">Role <span className={`${errors.role ? 'text-red-600' : ''}`}>*</span></label>
                  <select
                    {...register("role", {
                      required: {
                        value: true,
                        message: "Role is required"
                      }
                    })}
                    className={`w-full p-3 rounded border outline-none ${errors.role ? 'bg-red-50 border-red-600' : 'bg-gray-50 border-gray-300'}`}
                  >
                    <option value="">Select Role</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="tester">Tester</option>
                    <option value="qa">Q&amp;A</option>
                  </select>
                  {errors.role && (
                    <span className="absolute right-2 -bottom-6 text-xs text-red-600">
                      {errors.role.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Step 3 */}
              <div className={currentStep === 3 ? "grid grid-cols-2 gap-3" : "hidden"}>
                <div>
                  <label className="block mb-1 font-medium text-blue-700">Highest Degree</label>
                  <input {...register("degree")} type="text" className="w-full p-3 rounded bg-gray-50 border border-gray-300 outline-none" />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-blue-700">Institute</label>
                  <input {...register("institute")} type="text" className="w-full p-3 rounded bg-gray-50 border border-gray-300 outline-none" />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-blue-700">Experience (Years)</label>
                  <input {...register("experience")} type="number" className="w-full p-3 rounded bg-gray-50 border border-gray-300 outline-none" />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-blue-700">Skills</label>
                  <input {...register("skills")} type="text" className="w-full p-3 rounded bg-gray-50 border border-gray-300 outline-none" />
                </div>
                <div className="col-span-2 relative">
                  <label className="block mb-1 font-medium text-blue-700">Resume <span className={`${errors.resume ? 'text-red-600' : ''}`}>*</span></label>
                  <input {...register("resume", {
                    required: {
                      value: true,
                      message: "Resume is required"
                    }
                  })} type="file" className={`w-full p-3 rounded outline-none border ${errors.resume ? 'bg-red-50 border-red-600' : 'bg-gray-50 border-gray-300'}`} />
                  {errors.resume && (
                    <span className="absolute right-2 -bottom-5 text-xs text-red-600">
                      {errors.resume.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Step 4 */}
              <div className={currentStep === 4 ? "grid grid-cols-2 gap-3" : "hidden"}>
                <div>
                  <label className="block mb-1 font-medium text-blue-700">Account Holder Name</label>
                  <input {...register("accountHolder")} type="text" className="w-full p-3 rounded bg-gray-50 border border-gray-300 outline-none" />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-blue-700">Bank Name</label>
                  <input {...register("bankName")} type="text" className="w-full p-3 rounded bg-gray-50 border border-gray-300 outline-none" />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-blue-700">IFSC Code</label>
                  <input {...register("ifsc")} type="text" className="w-full p-3 rounded bg-gray-50 border border-gray-300 outline-none" />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-blue-700">Account Number</label>
                  <input {...register("accountNumber")} type="text" className="w-full p-3 rounded bg-gray-50 border border-gray-300 outline-none" />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={prevStep} className="px-6 py-3 bg-gray-200 text-blue-700 rounded-xl font-semibold shadow hover:bg-blue-50 transition">Previous</button>
              <button onClick={handleNextStep} className="px-7 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700 transition">Next</button>
            </div>
          </div>
        </div>

        {/* Confirmation */}
        <div id="confirmationSection" className={`${mode === "confirm" ? "" : "hidden"} h-full bg-white p-4 rounded-2xl border border-gray-100 shadow`}>
          <form onSubmit={handleSubmit(() => onConfirm())}>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-2xl shadow border border-gray-100">
                <h3 className="text-xl font-bold mb-2 text-blue-700">Personal Details</h3>
                <hr className="border-blue-200 mb-1" />
                <p><strong>ID:</strong> {employeeId}</p>
                <p><strong>Email:</strong> {values.email}</p>
                <p><strong>Full Name:</strong> {values.fullName}</p>
                <p><strong>DOB:</strong> {values.dob}</p>
                <p><strong>Gender:</strong> {values.gender}</p>
                <p><strong>Phone:</strong> {values.phone}</p>
                <p><strong>Address:</strong> {values.address}</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-2xl shadow border border-gray-100">
                <h3 className="text-xl font-bold mb-2 text-blue-700">Job Details</h3>
                <hr className="border-blue-200 mb-1" />
                <p><strong>Status:</strong> {values.status}</p>
                <p><strong>Joining Date:</strong> {values.joiningDate}</p>
                <p><strong>Salary:</strong> ₹{values.salary}</p>
                <p><strong>Position:</strong> {values.position}</p>
                <p><strong>Role:</strong> {values.role}</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-2xl shadow border border-gray-100">
                <h3 className="text-xl font-bold mb-2 text-blue-700">Education Details</h3>
                <hr className="border-blue-200 mb-1" />
                <p><strong>Degree:</strong> {values.degree}</p>
                <p><strong>Institute:</strong> {values.institute}</p>
                <p><strong>Experience:</strong> {values.experience} years</p>
                <p><strong>Skills:</strong> {values.skills}</p>
                <p><strong>Resume:</strong> {resumeFile && resumeFile.length ? resumeFile[0].name : "Not Uploaded"}</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-2xl shadow border border-gray-100">
                <h3 className="text-xl font-bold mb-2 text-blue-700">Bank Details</h3>
                <hr className="border-blue-200 mb-1" />
                <p><strong>Account Holder:</strong> {values.accountHolder}</p>
                <p><strong>Bank:</strong> {values.bankName}</p>
                <p><strong>IFSC:</strong> {values.ifsc}</p>
                <p><strong>Account Number:</strong> {values.accountNumber}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-6">
              <button type="button" onClick={backToForm} className="px-6 py-3 bg-gray-200 text-blue-700 rounded-xl font-semibold shadow hover:bg-blue-50 transition">Back</button>
              <button type="submit" className="px-6 py-3 bg-green-500 text-white rounded-xl font-semibold shadow hover:bg-green-600 transition">Confirm</button>
            </div>
          </form>
        </div>

        {/* Success */}
        <div id="successSection" className={`${mode === "success" ? "" : "hidden"} text-center mt-10 p-12 bg-white rounded-2xl shadow-2xl border border-gray-100`}>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="w-28 h-28 flex items-center justify-center bg-green-500 rounded-full mb-6 animate-pulse shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-extrabold text-green-700">Employee Added Successfully!</h2>
            <p className="text-blue-700 text-xl">Employee ID: <span className="font-semibold text-gray-900">{employeeId}</span></p>
            <div className="flex gap-8 mt-8">
              <button onClick={onReset} className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700 transition duration-300">Add Another Employee</button>
              <button onClick={() => navigate('/dashboard/employee')} className="px-8 py-4 bg-gray-200 text-blue-700 rounded-xl font-semibold shadow hover:bg-blue-50 transition duration-300">Back to Home</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}