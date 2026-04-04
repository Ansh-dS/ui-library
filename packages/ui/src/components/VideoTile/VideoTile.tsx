import React, { forwardRef, useEffect, useRef } from 'react'
import { videoTileVariants, VideoTileVariantsType } from './styles.js'
import { cn } from '../../common.js'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type VideoTileCustomProps = {
  stream?: MediaStream | null
  participantName?: string
  isSpeaking?: boolean
}

type CleanProps = Prettify<VideoTileCustomProps & VideoTileVariantsType>

export type VideoTileProps = CleanProps &
  React.VideoHTMLAttributes<HTMLVideoElement>

export const VideoTile = forwardRef<HTMLVideoElement, VideoTileProps>(
  (props, externalRef) => {
    const {
      className,
      mirrored,
      fit,
      stream,
      participantName,
      isSpeaking,
      ...rest
    } = props

    // Approach: We need a local ref to bind the MediaStream object,
    // but we also want to support forwarded refs.
    const internalRef = useRef<HTMLVideoElement>(null)
    const videoRef =
      (externalRef as React.MutableRefObject<HTMLVideoElement>) || internalRef

    // Approach: React cannot natively bind a MediaStream object via props (like src={stream}).
    // We must use a useEffect to imperatively assign the stream to the video element's srcObject
    // whenever the stream reference changes.
    useEffect(() => {
      if (videoRef.current && stream) {
        videoRef.current.srcObject = stream
      } else if (videoRef.current) {
        videoRef.current.srcObject = null
      }
    }, [stream, videoRef])

    return (
      <div
        className={cn(
          'relative w-full h-full group rounded-large overflow-hidden transition-all duration-300',
          isSpeaking ? 'ring-4 ring-action-primary' : 'ring-0'
        )}
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className={cn(
            videoTileVariants({ mirrored, fit }),
            className,
            'w-full h-full'
          )}
          {...rest}
        />

        {/* Overlay UI for participant name and status */}
        {participantName && (
          <div className="absolute bottom-l left-l bg-surface-overlay/80 backdrop-blur-sm px-m py-xs rounded-base text-fg-inverted text-label font-weight-medium flex items-center gap-s">
            {isSpeaking && (
              <span className="w-2 h-2 rounded-pill bg-status-success animate-pulse" />
            )}
            {participantName}
          </div>
        )}
      </div>
    )
  }
)

VideoTile.displayName = 'VideoTile'
