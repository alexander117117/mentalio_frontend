import React from 'react'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import Stack from '@mui/material/Stack'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Button from '@/shared/ui/buttons/ButtonMain'
import { useDispatch, useSelector } from 'react-redux'
import { paginationNextPageThunk, paginationThunk } from '@/entities/folder/model/store/catalog/catalogThunks'
import { AppDispatch } from '@/app/store/configureStore.ts'

function Index() {
  const dispatch = useDispatch<AppDispatch>()

  const { page, query, category, totalPage, limit, loading } = useSelector((state: any) => state.catalog)

  const handleOnClickNextPage = () => {
    dispatch(paginationNextPageThunk({ query, page: page, category, limit }))
  }
  return (
    <div
      className="sm:text-center mt-5 sm:mt-10"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Button
        className="w-full sm:w-auto bg-primary py-[10px] sm:py-6 px-[103px] rounded-[10px] sm:rounded-[20px] text-white text-base sm:text-2xl transition-colors"
        onClick={handleOnClickNextPage}
        isLoading={loading}
      >
        Показать eще
      </Button>

      <Stack
        spacing={2}
        style={{
          marginTop: '20px',
        }}
      >
        <Pagination
          count={totalPage}
          onChange={(e, num) => {
            dispatch(paginationThunk({ query, page: num, category, limit }))
          }}
          renderItem={(item) => (
            <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
          )}
        />
      </Stack>
    </div>
  )
}

export default Index
