import React, { forwardRef, useState, useEffect } from 'react'
import { pulsarVariants, RecordingPulsarVariantsType } from './styles.js'
import { cn } from '../../common.js'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type RecordingPulsarCustomProps = {
  /** Date.now() timestamp */
  startTime?: number
}

type CleanProps = Prettify<
  RecordingPulsarCustomProps & RecordingPulsarVariantsType
>

export type RecordingPulsarProps = CleanProps &
  React.HTMLAttributes<HTMLDivElement>

export const RecordingPulsar = forwardRef<HTMLDivElement, RecordingPulsarProps>(
  (props, ref) => {
    const { className, state, startTime, ...rest } = props
    const [elapsed, setElapsed] = useState('00:00:00')

    useEffect(() => {
      if (!startTime || state === 'paused') return

      const interval = setInterval(() => {
        const now = Date.now()
        const diff = Math.floor((now - startTime) / 1000)

        const h = Math.floor(diff / 3600)
          .toString()
          .padStart(2, '0')
        const m = Math.floor((diff % 3600) / 60)
          .toString()
          .padStart(2, '0')
        const s = (diff % 60).toString().padStart(2, '0')

        setElapsed(`${h}:${m}:${s}`)
      }, 1000)

      return () => clearInterval(interval)
    }, [startTime, state])

    return (
      <div
        ref={ref}
        className={cn(pulsarVariants({ state }), className)}
        {...rest}
      >
        <span
          className={cn(
            'w-3 h-3 rounded-pill bg-status-danger',
            state === 'active' && 'animate-pulse'
          )}
        />
        <span className="text-label font-mono font-weight-bold text-white tabular-nums">
          {state === 'active' ? 'REC' : 'PAUSED'} {elapsed}
        </span>
      </div>
    )
  }
)

RecordingPulsar.displayName = 'RecordingPulsar'
