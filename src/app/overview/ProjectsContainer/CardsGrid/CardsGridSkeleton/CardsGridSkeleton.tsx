import CardSkeleton from '@/app/overview/Card/CardSkeleton/CardSkeleton'
import CardViewWrapper from '../../../Card/CardViewWrapper/CardViewWrapper'

const CardsGridSkeleton = () => {
  return (
    <CardViewWrapper className="card-list">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </CardViewWrapper>
  )
}

export default CardsGridSkeleton
