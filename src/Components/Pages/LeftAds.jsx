import React, { useState } from "react";
import { Pencil, Trash2, X } from "lucide-react";

const initialAds = [
  {
    id: 1,
    title: "Left Sidebar Ad",
    url: "https://example.com/sidebar",
    status: "Active",
    schedule: "2025-05-01 → 2025-10-31",
    preview: "◀",
    adType: "image",
  },
];

export default function LeftAds() {
  const [ads, setAds] = useState(initialAds);
  const [showForm, setShowForm] = useState(false);
  const [editingAd, setEditingAd] = useState(null);

  const [form, setForm] = useState({
    title: "",
    url: "",
    startDate: "",
    endDate: "",
    preview: "◀",
    adType: "image",
    scriptCode: "",
  });

  const openAddForm = () => {
    setEditingAd(null);
    setForm({
      title: "",
      url: "",
      startDate: "",
      endDate: "",
      preview: "◀",
      adType: "image",
      scriptCode: "",
    });
    setShowForm(true);
  };

  const openEditForm = (ad) => {
    const [startDate, endDate] = ad.schedule.split(" → ");

    setEditingAd(ad);
    setForm({
      title: ad.title,
      url: ad.adType === "script" ? "" : ad.url,
      startDate,
      endDate,
      preview: ad.preview,
      adType: ad.adType,
      scriptCode: ad.adType === "script" ? ad.url : "",
    });
    setShowForm(true);
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!form.title || !form.startDate || !form.endDate) {
      alert("Please fill title and schedule fields");
      return;
    }

    if (form.adType === "image" && !form.url) {
      alert("Please add target URL");
      return;
    }

    if (form.adType === "script" && !form.scriptCode) {
      alert("Please add script code");
      return;
    }

    const adData = {
      title: form.title,
      url: form.adType === "script" ? "(Script Ad)" : form.url,
      status: "Active",
      schedule: `${form.startDate} → ${form.endDate}`,
      preview: form.adType === "script" ? "📜" : form.preview,
      adType: form.adType,
    };

    if (editingAd) {
      setAds((prev) =>
        prev.map((ad) =>
          ad.id === editingAd.id
            ? { ...ad, ...adData, status: ad.status }
            : ad
        )
      );
    } else {
      setAds((prev) => [...prev, { id: Date.now(), ...adData }]);
    }

    setShowForm(false);
  };

  const deleteAd = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this ad?");
    if (!confirmDelete) return;

    setAds((prev) => prev.filter((ad) => ad.id !== id));
  };

  const toggleStatus = (id) => {
    setAds((prev) =>
      prev.map((ad) =>
        ad.id === id
          ? { ...ad, status: ad.status === "Active" ? "Inactive" : "Active" }
          : ad
      )
    );
  };

  const moveAd = (index, direction) => {
    const newAds = [...ads];
    const newIndex = index + direction;

    if (newIndex < 0 || newIndex >= newAds.length) return;

    [newAds[index], newAds[newIndex]] = [newAds[newIndex], newAds[index]];

    setAds(newAds);
  };

  return (
    <div>
      <div className="flex items-start justify-between mb-7">
        <div>
          <h2 className="text-[22px] font-semibold text-[#202036]">
            Right Lower Slider
          </h2>
          <p className="text-sm text-[#747596] mt-2">
            Sidebar ad placements — image or script-based.
          </p>
        </div>

        <button
          onClick={openAddForm}
          className="bg-[#ef4265] hover:bg-[#dc3658] text-white px-5 py-3 rounded-md text-sm font-semibold"
        >
          + Add Ad
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <form
            onSubmit={handleSave}
            className="w-full max-w-[540px] bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-semibold text-[#202036]">
                {editingAd ? "Edit Left Ad" : "Add Left Ad"}
              </h3>

              <button type="button" onClick={() => setShowForm(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <select
                value={form.adType}
                onChange={(e) => setForm({ ...form, adType: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#ef4265]"
              >
                <option value="image">Image Ad</option>
                <option value="script">Script Ad</option>
              </select>

              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Ad title"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#ef4265]"
              />

              {form.adType === "image" ? (
                <>
                  <input
                    value={form.url}
                    onChange={(e) => setForm({ ...form, url: e.target.value })}
                    placeholder="Target URL"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#ef4265]"
                  />

                  <input
                    value={form.preview}
                    onChange={(e) =>
                      setForm({ ...form, preview: e.target.value })
                    }
                    placeholder="Preview emoji/icon"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#ef4265]"
                  />
                </>
              ) : (
                <textarea
                  value={form.scriptCode}
                  onChange={(e) =>
                    setForm({ ...form, scriptCode: e.target.value })
                  }
                  placeholder="Paste AdSense/script code here"
                  rows="4"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#ef4265]"
                />
              )}

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
                Save Ad
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-b-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="h-[38px] bg-[#f8f9fc] border-b border-gray-200 text-[11px] uppercase tracking-wide text-[#45486b]">
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
            {ads.map((ad, index) => (
              <tr
                key={ad.id}
                className="h-[62px] border-b border-gray-200 last:border-b-0"
              >
                <td className="px-4">
                  <div className="flex flex-col">
                    <button
                      onClick={() => moveAd(index, -1)}
                      className="text-[#747596] hover:text-[#ef4265] leading-none"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => moveAd(index, 1)}
                      className="text-[#747596] hover:text-[#ef4265] leading-none"
                    >
                      ↓
                    </button>
                  </div>
                </td>

                <td className="text-[#363856]">{index + 1}</td>

                <td>
                  <div className="w-[54px] h-[36px] border border-gray-200 bg-[#f6f7fb] rounded-md flex items-center justify-center text-xl">
                    {ad.preview}
                  </div>
                </td>

                <td>
                  <p className="font-medium text-black">{ad.title}</p>
                  <p className="text-xs text-[#5f6085] mt-1">{ad.url}</p>
                </td>

                <td>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        ad.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {ad.status}
                    </span>

                    <button
                      onClick={() => toggleStatus(ad.id)}
                      className={`w-[38px] h-[20px] rounded-full p-[2px] transition ${
                        ad.status === "Active" ? "bg-green-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`block w-4 h-4 bg-white rounded-full transition ${
                          ad.status === "Active"
                            ? "translate-x-[18px]"
                            : "translate-x-0"
                        }`}
                      ></span>
                    </button>
                  </div>
                </td>

                <td className="text-[#3f4265]">{ad.schedule}</td>

                <td>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openEditForm(ad)}
                      className="flex items-center gap-1 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm"
                    >
                      <Pencil size={14} />
                      Edit
                    </button>

                    <button
                      onClick={() => deleteAd(ad.id)}
                      className="w-8 h-8 rounded-md border border-red-200 bg-red-50 text-red-400 hover:bg-red-100 flex items-center justify-center"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {ads.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-10 text-gray-500">
                  No left ads found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}