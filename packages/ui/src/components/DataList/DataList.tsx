import React, { forwardRef } from 'react'
import { dataListVariants, DataListVariantsType } from './styles.js'
import { cn } from '../../common.js'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}


/* -------------------------------------------------------------------------- */
/* TYPES                                                                      */
/* -------------------------------------------------------------------------- */


type CleanDataListProps = Prettify<  DataListVariantsType>
export type DataListProps = CleanDataListProps & React.HTMLAttributes<HTMLDivElement>

// DataListItem Types
type DataListItemCustomProps = {
  /** Enables hover states and cursor pointers for list items */
  interactive?: boolean
}
type CleanDataListItemProps = Prettify<DataListItemCustomProps>
export type DataListItemProps = CleanDataListItemProps & React.HTMLAttributes<HTMLDivElement>

/* -------------------------------------------------------------------------- */
/* COMPONENTS                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * DataList: A layout container for list-based data displays in Tally or Riverside.
 */
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

/**
 * DataListItem: An individual row within a DataList.
 * Supports interactive states for dashboard-style navigation.
 */
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