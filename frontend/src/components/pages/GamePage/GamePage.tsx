import { Box } from '@mui/material'
import Img3 from '/public/3.jpg'
import Img4 from '/public/4.jpg'
import Img5 from '/public/5.jpg'
import Img6 from '/public/6.jpg'
import Img10 from '/public/10.png'
import Img11 from '/public/11.jpg'
import Image from 'next/image'

const GamePage = ({ game }: { game: string }) => {
	switch (game) {
		case '0':
			return (
				<Box>
					<Image
						src={Img3}
						alt=''
						className={'rounded-[20px] w-[500px] h-[500px]'}
					/>
				</Box>
			)
		case '1':
			return (
				<Box>
					<Image src={Img4} alt='' />
				</Box>
			)
		case '2':
			return (
				<Box>
					<Image src={Img5} alt='' />
				</Box>
			)
		case '3':
			return (
				<Box>
					<Image src={Img6} alt='' />
				</Box>
			)
		case '4':
			return (
				<Box>
					<Image src={Img10} alt='' />
				</Box>
			)
		case '5':
			return (
				<Box>
					<Image src={Img11} alt='' />
				</Box>
			)
		default:
			return null
	}
}

export default GamePage
