import { useRef, useEffect } from 'react'
import styles from './index.module.css'
import * as d3 from 'd3'
import 'd3-transition'
import { useSelector } from 'react-redux'
import { selectCurrentIndex, selectPreparedWords } from '@/entities/testInteractive/store/selectors'

export function ProgressBar() {
  const progressBarRef = useRef<HTMLDivElement>(null)
  const currentIndex = useSelector(selectCurrentIndex)
  const words = useSelector(selectPreparedWords)
  const total = words.length
  const progress = total === 0 ? 0 : ((currentIndex + 1) / total) * 100

  useEffect(() => {
    if (!progressBarRef.current) return

    const width = progressBarRef.current.clientWidth
    const scale = d3.scaleLinear().domain([0, 100]).range([0, width])

    let svg = d3.select(progressBarRef.current).select<SVGSVGElement>('svg')

    if (svg.empty()) {
      svg = d3
        .select(progressBarRef.current)
        .append<SVGSVGElement>('svg')
        .attr('width', width)
        .attr('height', 3)
        .style('position', 'absolute')

      svg.append('rect').attr('width', width).attr('height', 3).attr('fill', '#d9d9d9')

      svg.append('rect').attr('class', 'foreground').attr('width', 0).attr('height', 3).attr('fill', '#24AC18')
    }

    svg.select('.foreground').transition().duration(1000).attr('width', scale(progress))
  }, [progress])
  return (
    <div className={styles.progressBar}>
      <div className={styles.progressBar__labels}>
        <span>{currentIndex + 1}</span>
        <span>{total}</span>
      </div>
      <div ref={progressBarRef} className={styles.progressBar__track} />
    </div>
  )
}
