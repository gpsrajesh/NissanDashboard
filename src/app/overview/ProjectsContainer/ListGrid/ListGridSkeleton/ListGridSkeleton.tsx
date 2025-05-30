import ListViewWrapper from '@/app/overview/Row/ListViewWrapper/ListViewWrapper'
import RowSkeleton from '@/app/overview/Row/RowSkeleton/RowSkeleton'

const ListGridSkeleton = () => {
  return (
    <ListViewWrapper>
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
    </ListViewWrapper>
  )
}

export default ListGridSkeleton
