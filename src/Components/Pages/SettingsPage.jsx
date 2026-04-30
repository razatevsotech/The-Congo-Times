import React, { useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "BannerCMS",
    timeZone: "UTC+5:00 (PKT)",
    dateFormat: "DD/MM/YYYY",
    maxFileSize: 2,
    formats: {
      jpg: true,
      png: true,
      webp: true,
      gif: false,
    },
    loginAttemptLimit: 5,
    blockDuration: 15,
    passwordResetExpiry: 15,
    xssProtection: true,
  });

  const handleChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleFormatChange = (key) => {
    setSettings((prev) => ({
      ...prev,
      formats: {
        ...prev.formats,
        [key]: !prev.formats[key],
      },
    }));
  };

  const handleSave = () => {
    localStorage.setItem("bannerCMSSettings", JSON.stringify(settings));
    alert("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7] px-2 py-3 font-sans text-[#111827]">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h1 className="text-[16px] font-semibold leading-none">Settings</h1>
          <p className="mt-2 text-[10px] text-[#64748b]">
            Configure your BannerCMS instance.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="h-[30px] rounded-[4px] bg-[#ef476f] px-4 text-[10px] font-semibold text-white hover:bg-[#dd3b62]"
        >
          Save Changes
        </button>
      </div>

      <Section title="General">
        <SettingRow label="Site Name" desc="Shown in the admin panel header">
          <input
            value={settings.siteName}
            onChange={(e) => handleChange("siteName", e.target.value)}
            className="h-[30px] w-[155px] rounded border border-[#cbd5e1] bg-white px-2 text-[10px] outline-none"
          />
        </SettingRow>

        <SettingRow label="Time Zone" desc="Used for scheduling banners">
          <select
            value={settings.timeZone}
            onChange={(e) => handleChange("timeZone", e.target.value)}
            className="h-[30px] w-[155px] rounded border border-[#cbd5e1] bg-white px-2 text-[10px] outline-none"
          >
            <option>UTC+5:00 (PKT)</option>
            <option>UTC+0:00 (GMT)</option>
            <option>UTC-5:00 (EST)</option>
            <option>UTC+1:00 (CET)</option>
          </select>
        </SettingRow>

        <SettingRow label="Date Format" desc="How dates display throughout the panel">
          <select
            value={settings.dateFormat}
            onChange={(e) => handleChange("dateFormat", e.target.value)}
            className="h-[30px] w-[155px] rounded border border-[#cbd5e1] bg-white px-2 text-[10px] outline-none"
          >
            <option>DD/MM/YYYY</option>
            <option>MM/DD/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </SettingRow>
      </Section>

      <Section title="Upload Limits">
        <SettingRow label="Max File Size" desc="Per image upload">
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={settings.maxFileSize}
              onChange={(e) => handleChange("maxFileSize", e.target.value)}
              className="h-[30px] w-[60px] rounded border border-[#cbd5e1] bg-white px-2 text-[10px] outline-none"
            />
            <span className="text-[10px] text-[#64748b]">MB</span>
          </div>
        </SettingRow>

        <SettingRow label="Allowed Formats" desc="Accepted file types">
          <div className="flex items-center gap-2 text-[10px] text-[#334155]">
            {["jpg", "png", "webp", "gif"].map((format) => (
              <label key={format} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={settings.formats[format]}
                  onChange={() => handleFormatChange(format)}
                  className="h-[10px] w-[10px]"
                />
                {format.toUpperCase()}
              </label>
            ))}
          </div>
        </SettingRow>
      </Section>

      <Section title="Security">
        <SettingRow label="Login Attempt Limit" desc="Block after N failed attempts">
          <input
            type="number"
            value={settings.loginAttemptLimit}
            onChange={(e) =>
              handleChange("loginAttemptLimit", e.target.value)
            }
            className="h-[30px] w-[60px] rounded border border-[#cbd5e1] bg-white px-2 text-[10px] outline-none"
          />
        </SettingRow>

        <SettingRow label="Block Duration" desc="Minutes to block after limit hit">
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={settings.blockDuration}
              onChange={(e) => handleChange("blockDuration", e.target.value)}
              className="h-[30px] w-[60px] rounded border border-[#cbd5e1] bg-white px-2 text-[10px] outline-none"
            />
            <span className="text-[10px] text-[#64748b]">min</span>
          </div>
        </SettingRow>

        <SettingRow label="Password Reset Expiry" desc="Reset link validity">
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={settings.passwordResetExpiry}
              onChange={(e) =>
                handleChange("passwordResetExpiry", e.target.value)
              }
              className="h-[30px] w-[60px] rounded border border-[#cbd5e1] bg-white px-2 text-[10px] outline-none"
            />
            <span className="text-[10px] text-[#64748b]">min</span>
          </div>
        </SettingRow>

        <SettingRow label="XSS Protection For Ad Code" desc="Sanitize ad script input">
          <button
            onClick={() => handleChange("xssProtection", !settings.xssProtection)}
            className={`relative h-[18px] w-[34px] rounded-full transition ${
              settings.xssProtection ? "bg-[#22c55e]" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-[3px] h-[12px] w-[12px] rounded-full bg-white transition ${
                settings.xssProtection ? "left-[19px]" : "left-[3px]"
              }`}
            />
          </button>
        </SettingRow>
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-5 overflow-hidden rounded-[5px] border border-[#d8dee8] bg-white">
      <div className="border-b border-[#d8dee8] px-4 py-3 text-[11px] font-medium">
        {title}
      </div>
      {children}
    </div>
  );
}

function SettingRow({ label, desc, children }) {
  return (
    <div className="flex min-h-[54px] items-center justify-between border-b border-[#d8dee8] px-4 last:border-b-0">
      <div>
        <p className="text-[10px] font-medium text-[#334155]">{label}</p>
        <p className="mt-1 text-[9px] text-[#64748b]">{desc}</p>
      </div>
      {children}
    </div>
  );
}