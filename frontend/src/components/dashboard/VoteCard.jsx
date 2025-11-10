import React from "react";
import { Bar } from "@visx/shape";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { AxisBottom, AxisLeft } from "@visx/axis";

const VoteCard = ({ poll }) => {
  const data = poll.options.map((opt) => ({
    name: opt.text,
    votes: opt.voteCount,
  }));

  const width = 400;
  const height = 200;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const xScale = scaleBand({
    domain: data.map((d) => d.name),
    padding: 0.3,
  }).rangeRound([0, xMax]);

  const yScale = scaleLinear({
    domain: [0, Math.max(...data.map((d) => d.votes))],
  }).range([yMax, 0]);

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h3 className="font-semibold mb-2">{poll.title}</h3>
      <svg width={width} height={height}>
        <Group top={margin.top} left={margin.left}>
          {data.map((d) => {
            const barHeight = yMax - yScale(d.votes);
            return (
              <Bar
                key={d.name}
                x={xScale(d.name)}
                y={yMax - barHeight}
                width={xScale.bandwidth()}
                height={barHeight}
                fill="red"
                rx={4}
              />
            );
          })}
          <AxisBottom top={yMax} scale={xScale} />
          <AxisLeft scale={yScale} />
        </Group>
      </svg>
    </div>
  );
};

export default VoteCard;
