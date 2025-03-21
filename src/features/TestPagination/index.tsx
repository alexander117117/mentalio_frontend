import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
export function TestPagination() {
  return (
    <>
      <div className="flex justify-center items-center">
        <Stack
          spacing={2}
          style={{
            marginBottom: '10px',
          }}
        >
          <Pagination
            count={5}
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
    </>
  )
}
