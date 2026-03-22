import React, { forwardRef, createContext, useContext } from 'react'
import { dataGridVariants, DataGridVariantsType } from './styles.js'
import { cn } from '../../common.js'

const DataGridContext = createContext<{
  size?: 'sm' | 'md' | 'lg' | null | undefined
}>({
  size: 'md',
})

export interface DataGridProps
  extends React.TableHTMLAttributes<HTMLTableElement>, DataGridVariantsType {}

export const DataGrid = forwardRef<HTMLTableElement, DataGridProps>(
  (props, ref) => {
    const { className, size, children, ...rest } = props
    /* why we wrap 'div' around the table?
       a. table fits according to the content even it break the layout. 
       b. element cannot show rounded corners.
       c. The wrapper div acts as the reference point. Without it, your sticky header might stick to the top of the entire browser window
    */

    return (
      <DataGridContext.Provider value={{ size }}>
        <div className="w-full overflow-x-auto rounded-large border border-border-default bg-surface-base">
          <table
            ref={ref}
            // Added w-full so the table actually stretches to fill the wrapper
            className={cn(
              'w-full text-left',
              dataGridVariants({ size }),
              className
            )}
            {...rest}
          >
            {children}
          </table>
        </div>
      </DataGridContext.Provider>
    )
  }
)
DataGrid.displayName = 'DataGrid'

// Helper sub-components for the grid
// HTMLableSectionElement: following examples of element it contains '<tbody>, <thead>, <tfoot>...'
// React.HTMLAttributes<HTMLTableSectionElement>: These are the respective types.
export const DataGridHeader = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      'bg-surface-sunken border-b border-border-default',
      className
    )}
    {...props}
  />
))
DataGridHeader.displayName = 'DataGridHeader'

// data-grid-row: each row of table.
export const DataGridRow = forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  /* bg-surface-sunken/50: set opacity of the given color to 50 */
  <tr
    ref={ref}
    className={cn(
      'border-b border-border-default hover:bg-surface-sunken/50 transition-colors data-[state=selected]:bg-surface-sunken',
      className
    )}
    {...props}
  />
))
DataGridRow.displayName = 'DataGridRow'

// data-grid-head: styles for the head box.
export const DataGridHead = forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  const { size } = useContext(DataGridContext)

  /* THE TYPOGRAPHIC & GEOMETRIC SCALE:
      sm: 10 units high | Caption text
      md: 14 units high | Label text (Perfectly balanced for Tally)
      lg: 20 units high | Body text (High impact for Riverside)
   */

  const sizeClasses = {
    sm: 'h-10 px-m text-caption', // Gives enough room for the 8px cell padding
    md: 'h-12 px-l text-label',
    lg: 'h-14 px-2xl text-body',
  }

  return (
    <th
      ref={ref}
      className={cn(
        'text-left align-middle font-weight-semibold text-fg-secondary uppercase tracking-wide',
        sizeClasses[size || 'md'],
        className
      )}
      {...props}
    />
  )
})
DataGridHead.displayName = 'DataGridHead'

// data-gird-cell: Each cell.
export const DataGridCell = forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  const { size } = useContext(DataGridContext)

  // Map the broadcasted size to specific Tailwind padding/text classes
  // FIX: Dynamically changing px/py for better optical row height based on grid size.
  // FIX: Dynamically changing text size (caption vs body vs subheader)

  /* THE "UI-SAFE" ASYMMETRIC SCALE:
     sm: py-s (8px)  | px-m (12px) -> Tight, but safe for Badges/Avatars.
     md: py-m (12px) | px-l (16px) -> The Tally Default.
     lg: py-l (16px) | px-2xl(32px)-> Premium breathing room.
  */
  const sizeClasses = {
    sm: 'py-s px-m text-caption',
    md: 'py-m px-l text-body',
    lg: 'py-l px-2xl text-subheader',
  }

  return (
    <td
      ref={ref}
      // FIX: Changed p-l to px-l py-m for better optical row height.
      // FIX: Changed text-fg-primary to a text-body
      className={cn(
        'align-middle text-fg-primary',
        sizeClasses[size || 'md'],
        className
      )}
      {...props}
    />
  )
})
DataGridCell.displayName = 'DataGridCell'
