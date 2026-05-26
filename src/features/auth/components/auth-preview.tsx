import en from "@/locale/en.json";

const { auth } = en;

const bars = [
  { label: "Jan", h: 40 },
  { label: "Feb", h: 55 },
  { label: "Mar", h: 48 },
  { label: "Apr", h: 70 },
  { label: "May", h: 63 },
  { label: "Jun", h: 85 },
  { label: "Jul", h: 74 },
];

const channels = [
  { name: "Email", pct: 82, color: "#2dd4bf" },
  { name: "Social", pct: 65, color: "#4da6e8" },
  { name: "Paid", pct: 54, color: "#fb923c" },
];

const LeftPreview = () => {
  return (
    <div className="hidden md:flex flex-col justify-center gap-3 bg-[#0d2d3a] p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <div>
          <p className="text-[11px] font-semibold tracking-widest text-[#6b9aaa] uppercase">
            {auth.analyticsOverview}
          </p>
          <p className="text-white text-sm font-bold mt-0.5">
            {auth.marketingDashboard}
          </p>
        </div>
        <span className="flex items-center gap-1.5 text-[10px] text-[#4ade80] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse inline-block" />
          {auth.live}
        </span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-2">
        {[
          {
            label: "Revenue",
            value: "$84.2K",
            change: "+12.4%",
            up: true,
            color: "text-white",
          },
          {
            label: "Conversions",
            value: "3,847",
            change: "+8.1%",
            up: true,
            color: "text-[#4da6e8]",
          },
          {
            label: "Churn Rate",
            value: "2.3%",
            change: "+0.4%",
            up: false,
            color: "text-[#fb923c]",
          },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="bg-[#173545] rounded-xl p-3 border border-white/5"
          >
            <p className="text-[9px] text-[#6b9aaa] font-medium uppercase tracking-wide">
              {kpi.label}
            </p>
            <p className={`text-base font-bold mt-1 ${kpi.color}`}>
              {kpi.value}
            </p>
            <p
              className={`text-[9px] mt-0.5 ${kpi.up ? "text-[#4ade80]" : "text-[#f87171]"}`}
            >
              {kpi.up ? "▲" : "▼"} {kpi.change}
            </p>
          </div>
        ))}
      </div>

      {/* Line Chart */}
      <div className="bg-[#173545] rounded-xl p-3 border border-white/5">
        <p className="text-[10px] font-semibold text-white mb-1">
          Campaign Performance
        </p>
        <svg viewBox="0 0 300 80" className="w-full">
          {/* Grid */}
          {[20, 40, 60].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="300"
              y2={y}
              stroke="#1e4a5e"
              strokeWidth="0.5"
            />
          ))}
          {/* Blue area */}
          <polygon
            points="0,65 42,52 84,58 126,40 168,32 210,22 252,15 300,10 300,80 0,80"
            fill="#4da6e820"
          />
          {/* Blue line */}
          <polyline
            points="0,65 42,52 84,58 126,40 168,32 210,22 252,15 300,10"
            fill="none"
            stroke="#4da6e8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Orange area */}
          <polygon
            points="0,74 42,70 84,68 126,64 168,60 210,57 252,53 300,50 300,80 0,80"
            fill="#fb923c18"
          />
          {/* Orange line */}
          <polyline
            points="0,74 42,70 84,68 126,64 168,60 210,57 252,53 300,50"
            fill="none"
            stroke="#fb923c"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Dots */}
          {[
            [0, 65],
            [126, 40],
            [252, 15],
            [300, 10],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.5" fill="#4da6e8" />
          ))}
          {[
            [0, 74],
            [126, 64],
            [252, 53],
            [300, 50],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.5" fill="#fb923c" />
          ))}
        </svg>
        <div className="flex gap-4 mt-1">
          <span className="flex items-center gap-1 text-[9px] text-[#6b9aaa]">
            <span className="w-2.5 h-1 rounded bg-[#4da6e8] inline-block" />{" "}
            Clicks
          </span>
          <span className="flex items-center gap-1 text-[9px] text-[#6b9aaa]">
            <span className="w-2.5 h-1 rounded bg-[#fb923c] inline-block" />{" "}
            Conversions
          </span>
        </div>
      </div>

      {/* Bar Chart + Donut Row */}
      <div className="grid grid-cols-2 gap-2">
        {/* Bar Chart */}
        <div className="bg-[#173545] rounded-xl p-3 border border-white/5">
          <p className="text-[10px] font-semibold text-white mb-2">Ad Spend</p>
          <div className="flex items-end gap-1 h-14">
            {bars.map((bar) => (
              <div
                key={bar.label}
                className="flex flex-col items-center gap-0.5 flex-1"
              >
                <div
                  className="w-full rounded-t-sm"
                  style={{
                    height: `${bar.h}%`,
                    background:
                      bar.label === "Jun"
                        ? "#fbbf24"
                        : bar.h > 70
                          ? "#fb923c"
                          : "#4da6e8",
                  }}
                />
                <span className="text-[7px] text-[#6b9aaa]">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Donut Chart */}
        <div className="bg-[#173545] rounded-xl p-3 border border-white/5">
          <p className="text-[10px] font-semibold text-white mb-1">
            Traffic Sources
          </p>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 80 80" className="w-14 h-14 shrink-0">
              <circle
                cx="40"
                cy="40"
                r="28"
                fill="none"
                stroke="#0d2d3a"
                strokeWidth="14"
              />
              <circle
                cx="40"
                cy="40"
                r="28"
                fill="none"
                stroke="#4da6e8"
                strokeWidth="14"
                strokeDasharray="70 106"
                strokeDashoffset="0"
                transform="rotate(-90 40 40)"
              />
              <circle
                cx="40"
                cy="40"
                r="28"
                fill="none"
                stroke="#2dd4bf"
                strokeWidth="14"
                strokeDasharray="44 132"
                strokeDashoffset="-70"
                transform="rotate(-90 40 40)"
              />
              <circle
                cx="40"
                cy="40"
                r="28"
                fill="none"
                stroke="#fb923c"
                strokeWidth="14"
                strokeDasharray="34 142"
                strokeDashoffset="-114"
                transform="rotate(-90 40 40)"
              />
              <circle
                cx="40"
                cy="40"
                r="28"
                fill="none"
                stroke="#f472b6"
                strokeWidth="14"
                strokeDasharray="28 148"
                strokeDashoffset="-148"
                transform="rotate(-90 40 40)"
              />
            </svg>
            <div className="flex flex-col gap-1">
              {[
                { label: "Organic", color: "#4da6e8", pct: "40%" },
                { label: "Referral", color: "#2dd4bf", pct: "25%" },
                { label: "Paid", color: "#fb923c", pct: "20%" },
                { label: "Social", color: "#f472b6", pct: "15%" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: s.color }}
                  />
                  <span className="text-[8px] text-[#6b9aaa]">{s.label}</span>
                  <span className="text-[8px] text-white ml-auto">{s.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Channel ROI Progress Bars */}
      <div className="bg-[#173545] rounded-xl p-3 border border-white/5">
        <p className="text-[10px] font-semibold text-white mb-2">Channel ROI</p>
        <div className="flex flex-col gap-2">
          {channels.map((ch) => (
            <div key={ch.name} className="flex items-center gap-2">
              <span className="text-[9px] text-[#6b9aaa] w-10 shrink-0">
                {ch.name}
              </span>
              <div className="flex-1 h-1.5 rounded-full bg-[#0d2d3a]">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${ch.pct}%`, background: ch.color }}
                />
              </div>
              <span
                className="text-[9px] font-semibold"
                style={{ color: ch.color }}
              >
                {ch.pct}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftPreview;
