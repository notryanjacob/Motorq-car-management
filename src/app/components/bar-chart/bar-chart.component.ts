import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnChanges{
  @Input() data: Task[]=[];

  constructor(private el: ElementRef, private taskService: TaskService) { }

  ngOnInit(): void {
    // this.createChart();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      console.log('Data received in bar component:', this.data);
      // Update your chart here
      this.createChart();
    }
  }

  private createChart(): void {
    console.log('created chart, data:',this.data);
    const element = this.el.nativeElement;
    const data = this.data;
    const factor = 1; //1->seconds, 60->minutes

    // Clear any existing SVG
    d3.select(element).select('svg').remove();
  
    const margin = { top: 20, right: 200, bottom: 50, left: 200 };
    const width = 1000 - margin.left - margin.right;
    const height = (50*data.length) - margin.top - margin.bottom;
  
    const svg = d3.select(element).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
  
    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.duration / factor) as number])
      .range([0, width]);

    
  
    const y = d3.scaleBand()
      .domain(data.map(d => d.title))
      .range([0, height])
      .padding(0.2);
  
    // Add X axis
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');
  
    // Add Y axis
    svg.append('g')
      .call(d3.axisLeft(y))
      .selectAll('text')
      .attr('dy', null)
      .attr('y', y.bandwidth() / 2)
      .attr('x', -10)
      .attr('text-anchor', 'end')
      .attr('alignment-baseline', 'middle');
  
    // Create a div for the tooltip
    const tooltip = d3.select(element)
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('background-color', 'white')
      .style('border', 'solid')
      .style('border-width', '1px')
      .style('border-radius', '5px')
      .style('padding', '10px');
  
    // Add the bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('y', d => y(d.title) as number)
      .attr('width', d => x(d.duration/factor))
      .attr('height', y.bandwidth())
      // .attr('fill', '#69b3a2')
      .attr('fill','#5f9ea0')
      .on('mouseover', (event, d) => {
        tooltip.transition()
          .duration(200)
          .style('opacity', .9);
        tooltip.html(`Title: ${d.title}<br/>Duration: ${Math.trunc(d.duration /factor)}`)
          .style('left', (event.pageX) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', () => {
        tooltip.transition()
          .duration(500)
          .style('opacity', 0);
      });
  
    // Add labels to the bars
    svg.selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('y', d => (y(d.title) as number) + y.bandwidth() / 2)
      .attr('x', d => x(d.duration/factor) + 5)
      .attr('dy', '.35em')
      .text(d => Math.trunc(d.duration/factor));
  }
}
