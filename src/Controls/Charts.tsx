import React from 'react';
import Grid from '@mui/material/Grid';
import { Line } from 'react-chartjs-2';
import Card from '@mui/material/Card';

class ChartsProperties {
  public charts?: { [lookup: string]: ChartState };
}

class ChartsState {}

export class ChartState {
  public Datasets: any[];

  public Labels: string[];

  public Lookup!: string;

  public Name!: string;

  constructor() {
    this.Datasets = [];

    this.Labels = [];
  }
}

export default class Charts extends React.Component<
  ChartsProperties,
  ChartsState
> {
  //#region Constants
  //#endregion

  //#region Fields
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  constructor(props: ChartsProperties) {
    super(props);

    this.state = {
      ...new ChartsState(),
    };
  }
  //#endregion

  //#region Life Cycle
  public componentDidMount() {}

  public render() {
    // const data = {
    //   labels: ['Jun', 'Jul', 'Aug'],
    //   datasets: [
    //     {
    //       id: 1,
    //       label: '',
    //       data: [5, 6, 7],
    //     },
    //     {
    //       id: 2,
    //       label: '',
    //       data: [3, 2, 1],
    //     },
    //   ],
    // };

    // const datas = [data, data, data, data, data];

    const chartKeys = Object.keys(this.props.charts || []);

    const datas = chartKeys.map((chartKey) => {
      const chart = (this.props.charts || {})[chartKey];

      return {
        // id: chart.Lookup,
        labels: chart.Labels,
        datasets: chart.Datasets,
      };
    });

    console.log(datas);

    return (
      <Grid container spacing={2}>
        {datas.map((data, i) => {
          console.log(data);

          return (
            <Grid xs={12} md={6} item={true} key={i}>
              <Card>
                <Line datasetIdKey="id" data={data} />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  }
  //#endregion

  //#region API Methods
  //#endregion

  //#region Helpers
  //#endregion
}
