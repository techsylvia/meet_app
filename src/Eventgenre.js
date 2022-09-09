import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  const colors = [
    "#f1486c",
    "#a2b62d",
    "#0cfbac",
    "#95a26c",
    "#e6354c",
    "#f02ba7",
    "#ae92e4",
    "#2972a7",
    "#88776a",
  ];

  const getData = () => {
    const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];

    return genres.map((genre) => {
      const value = events.filter((event) =>
        event.summary.split(" ").includes(genre)
      ).length;
      return {
        name: genre,
        value: value,
      };
    });
  };

  useEffect(() => {
    setData(() => getData());
  }, [events]);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    name,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#2F5373"
        fontSize="13px"
        letterSpacing={-0.35}
        fontWeight="600"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${name}  ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer className="responsiveContainerPie" height={180}>
      <PieChart>
        <Pie
          className="pie"
          data={data.filter((data) => data.value >= 1)}
          labelLine={false}
          label={renderCustomizedLabel}
          cx={"50%"}
          cy={"50%"}
          innerRadius={20}
          outerRadius={"110%"}
          fill="#fff"
          stroke="black"
          dataKey="value"
          isAnimationActive={true}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
