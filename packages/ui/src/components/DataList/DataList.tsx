import React, { forwardRef } from 'react'
import { dataListVariants, DataListVariantsType } from './styles.js'
import { cn } from '../../common.js'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type DataListCustomProps = Record<string, never>

export const DataList = forwardRef<HTMLDivElement, DataListProps>(
  (props, ref) => {
    const { className, spacing, children, ...rest } = props

    return (
      <div
        ref={ref}
        role="list"
        className={cn(dataListVariants({ spacing }), className)}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

DataList.displayName = 'DataList'

// Sub-component for individual list items
export interface DataListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean
}

type CleanProps = Prettify<DataListCustomProps & DataListVariantsType>

export type DataListProps = CleanProps & React.HTMLAttributes<HTMLDivElement>

export const DataListItem = forwardRef<HTMLDivElement, DataListItemProps>(
  (props, ref) => {
    const { className, interactive = false, children, ...rest } = props

    return (
      <div
        ref={ref}
        role="listitem"
        className={cn(
          'flex items-center justify-between p-l transition-colors',
          interactive && 'hover:bg-surface-sunken cursor-pointer',
          className
        )}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

DataListItem.displayName = 'DataListItem'
