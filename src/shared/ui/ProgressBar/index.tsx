import { useRef, useEffect } from 'react'
import styles from './index.module.css'
import * as d3 from 'd3'
import 'd3-transition'

interface ProgressBarProps {
  current: string | number
  total: string | number
  percent: string | number
}

export function ProgressBar({ current, total, percent }: ProgressBarProps) {
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (progressBarRef.current) {
      const width = progressBarRef.current.clientWidth
      const scale = d3.scaleLinear().domain([0, 100]).range([0, width])

      d3.select(progressBarRef.current).select('svg').remove()

      const svg = d3
        .select(progressBarRef.current)
        .append('svg')
        .attr('width', width)
        .attr('height', 3)
        .style('position', 'absolute')

      svg.append('rect').attr('width', width).attr('height', 3).attr('fill', '#d9d9d9')

      svg
        .append('rect')
        .attr('width', 0)
        .attr('height', 3)
        .attr('fill', '#24AC18')
        .transition()
        .duration(1000)
        .attr('width', scale(Number(percent)))
    }
  }, [current, total, percent])
  return (
    <>
      <div className={styles.progressBar}>
        <div className={styles.progressBar__labels}>
          <span>{current}</span>
          <span>{total}</span>
        </div>
        <div ref={progressBarRef} className={styles.progressBar__track}></div>
      </div>
    </>
  )
}
