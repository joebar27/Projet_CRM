import styled from "styled-components";
import React from 'react';
import { ReactECharts } from '../ReactEcharts';
import { ReactEChartsProps } from '../ReactEcharts';



interface IProps {
  data : any;
}

const AnnualReview: React.FC<IProps> = ({ data  }) => {

  let datagraph2 = Array();

  for (let i = 0; i < data.length; i++) {
    datagraph2= [
      ...datagraph2,
      { value: data[i].quantity, name: data[i].name },
    ]
  }
  console.log(datagraph2);

  const option: ReactEChartsProps["option"] =  {
    title: {
      text: 'Articles en stock ',
      subtext: 'Source: 2023',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        label: {
          show: true,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        data: datagraph2,
      },
    ],
  };
    return (
      <Container>
          <ReactECharts option={option} />
      </Container>
    );
};



const Container = styled.div`
    width: 100%;
    height: 50vh;
`;



export default AnnualReview;