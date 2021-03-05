import Link from 'next/link'
const Index = () => (
  <div>
    Hello World. This is my TESTING{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)
export default Index;
