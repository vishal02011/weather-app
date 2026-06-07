import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";


export const Tempgraph = ({dat}) => {
   const data = dat.hourly.temperature_2m
  .filter((_, i) => i % 3 === 0)
  .slice(0, 8)
  .map((temp, i) => ({
    time: new Date(dat.hourly.time[i * 3]).toLocaleTimeString([], {
      hour: "numeric",
      hour12: true,
    }),
    temp,
  }));
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