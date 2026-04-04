import React, { useEffect, useState } from 'react'
import { deviceSelectorVariants } from './styles.js'
import { cn } from '../../common.js'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type DeviceSelectorCustomProps = {
  onCameraChange?: (deviceId: string) => void
  onMicChange?: (deviceId: string) => void
}

type CleanProps = Prettify<DeviceSelectorCustomProps>

export type DeviceSelectorProps = CleanProps &
  React.HTMLAttributes<HTMLDivElement>

export const DeviceSelector = React.forwardRef<
  HTMLDivElement,
  DeviceSelectorProps
>((props, ref) => {
  const { className, onCameraChange, onMicChange, ...rest } = props

  const [cameras, setCameras] = useState<MediaDeviceInfo[]>([])
  const [mics, setMics] = useState<MediaDeviceInfo[]>([])
  const [error, setError] = useState<string | null>(null)

  // Approach: Securely request the device list.
  // Note: Browsers often hide device labels until the user grants permission via getUserMedia.
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        // Trigger a permission prompt first to ensure labels are accessible
        await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        const devices = await navigator.mediaDevices.enumerateDevices()

        setCameras(devices.filter((device) => device.kind === 'videoinput'))
        setMics(devices.filter((device) => device.kind === 'audioinput'))
      } catch {
        setError(
          'Permissions denied. Please allow camera and microphone access.'
        )
      }
    }

    fetchDevices()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(deviceSelectorVariants(), className)}
      {...rest}
    >
      {error && (
        <div className="p-s bg-status-danger/10 text-status-danger text-label rounded-base">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-xs">
        <label className="text-label font-weight-medium text-fg-secondary">
          Camera
        </label>
        <select
          onChange={(e) => onCameraChange?.(e.target.value)}
          className="w-full p-s bg-surface-sunken border border-border-default rounded-base text-body text-fg-primary outline-none focus:border-border-focused"
        >
          {cameras.map((cam) => (
            <option key={cam.deviceId} value={cam.deviceId}>
              {cam.label || 'Unknown Camera'}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-xs">
        <label className="text-label font-weight-medium text-fg-secondary">
          Microphone
        </label>
        <select
          onChange={(e) => onMicChange?.(e.target.value)}
          className="w-full p-s bg-surface-sunken border border-border-default rounded-base text-body text-fg-primary outline-none focus:border-border-focused"
        >
          {mics.map((mic) => (
            <option key={mic.deviceId} value={mic.deviceId}>
              {mic.label || 'Unknown Microphone'}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
})

DeviceSelector.displayName = 'DeviceSelector'
