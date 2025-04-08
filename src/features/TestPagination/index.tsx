import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import React from 'react'

interface TestPaginationProps {
  count: number
  page: number
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void
}


export function TestPagination({ count, page, onChange }: TestPaginationProps) {
  return (
    <div className="flex justify-center items-center">
      <Stack spacing={2} style={{ marginBottom: '10px' }}>
        <Pagination
          count={count}
          page={page}
          onChange={onChange}
          hideNextButton
          hidePrevButton
          renderItem={(item) => (
            <PaginationItem
              sx={{
                width: 40,
                height: 40,
                borderRadius: '10px',
                '&.Mui-selected': {
                  backgroundColor: '#DEF3DD',
                },
              }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  )
}
