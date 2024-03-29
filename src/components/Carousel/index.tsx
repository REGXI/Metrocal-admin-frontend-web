import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface ICarouselComp {
  children: React.ReactNode
  className?: string
}

export function CarouselComp({ children, className }: ICarouselComp) {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className={`mx-12 ${className || className}`}
    >
      <CarouselContent className="flex flex-nowrap gap-4">
        {children}
      </CarouselContent>
      <CarouselPrevious className="shadow-lg" />
      <CarouselNext className="shadow-lg" />
    </Carousel>
  )
}
