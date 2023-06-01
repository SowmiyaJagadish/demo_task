import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, AreaChart, Area, BarChart, Bar
} from 'recharts';

var pdata = [
  {
    name: 'Python',
    student: 13,
    fees: 10
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10
  },
  {
    name: 'Java',
    student: 10,
    fees: 5
  },
  {
    name: 'C#',
    student: 9,
    fees: 4
  },
  {
    name: 'C++',
    student: 10,
    fees: 8
  },
];

function Recharts() {
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} width={500} height={300}
          margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" interval={'preserveStartEnd'} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Recharts;