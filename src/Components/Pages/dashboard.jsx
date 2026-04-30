import {
  CheckSquare,
  Clock3,
  Circle,
  BadgeIcon,
} from "lucide-react";

const stats = [
  {
    title: "Total Banners",
    value: "18",
    note: "↑ +3 this week",
    noteColor: "text-green-500",
    icon: BadgeIcon,
    iconBg: "bg-pink-50",
    valueColor: "text-[#1f2035]",
  },
  {
    title: "Active Banners",
    value: "12",
    note: "↑ 67% active",
    noteColor: "text-green-500",
    icon: CheckSquare,
    iconBg: "bg-green-50",
    valueColor: "text-green-500",
  },
  {
    title: "Scheduled",
    value: "4",
    note: "Next: Tomorrow",
    noteColor: "text-[#68698a]",
    icon: Clock3,
    iconBg: "bg-yellow-50",
    valueColor: "text-orange-400",
  },
  {
    title: "Expired",
    value: "2",
    note: "Need review",
    noteColor: "text-red-500",
    icon: Circle,
    iconBg: "bg-red-50",
    valueColor: "text-red-500",
  },
];

const clicks = [
  { day: "Mon", height: "h-[18px]" },
  { day: "Tue", height: "h-[28px]" },
  { day: "Wed", height: "h-[22px]" },
  { day: "Thu", height: "h-[34px]" },
  { day: "Fri", height: "h-[30px]" },
  { day: "Sat", height: "h-[42px]" },
  { day: "Sun", height: "h-[48px]" },
];

const placements = [
  {
    name: "Header Slider",
    value: "1,840",
    width: "70%",
    color: "bg-[#ef4265]",
  },
  {
    name: "Mid Slider",
    value: "1,230",
    width: "47%",
    color: "bg-[#12345a]",
  },
  {
    name: "Right Ads",
    value: "780",
    width: "30%",
    color: "bg-purple-600",
  },
  {
    name: "Left Ads",
    value: "441",
    width: "18%",
    color: "bg-orange-500",
  },
];

export default function Dashboard() {
  return (
    <div>
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-[22px] font-semibold text-[#202036]">
            Dashboard Overview
          </h2>
          <p className="mt-2 text-sm text-[#747596]">
            Welcome back! Here's what's happening with your banners.
          </p>
        </div>

        <p className="text-xs text-[#747596] mt-2">Last updated: just now</p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="h-[173px] bg-white border border-gray-200 rounded-lg p-5 flex flex-col justify-between"
            >
              <div
                className={`w-[38px] h-[38px] rounded-lg ${item.iconBg} flex items-center justify-center`}
              >
                <Icon size={22} className="text-black" />
              </div>

              <div>
                <h3 className={`text-[26px] font-bold ${item.valueColor}`}>
                  {item.value}
                </h3>
                <p className="text-xs text-[#68698a] mt-3">{item.title}</p>
                <p className={`text-[11px] mt-3 ${item.noteColor}`}>
                  {item.note}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-5">
        {/* Clicks Chart */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="h-[56px] px-5 flex items-center justify-between border-b border-gray-200">
            <h3 className="text-sm font-semibold text-[#303044]">
              Banner Clicks (Last 7 days)
            </h3>

            <span className="text-[11px] font-semibold text-green-600 bg-green-100 px-3 py-2 rounded-full">
              +18% vs prev week
            </span>
          </div>

          <div className="p-5">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-[26px] font-bold text-[#202036]">4,291</h2>
              <p className="text-xs text-[#747596] mt-3">total clicks</p>
            </div>

            <div className="flex items-end gap-1 h-[90px]">
              {clicks.map((bar) => (
                <div key={bar.day} className="flex-1">
                  <div
                    className={`${bar.height} bg-[#ef7588] rounded-t-sm`}
                  ></div>
                  <p className="text-[11px] text-[#747596] mt-2">{bar.day}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Placement */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="h-[56px] px-5 flex items-center border-b border-gray-200">
            <h3 className="text-sm font-semibold text-[#303044]">
              By Placement
            </h3>
          </div>

          <div className="p-5 space-y-5">
            {placements.map((item) => (
              <div key={item.name}>
                <div className="flex justify-between text-sm mb-2">
                  <p className="text-[#55566f]">{item.name}</p>
                  <p className="text-[#202036]">{item.value}</p>
                </div>

                <div className="h-[5px] bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: item.width }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}