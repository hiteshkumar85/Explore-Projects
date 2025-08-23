import { useState, useEffect } from "react";

export default function ProjectForm({ onSave, onCancel, initialData }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    client: "",
    startDate: "",
    deadline: "",
    progress: 0,
    status: "Planning",
  });

  // Load initial data if editing
  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-96 animate-scaleIn">
        <h3 className="text-xl font-bold mb-4 text-gray-800">
          {formData.id ? "✏️ Edit Project" : "➕ New Project"}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Project Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Client"
            value={formData.client}
            onChange={(e) =>
              setFormData({ ...formData, client: e.target.value })
            }
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) =>
              setFormData({ ...formData, startDate: e.target.value })
            }
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="date"
            value={formData.deadline}
            onChange={(e) =>
              setFormData({ ...formData, deadline: e.target.value })
            }
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="number"
            placeholder="Progress (%)"
            value={formData.progress}
            onChange={(e) =>
              setFormData({ ...formData, progress: e.target.value })
            }
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          >
            <option>Planning</option>
            <option>On Track</option>
            <option>Delayed</option>
            <option>Final Review</option>
          </select>

          <div className="flex justify-end gap-2 mt-5">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow hover:opacity-90"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      {/* Animation CSS */}
      {/* <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out;
        }
      `}</style> */}
    </div>
  );
}
