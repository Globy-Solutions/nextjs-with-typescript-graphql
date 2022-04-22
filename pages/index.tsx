import { Layouts } from '@/components/'

const Index = ({ loading }: { loading: boolean }) => {
  return (
    <Layouts.Default loading={loading} children={''} />
  )
}

export default Index
