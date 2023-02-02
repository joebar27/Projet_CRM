import styled from "styled-components";
import React from 'react';
import * as echarts from 'echarts';

interface IProps {

}



const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const AnnualReview: React.FC<IProps> = ({  }) => {

    const myChart = echarts.init(document.getElementById('chart') as HTMLDivElement);

    myChart.setOption({
        title: {
            text: 'ECharts Getting Started Example'
          },
          tooltip: {},
          xAxis: {
            data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
          },
          yAxis: {},
          series: [
            {
              name: 'sales',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
    });

    return (
      <Container>
          <div id="chart"></div>
      </Container>
    );
};


const Container = styled.div`
    width: 100%;
    height: 50vh;
`;

export default AnnualReview;