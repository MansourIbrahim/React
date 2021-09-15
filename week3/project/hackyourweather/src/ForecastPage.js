import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { useParams } from 'react-router';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const ForecastPage = (props) => {
  const { id } = props.match.params;

  const [data, setData] = useState([]);
  console.log(data);
  console.log(id);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?id=360630&cnt=5&appid=1fb943cf984aaf8d5a4a1c6c09291627`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <LineChart
        width={400}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};
