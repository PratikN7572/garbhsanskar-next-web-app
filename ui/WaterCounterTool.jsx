"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import ToolCard from './ToolCard'
import { WaterCounterContext } from '@/app/context/waterCounterContext'
let waterCounter= {
    title: "water",
    src: "/icons/water_drop.svg",
    task: {
      title: "you drink",
    },
    remainingTask: {
      title: "remain",
      unit: "glass",
    },
  }
const WaterCounterTool = () => {
    const { state } = useContext(WaterCounterContext)
    waterCounter = { ...waterCounter, task: { ...waterCounter.task, counter: state?.completedWaterCount || 0 }, remainingTask: { ...waterCounter.remainingTask, counter: state?.waterTarget } }
  return (
    <Link href={'/dashboard/tools/waterCounter'} className="tool_link">
      <ToolCard
        src={waterCounter.src}
        title={waterCounter.title}
        remainingTask={waterCounter.remainingTask}
        task={waterCounter.task}
            headTitle={null}
            imageClass="tool_card_image"
            
            />
        </Link>
  )
}

export default WaterCounterTool
