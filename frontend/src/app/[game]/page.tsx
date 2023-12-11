import GamePage from '@/components/pages/GamePage/GamePage'

const page = ({ params }: { params: { game: string } }) => {
	return <GamePage game={params.game} />
}

export default page
