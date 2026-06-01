import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { time: "6 AM", temp: 28 },
  { time: "9 AM", temp: 30 },
  { time: "12 PM", temp: 34 },
  { time: "3 PM", temp: 36 },
  { time: "6 PM", temp: 35 },
  { time: "9 PM", temp: 31 },
  { time: "12 AM", temp: 29 },
  { time: "3 AM", temp: 27 },
];

export const Tempgraph = () => {
  return (
    <div className="graph">
      <h3>Temperature Trend</h3>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="time"
            stroke="#ffffff60"
            tick={{ className: "graph-axis-text" }}
          />

          <YAxis
            stroke="#ffffff60"
            tick={{ className: "graph-axis-text" }}
            domain={["dataMin - 2", "dataMax + 2"]}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0b1d3b",
              border: "none",
              borderRadius: "8px",
            }}
          />

          <Area
            type="monotone"
            dataKey="temp"
            stroke="#3b82f6"
            strokeWidth={2}
            fill="url(#tempGradient)"
            dot={{ fill: "#3b82f6", r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};