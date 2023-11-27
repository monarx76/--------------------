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
					<Typography className='text-3xl text-white hover:border-b-[2px]'>
						Картинки
					</Typography>
					<Typography className='text-3xl text-white hover:border-b-[2px]'>
						Товар
					</Typography>
					<Typography className='text-3xl text-white hover:border-b-[2px]'>
						Игры
					</Typography>
					<Typography className='text-3xl text-white hover:border-b-[2px]'>
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
			<Box className='relative flex flex-col items-center bg-[#D9D9D9]'>
				<Image
					src={Img9}
					alt={''}
					className='h-screen w-[95%]'
					quality={100}
					priority
					placeholder='blur'
				/>
			</Box>
		</Box>
	)
}

export default HomePage
