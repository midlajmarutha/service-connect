import React from "react";
import {
    CartesianGrid,
    Legend,
    Line,
    Tooltip,
    XAxis,
    YAxis,
    LineChart as LineChartContainer,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const LineChart = () => {
    return (
        <div className="flex w-full p-4 bg-white rounded-md shadow-md">
            <ResponsiveContainer width={"100%"} height={200}>
            <LineChartContainer
                width={730}
                height={250}
                data={data}
                margin={{right:10, left:10}}
            >
                <YAxis axisLine={false} tickLine={false} style={{fontFamily:"poppins"}} tick={{fill:"blue"}} className="text-xs"/>
                <CartesianGrid strokeDasharray="3 5" vertical={false}/>
                <Tooltip />
                <Line type="linear" dataKey="pv" stroke="#0000ff" />
            </LineChartContainer>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChart;
