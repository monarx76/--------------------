import { Box, Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Img0 from '/public/0.jpg'
import Img1 from '/public/1.jpeg'
import Img2 from '/public/2.png'
import Img3 from '/public/3.jpg'
import Img4 from '/public/4.jpg'
import Img5 from '/public/5.jpg'
import Img6 from '/public/6.jpg'
import Img7 from '/public/7.jpg'
import Img8 from '/public/8.jpeg'
import Img9 from '/public/9.jpg'
import Img10 from '/public/10.png'
import Img11 from '/public/11.jpg'
import ImageSlider from '@/components/shared/ImageSlider/ImageSlider'
import ImageSliderWrap from '@/components/shared/ImageSliderWrap/ImageSliderWrap'
import classNames from 'classnames'
import { montserrat } from '@/theme/fonts'

const HomePage = () => {
	return (
		<Box>
			<Box className='relative'>
				<Stack
					direction={'row'}
					spacing={3}
					justifyContent={'end'}
					className='absolute w-full p-10'
				>
					<Typography className='text-3xl text-white hover:border-b-[2px] cursor-pointer'>
						Картинки
					</Typography>
					<Typography className='text-3xl text-white hover:border-b-[2px] cursor-pointer'>
						Товар
					</Typography>
					<Typography className='text-3xl text-white hover:border-b-[2px] cursor-pointer'>
						Игры
					</Typography>
					<Typography className='text-3xl text-white hover:border-b-[2px] cursor-pointer'>
						О нас
					</Typography>
				</Stack>
				<Image
					src={Img2}
					alt={''}
					className='absolute top-0 left-5'
					quality={100}
					width={100}
					priority
					placeholder='blur'
				/>
				<Image
					src={Img0}
					alt={''}
					className='h-screen'
					quality={100}
					placeholder='blur'
				/>
			</Box>
			<Box className='relative'>
				<ImageSliderWrap />
				<Image
					src={Img9}
					className='h-screen w-full'
					alt={''}
					quality={100}
					priority
					placeholder='blur'
				/>
			</Box>
			<Box className='relative flex justify-around items-center'>
				<Box className='w-1/3'>
					<Typography
						className={classNames(
							montserrat.className,
							'text-3xl font-semibold mb-3'
						)}
					>
						WE WORK TOGETHER AND EVERY VOICE COUNTS
					</Typography>
					<Typography className='text-xl'>
						In 1996, in a small office in Ghent, Belgium, Larian Studios was
						born. Since then, our passion to create a world class video games
						has driven the Divinity series - six games that straddle multiple
						genres and defy expectations. Our first crowdfunded success,
						Divinity: Original Sin, won over 150 awards and nominations, and the
						recently-released sequel Divinity: Original Sin 2 launched with a 93
						Metacritic rating, as well as over 160 awards (Including the Bafta
						for Best Multiplayer Game) and counting! Thanks to the success of
						these two games, our family has grown to over 300 people around the
						world, working in our Ghent, Quebec, Dublin, Kuala Lumpur, Guildford
						and Barcelona studios. Our latest title Baldurs Gate 3 released in
						2023 to critical acclaim and is now listed among Metacritics
						Must-Play games.
					</Typography>
				</Box>
				<Image
					src={'https://cmsapi.larian.com/uploads/image/63e4f07b3b69d.png'}
					className='h-[500px] w-[400px]'
					height={500}
					width={400}
					alt={''}
					quality={100}
				/>
			</Box>
			<Box className='bg-gray-700 flex'>
				<Box className='w-1/2'>1{/* TODO */}</Box>
				<Box className='w-1/2'>1{/* TODO */}</Box>
			</Box>
		</Box>
	)
}

export default HomePage
