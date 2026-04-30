import React, { useMemo, useRef, useState } from "react";
import { Search, Upload, ArrowDownUp } from "lucide-react";

const initialFiles = [
  { id: 1, icon: "🛎️", name: "hero-summer.jpg", size: 1.2, type: "Image" },
  { id: 2, icon: "🎒", name: "school-banner.png", size: 0.8, type: "Image" },
  { id: 3, icon: "❄️", name: "winter-hero.webp", size: 1.5, type: "Image" },
  { id: 4, icon: "🎯", name: "promo-mid.jpg", size: 0.6, type: "Image" },
  { id: 5, icon: "◀️", name: "sidebar-left.png", size: 0.4, type: "Image" },
  { id: 6, icon: "📦", name: "product-001.jpg", size: 2.0, type: "Image" },
  { id: 7, icon: "🖤", name: "banner-black.webp", size: 0.9, type: "Image" },
  { id: 8, icon: "🔤", name: "logo-full.png", size: 0.2, type: "Image" },
  { id: 9, icon: "🔲", name: "bg-pattern.jpg", size: 1.8, type: "Image" },
  { id: 10, icon: "🎨", name: "icon-set.png", size: 0.3, type: "Image" },
  { id: 11, icon: "📄", name: "footer-ad.jpg", size: 0.7, type: "Image" },
  { id: 12, icon: "📱", name: "mobile-hero.webp", size: 1.1, type: "Image" },
];

export default function MediaLibrary() {
  const [files, setFiles] = useState(initialFiles);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All files");
  const [sortNewest, setSortNewest] = useState(true);
  const inputRef = useRef(null);

  const filteredFiles = useMemo(() => {
    let data = files.filter((file) => {
      const matchSearch = file.name.toLowerCase().includes(search.toLowerCase());
      const matchType = type === "All files" || file.type === type;
      return matchSearch && matchType;
    });

    data = [...data].sort((a, b) =>
      sortNewest ? b.id - a.id : a.id - b.id
    );

    return data;
  }, [files, search, type, sortNewest]);

  const usedStorage = files.reduce((total, file) => total + file.size, 0);
  const totalQuota = 100;
  const freeSpace = totalQuota - usedStorage;

  const handleUploadClick = () => {
    inputRef.current.click();
  };

  const handleUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);

    const newFiles = uploadedFiles.map((file, index) => ({
      id: Date.now() + index,
      icon: "🖼️",
      name: file.name,
      size: +(file.size / 1024 / 1024).toFixed(1),
      type: file.type.startsWith("image") ? "Image" : "Document",
    }));

    setFiles((prev) => [...newFiles, ...prev]);
    e.target.value = "";
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7] px-3 py-2 font-sans text-[#111827]">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h1 className="text-[17px] font-semibold leading-none">
            Media Library
          </h1>
          <p className="mt-2 text-[11px] text-[#6b7280]">
            Upload once, reuse everywhere. All your assets in one place.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setSortNewest((prev) => !prev)}
            className="flex h-[34px] items-center gap-1 rounded-[5px] border border-[#d8dee8] bg-white px-4 text-[12px] font-medium text-[#111827] hover:bg-gray-50"
          >
            <ArrowDownUp size={13} />
            Sort: {sortNewest ? "Newest" : "Oldest"}
          </button>

          <button
            onClick={handleUploadClick}
            className="flex h-[34px] items-center gap-1 rounded-[5px] bg-[#ef476f] px-4 text-[12px] font-semibold text-white hover:bg-[#df3b62]"
          >
            <Upload size={13} />
            Upload
          </button>

          <input
            ref={inputRef}
            type="file"
            multiple
            onChange={handleUpload}
            className="hidden"
          />
        </div>
      </div>

      <div className="mb-4 flex gap-2">
        <div className="flex h-[35px] w-[215px] items-center gap-2 rounded-[5px] border border-[#d8dee8] bg-white px-3">
          <Search size={14} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search files..."
            className="w-full bg-transparent text-[12px] outline-none placeholder:text-[#6b7280]"
          />
        </div>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="h-[35px] w-[175px] rounded-[5px] border border-[#d8dee8] bg-white px-3 text-[12px] outline-none"
        >
          <option>All files</option>
          <option>Image</option>
          <option>Document</option>
        </select>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-4">
        <StatCard value={files.length} label="Total files" />
        <StatCard value={`${usedStorage.toFixed(1)} MB`} label="Used storage" />
        <StatCard value={`${freeSpace.toFixed(1)} MB`} label="Free space" />
        <StatCard value={`${totalQuota} MB`} label="Total quota" />
      </div>

      <div className="flex flex-wrap gap-3">
        {filteredFiles.map((file) => (
          <div
            key={file.id}
            className="h-[91px] w-[84px] rounded-[5px] border border-[#d8dee8] bg-[#f8fafc] px-2 py-3 hover:border-[#b6c2d3] hover:bg-white"
          >
            <div className="flex h-[38px] items-center justify-center text-[28px]">
              {file.icon}
            </div>

            <p className="mt-2 truncate text-[9px] font-medium text-[#374151]">
              {file.name}
            </p>
            <p className="mt-1 text-[9px] text-[#6b7280]">{file.size} MB</p>
          </div>
        ))}

        {filteredFiles.length === 0 && (
          <p className="text-[13px] text-gray-500">No files found.</p>
        )}
      </div>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="h-[68px] rounded-[7px] border border-[#d8dee8] bg-white px-5 py-4">
      <h2 className="text-[24px] font-semibold leading-none text-[#020617]">
        {value}
      </h2>
      <p className="mt-4 text-[10px] text-[#64748b]">{label}</p>
    </div>
  );
}