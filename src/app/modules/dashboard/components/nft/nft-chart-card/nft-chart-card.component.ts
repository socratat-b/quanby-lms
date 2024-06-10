import { Component, OnDestroy, OnInit, effect } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/core/services/theme.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

@Component({
  selector: '[nft-chart-card]',
  templateUrl: './nft-chart-card.component.html',
  standalone: true,
  imports: [AngularSvgIconModule, NgxEchartsModule],
})
export class NftChartCardComponent implements OnInit, OnDestroy {
  public chartOptions: any;

  constructor(private themeService: ThemeService) {
    const baseColor = '#FFFFFF';
    const data = [2100, 3200, 3200, 2400, 2400, 1800, 1800, 2400, 2400, 3200, 3200, 3000, 3000, 3250, 3250];
    const categories = [
      '10AM',
      '10.30AM',
      '11AM',
      '11.15AM',
      '11.30AM',
      '12PM',
      '1PM',
      '2PM',
      '3PM',
      '4PM',
      '5PM',
      '6PM',
      '7PM',
      '8PM',
      '9PM',
    ];

    this.chartOptions = {
      xAxis: {
        type: 'category',
        data: categories,
        axisLine: { lineStyle: { color: baseColor } },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false },
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [
        {
          name: 'Etherium',
          data: data,
          type: 'line',
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: baseColor },
                { offset: 1, color: 'rgba(0, 0, 0, 0)' },
              ],
            },
          },
          lineStyle: { color: baseColor, width: 3 },
          smooth: true,
        },
      ],
      tooltip: {
        trigger: 'axis',
        formatter: '{b0}: {c0}$',
        backgroundColor: this.themeService.theme().mode === 'dark' ? '#333' : '#fff',
        borderColor: baseColor,
        borderWidth: 1,
        textStyle: { color: baseColor },
      },
    };

    effect(() => {
      let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
      primaryColor = this.HSLToHex(primaryColor);
      this.chartOptions.series[0].lineStyle.color = primaryColor;
      this.chartOptions.tooltip.backgroundColor = this.themeService.theme().mode === 'dark' ? '#333' : '#fff';
      this.chartOptions.tooltip.borderColor = primaryColor;
      this.chartOptions.series[0].areaStyle.color.colorStops[0].color = primaryColor;
    });
  }

  private HSLToHex(color: string): string {
    const colorArray = color.split('%').join('').split(' ');
    const colorHSL = colorArray.map(Number);
    const hsl = {
      h: colorHSL[0],
      s: colorHSL[1],
      l: colorHSL[2],
    };

    const { h, s, l } = hsl;

    const hDecimal = l / 100;
    const a = (s * Math.min(hDecimal, 1 - hDecimal)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = hDecimal - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

      // Convert to Hex and prefix with "0" if required
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
