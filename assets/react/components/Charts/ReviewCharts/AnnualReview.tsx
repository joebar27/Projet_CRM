import styled from "styled-components";
import React from 'react';
import { ReactECharts } from '../ReactEcharts';
import { ReactEChartsProps } from '../ReactEcharts';

interface IProps {

}

const AnnualReview: React.FC<IProps> = ({  }) => {

    return (
      <Container>
          <ReactECharts option={option} />
      </Container>
    );
};

const option: ReactEChartsProps["option"] = {
  dataset: {
    source: [
      ["Commodity", "Owned", "Financed"],
      ["Commodity 1", 4, 1],
      ["Commodity 2", 2, 4],
      ["Commodity 3", 3, 6],
      ["Commodity 4", 5, 3],
    ],
  },
  title: {
    text: 'ECharts Getting Started Example'
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["Owned", "Financed"],
  },
  grid: {
    left: "5%",
    right: "15%",
    top: "30%",
    bottom: "20%",
  },
  xAxis: {
    type: "category",
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      label: {
        show: true,
      },
    },
    {
      type: "bar",
      label: {
        show: true,
      },
    },
  ],
};

const Container = styled.div`
    width: 100%;
    height: 50vh;
`;



export default AnnualReview;