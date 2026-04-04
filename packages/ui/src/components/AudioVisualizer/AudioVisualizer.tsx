import React, { forwardRef, useEffect, useRef } from 'react'
import { visualizerVariants, AudioVisualizerVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface AudioVisualizerProps
  extends
    React.CanvasHTMLAttributes<HTMLCanvasElement>,
    AudioVisualizerVariantsType {
  stream?: MediaStream | null
  barColor?: string
}

export const AudioVisualizer = forwardRef<
  HTMLCanvasElement,
  AudioVisualizerProps
>((props, ref) => {
  const {
    className,
    state,
    stream,
    barColor = 'var(--color-action-primary)',
    ...rest
  } = props

  const internalCanvasRef = useRef<HTMLCanvasElement>(null)
  const canvasRef =
    (ref as React.MutableRefObject<HTMLCanvasElement>) || internalCanvasRef

  useEffect(() => {
    if (!stream || !canvasRef.current) return

    const webkitAudioContext = (window as Window & {
      webkitAudioContext?: typeof AudioContext
    }).webkitAudioContext
    const AudioContextConstructor = window.AudioContext ?? webkitAudioContext

    if (!AudioContextConstructor) return

    const audioContext = new AudioContextConstructor()
    const analyser = audioContext.createAnalyser()
    const source = audioContext.createMediaStreamSource(stream)

    source.connect(analyser)
    analyser.fftSize = 256

    const bufferLength = analyser.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)
    const canvas = canvasRef.current

    let animationId: number

    const draw = () => {
      animationId = requestAnimationFrame(draw)

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      analyser.getByteFrequencyData(dataArray)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const barWidth = (canvas.width / bufferLength) * 2.5
      let barHeight: number
      let x = 0

      for (let i = 0; i < bufferLength; i++) {
        // with (!):
        // if dataArray[i] gets undefined then we replace 'dataArray[i]' with 0.
        barHeight = dataArray[i]! / 2

        ctx.fillStyle = barColor
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight)
        x += barWidth + 1
      }
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      source.disconnect()
      audioContext.close()
    }
  }, [stream, barColor, canvasRef])

  return (
    <canvas
      ref={canvasRef}
      className={cn(visualizerVariants({ state }), className)}
      width={300}
      height={64}
      {...rest}
    />
  )
})

AudioVisualizer.displayName = 'AudioVisualizer'
