import React, { useEffect } from "react";
import styled from "styled-components";
import { ReactECharts } from '../ReactEcharts';
import { ReactEChartsProps } from '../ReactEcharts';

interface IProps {
    data : any;
}

const DevisReview: React.FC<IProps> = ({ data  }) => {

    let datagraph = Array();

    for (let i = 0; i < data.length; i++) {
        datagraph= [
        ...datagraph,
        { name: data[i].statusPayment, value: data[i].name },
        ]
    }


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
        type: 'bar',
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
        data: datagraph,
      },
    ],
  };
    return (
      <Container>
          <ReactECharts option={option} />
      </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 50vh;
`;


export default DevisReview;