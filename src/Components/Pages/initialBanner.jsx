import React, { useMemo, useState } from "react";
import {
  Search,
  Pencil,
  Trash2,
  GripVertical,
  Lightbulb,
} from "lucide-react";

const initialBanners = [
  {
    id: 1,
    thumbnail: "🛎️",
    title: "Summer Sale Hero",
    type: "Header",
    content: "Image",
    status: "Active",
    schedule: ["2025-06-01", "2025-08-31"],
  },
  {
    id: 2,
    thumbnail: "🎒",
    title: "Back to School",
    type: "Header",
    content: "Image",
    status: "Active",
    schedule: ["2025-08-01", "2025-09-30"],
  },
  {
    id: 3,
    thumbnail: "❄️",
    title: "Winter Collection",
    type: "Header",
    content: "Image",
    status: "Inactive",
    schedule: ["2025-11-01", "2026-01-31"],
  },
  {
    id: 4,
    thumbnail: "🎯",
    title: "Mid Promo Banner",
    type: "Mid",
    content: "Image",
    status: "Active",
    schedule: ["2025-07-01", "2025-10-01"],
  },
  {
    id: 5,
    thumbnail: "📣",
    title: "Google Ad Unit A",
    type: "Mid",
    content: "Ad Code",
    status: "Active",
    schedule: ["2025-01-01", "2025-12-31"],
  },
  {
    id: 6,
    thumbnail: "◀️",
    title: "Left Sidebar Ad",
    type: "Left",
    content: "Image",
    status: "Active",
    schedule: ["2025-05-01", "2025-10-31"],
  },
  {
    id: 7,
    thumbnail: "▶️",
    title: "Right Ad 300x250",
    type: "Right",
    content: "Image",
    status: "Expired",
    schedule: ["2025-01-01", "2025-04-30"],
  },
  {
    id: 8,
    thumbnail: "📢",
    title: "Right Sidebar Pro",
    type: "Right",
    content: "Ad Code",
    status: "Active",
    schedule: ["2025-06-01", "2025-12-31"],
  },
];

export default function AllBanners() {
  const [banners, setBanners] = useState(initialBanners);
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [search, setSearch] = useState("");

  const filteredBanners = useMemo(() => {
    return banners.filter((banner) => {
      const matchType =
        typeFilter === "All Types" || banner.type === typeFilter;

      const matchStatus =
        statusFilter === "All Status" || banner.status === statusFilter;

      const matchSearch = banner.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchType && matchStatus && matchSearch;
    });
  }, [banners, typeFilter, statusFilter, search]);

  const handleToggleStatus = (id) => {
    setBanners((prev) =>
      prev.map((banner) =>
        banner.id === id
          ? {
              ...banner,
              status: banner.status === "Active" ? "Inactive" : "Active",
            }
          : banner
      )
    );
  };

  const handleDelete = (id) => {
    setBanners((prev) => prev.filter((banner) => banner.id !== id));
  };

  const handleAddBanner = () => {
    const newBanner = {
      id: Date.now(),
      thumbnail: "🖼️",
      title: "New Banner",
      type: "Header",
      content: "Image",
      status: "Active",
      schedule: ["2026-01-01", "2026-12-31"],
    };

    setBanners((prev) => [newBanner, ...prev]);
  };

  const typeColor = {
    Header: "bg-blue-100 text-blue-600",
    Mid: "bg-yellow-100 text-yellow-700",
    Left: "bg-purple-100 text-purple-600",
    Right: "bg-orange-100 text-orange-600",
  };

  const contentColor = {
    Image: "bg-green-50 text-green-700",
    "Ad Code": "bg-red-50 text-red-500",
  };

  const statusColor = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-gray-100 text-gray-500",
    Expired: "bg-red-100 text-red-500",
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7] px-5 py-4 font-sans text-[#1f2937]">
      {/* Header */}
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h1 className="text-[18px] font-bold text-[#111827]">All Banners</h1>
          <p className="mt-1 text-[11px] text-gray-500">
            Manage all banner placements from one place.
          </p>
        </div>

        <button
          onClick={handleAddBanner}
          className="rounded-[5px] bg-[#ef476f] px-4 py-2 text-[11px] font-semibold text-white hover:bg-[#dd355e]"
        >
          + Add Banner
        </button>
      </div>

      {/* Info Bar */}
      <div className="mb-4 flex items-center gap-2 rounded-[4px] border border-[#bcd7ff] bg-[#eef6ff] px-4 py-3 text-[11px] text-[#2563eb]">
        <Lightbulb size={14} className="text-yellow-500" />
        Use the filters below to narrow by type, status, or date range.
      </div>

      {/* Filters */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="h-[35px] w-[145px] rounded border border-gray-300 bg-white px-3 text-[11px] outline-none"
        >
          <option>All Types</option>
          <option>Header</option>
          <option>Mid</option>
          <option>Left</option>
          <option>Right</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="h-[35px] w-[145px] rounded border border-gray-300 bg-white px-3 text-[11px] outline-none"
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Expired</option>
        </select>

        <div className="flex h-[35px] w-[210px] items-center gap-2 rounded border border-gray-300 bg-white px-3">
          <Search size={14} className="text-gray-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search banners..."
            className="w-full text-[11px] outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-[5px] border border-gray-300 bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="h-[42px] bg-[#f8fafc] text-left text-[9px] uppercase tracking-wide text-[#334155]">
              <th className="w-[45px] px-4"></th>
              <th className="w-[135px] px-4">Thumbnail</th>
              <th className="px-4">Title</th>
              <th className="px-4">Type</th>
              <th className="px-4">Content</th>
              <th className="px-4">Status</th>
              <th className="px-4">Schedule</th>
              <th className="px-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredBanners.map((banner) => (
              <tr
                key={banner.id}
                className="h-[61px] border-t border-gray-300 text-[11px] hover:bg-gray-50"
              >
                <td className="px-4 text-gray-400">
                  <GripVertical size={15} />
                </td>

                <td className="px-4">
                  <div className="flex h-[35px] w-[58px] items-center justify-center rounded border border-gray-300 bg-[#f1f5f9] text-[21px]">
                    {banner.thumbnail}
                  </div>
                </td>

                <td className="px-4">
                  <p className="font-medium text-[#111827]">{banner.title}</p>
                  <p className="text-[10px] text-red-400">ID #{banner.id}</p>
                </td>

                <td className="px-4">
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-medium ${
                      typeColor[banner.type]
                    }`}
                  >
                    {banner.type}
                  </span>
                </td>

                <td className="px-4">
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-medium ${
                      contentColor[banner.content]
                    }`}
                  >
                    {banner.content}
                  </span>
                </td>

                <td className="px-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-medium ${
                        statusColor[banner.status]
                      }`}
                    >
                      {banner.status}
                    </span>

                    <button
                      onClick={() => handleToggleStatus(banner.id)}
                      className={`relative h-[19px] w-[36px] rounded-full transition ${
                        banner.status === "Active"
                          ? "bg-[#22c55e]"
                          : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`absolute top-[3px] h-[13px] w-[13px] rounded-full bg-white transition ${
                          banner.status === "Active"
                            ? "left-[20px]"
                            : "left-[3px]"
                        }`}
                      />
                    </button>
                  </div>
                </td>

                <td className="px-4 text-[10px] text-[#475569]">
                  <p>{banner.schedule[0]}</p>
                  <p>→ {banner.schedule[1]}</p>
                </td>

                <td className="px-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert(`Edit ${banner.title}`)}
                      className="flex h-[30px] w-[30px] items-center justify-center rounded border border-gray-300 bg-white text-yellow-500 hover:bg-yellow-50"
                    >
                      <Pencil size={14} />
                    </button>

                    <button
                      onClick={() => handleDelete(banner.id)}
                      className="flex h-[30px] w-[30px] items-center justify-center rounded border border-red-200 bg-red-50 text-red-400 hover:bg-red-100"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredBanners.length === 0 && (
              <tr>
                <td
                  colSpan="8"
                  className="py-8 text-center text-[13px] text-gray-500"
                >
                  No banners found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}