import React, { useState } from "react";
import { GripVertical, Pencil, Trash2, X } from "lucide-react";

const initialSlides = [
  {
    id: 1,
    title: "Summer Sale Hero",
    url: "https://example.com/sale",
    status: "Active",
    schedule: "2025-06-01 → 2025-08-31",
    preview: "🏖️",
  },
  {
    id: 2,
    title: "Back to School",
    url: "https://example.com/school",
    status: "Active",
    schedule: "2025-08-01 → 2025-09-30",
    preview: "🎒",
  },
  {
    id: 3,
    title: "Winter Collection",
    url: "https://example.com/winter",
    status: "Inactive",
    schedule: "2025-11-01 → 2026-01-31",
    preview: "❄️",
  },
];

export default function HeaderSlider() {
  const [slides, setSlides] = useState(initialSlides);
  const [showForm, setShowForm] = useState(false);
  const [editingSlide, setEditingSlide] = useState(null);

  const [form, setForm] = useState({
    title: "",
    url: "",
    startDate: "",
    endDate: "",
    preview: "🖼️",
  });

  const openAddForm = () => {
    setEditingSlide(null);
    setForm({
      title: "",
      url: "",
      startDate: "",
      endDate: "",
      preview: "🖼️",
    });
    setShowForm(true);
  };

  const openEditForm = (slide) => {
    setEditingSlide(slide);

    const [startDate, endDate] = slide.schedule.split(" → ");

    setForm({
      title: slide.title,
      url: slide.url,
      startDate,
      endDate,
      preview: slide.preview,
    });

    setShowForm(true);
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!form.title || !form.url || !form.startDate || !form.endDate) {
      alert("Please fill all fields");
      return;
    }

    if (editingSlide) {
      setSlides((prev) =>
        prev.map((slide) =>
          slide.id === editingSlide.id
            ? {
                ...slide,
                title: form.title,
                url: form.url,
                schedule: `${form.startDate} → ${form.endDate}`,
                preview: form.preview,
              }
            : slide
        )
      );
    } else {
      const newSlide = {
        id: Date.now(),
        title: form.title,
        url: form.url,
        status: "Active",
        schedule: `${form.startDate} → ${form.endDate}`,
        preview: form.preview,
      };

      setSlides((prev) => [...prev, newSlide]);
    }

    setShowForm(false);
  };

  const deleteSlide = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this slide?");
    if (!confirmDelete) return;

    setSlides((prev) => prev.filter((slide) => slide.id !== id));
  };

  const toggleStatus = (id) => {
    setSlides((prev) =>
      prev.map((slide) =>
        slide.id === id
          ? {
              ...slide,
              status: slide.status === "Active" ? "Inactive" : "Active",
            }
          : slide
      )
    );
  };

  const moveSlide = (index, direction) => {
    const newSlides = [...slides];
    const newIndex = index + direction;

    if (newIndex < 0 || newIndex >= newSlides.length) return;

    [newSlides[index], newSlides[newIndex]] = [
      newSlides[newIndex],
      newSlides[index],
    ];

    setSlides(newSlides);
  };

  return (
    <div>
      <div className="flex items-start justify-between mb-7">
        <div>
          <h2 className="text-[22px] font-semibold text-[#202036]">
            Header Slider
          </h2>
          <p className="text-sm text-[#747596] mt-2">
            Drag to reorder. Changes save automatically.
          </p>
        </div>

        <button
          onClick={openAddForm}
          className="bg-[#ef4265] hover:bg-[#dc3658] text-white px-5 py-3 rounded-md text-sm font-semibold"
        >
          + Add Slide
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <form
            onSubmit={handleSave}
            className="w-full max-w-[520px] bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-semibold text-[#202036]">
                {editingSlide ? "Edit Slide" : "Add Slide"}
              </h3>

              <button type="button" onClick={() => setShowForm(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <input
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                placeholder="Slide title"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#ef4265]"
              />

              <input
                value={form.url}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
                placeholder="Redirect URL"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#ef4265]"
              />

              <input
                value={form.preview}
                onChange={(e) =>
                  setForm({ ...form, preview: e.target.value })
                }
                placeholder="Preview emoji"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#ef4265]"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  value={form.startDate}
                  onChange={(e) =>
                    setForm({ ...form, startDate: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#ef4265]"
                />

                <input
                  type="date"
                  value={form.endDate}
                  onChange={(e) =>
                    setForm({ ...form, endDate: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#ef4265]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-5 py-3 rounded-lg bg-[#ef4265] text-white hover:bg-[#dc3658] text-sm font-semibold"
              >
                Save Slide
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-b-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="h-[36px] bg-[#f8f9fc] border-b border-gray-200 text-[11px] uppercase tracking-wide text-[#45486b]">
              <th className="w-[55px]"></th>
              <th className="w-[60px] text-left font-semibold">#</th>
              <th className="text-left font-semibold">Preview</th>
              <th className="text-left font-semibold">Title</th>
              <th className="text-left font-semibold">Status</th>
              <th className="text-left font-semibold">Schedule</th>
              <th className="text-left font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {slides.map((slide, index) => (
              <tr
                key={slide.id}
                className="h-[62px] border-b border-gray-200 last:border-b-0"
              >
                <td className="px-4">
                  <div className="flex flex-col">
                    <button
                      onClick={() => moveSlide(index, -1)}
                      className="text-[#747596] hover:text-[#ef4265] leading-none"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => moveSlide(index, 1)}
                      className="text-[#747596] hover:text-[#ef4265] leading-none"
                    >
                      ↓
                    </button>
                  </div>
                </td>

                <td className="text-[#363856]">{index + 1}</td>

                <td>
                  <div className="w-[54px] h-[34px] border border-gray-200 bg-[#f6f7fb] rounded-md flex items-center justify-center text-xl">
                    {slide.preview}
                  </div>
                </td>

                <td>
                  <p className="font-medium text-black">{slide.title}</p>
                  <p className="text-xs text-[#5f6085] mt-1">{slide.url}</p>
                </td>

                <td>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        slide.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {slide.status}
                    </span>

                    <button
                      onClick={() => toggleStatus(slide.id)}
                      className={`w-[38px] h-[20px] rounded-full p-[2px] transition ${
                        slide.status === "Active"
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`block w-4 h-4 bg-white rounded-full transition ${
                          slide.status === "Active"
                            ? "translate-x-[18px]"
                            : "translate-x-0"
                        }`}
                      ></span>
                    </button>
                  </div>
                </td>

                <td className="text-[#3f4265]">{slide.schedule}</td>

                <td>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openEditForm(slide)}
                      className="flex items-center gap-1 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm"
                    >
                      <Pencil size={14} />
                      Edit
                    </button>

                    <button
                      onClick={() => deleteSlide(slide.id)}
                      className="w-8 h-8 rounded-md border border-red-200 bg-red-50 text-red-400 hover:bg-red-100 flex items-center justify-center"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {slides.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-10 text-gray-500">
                  No slides found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}