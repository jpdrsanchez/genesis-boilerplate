type Props = {
  title: string
}

const Home = ({ title = 'Genesis Boilerplate' }: Props) => {
  return <div>{title}</div>
}

export default Home
