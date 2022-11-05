// vue-echarts
import ECharts from "vue-echarts";
import { use } from "echarts/core";
import {
  CanvasRenderer,
} from "echarts/renderers";
import {
  BarChart, EffectScatterChart, LineChart, MapChart, PieChart,
} from "echarts/charts";
import {
  DatasetComponent,
  GeoComponent,
  GridComponent,
  LegendComponent,
  MarkPointComponent,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components";

use([
  CanvasRenderer,
  BarChart, PieChart, MapChart, EffectScatterChart, LineChart,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
  DatasetComponent,
  VisualMapComponent,
  GeoComponent,
  MarkPointComponent,
]);

export const registerEcharts = (app: any) => {
  app.component("VChart", ECharts);
};
