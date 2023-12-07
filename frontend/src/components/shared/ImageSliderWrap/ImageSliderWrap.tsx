'use client'

import Img3 from '/public/3.jpg'
import Img4 from '/public/4.jpg'
import Img5 from '/public/5.jpg'
import Img6 from '/public/6.jpg'
import Img10 from '/public/10.png'
import Img11 from '/public/11.jpg'
import { Box, Typography } from '@mui/material'
import ImageSlider from '../ImageSlider/ImageSlider'
import { useState } from 'react'
import classNames from 'classnames'
import { montserrat } from '@/theme/fonts'

const ImageSliderWrap = () => {
	const [currentImg, setCurrentImg] = useState(0)

	const length = 6

	const prevImage = () =>
		setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1)

	const nextImage = () =>
		setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)

	return (
		<Box className='absolute h-full w-full flex justify-around items-center'>
			<Box className='bg-white w-1/2 rounded-lg p-5'>
				{currentImg === 0 && (
					<>
						<Typography
							className={classNames(
								montserrat.className,
								'text-5xl font-extralight mb-3'
							)}
						>
							DIVINITY ORIGINAL SIN 2: DEFINITIVE EDITION
						</Typography>
						<Typography className='text-2xl'>
							Master deep, tactical combat. Join up to 3 other players - but
							know that only one of you will have the chance to become a God.
						</Typography>
					</>
				)}
				{currentImg === 1 && (
					<>
						<Typography
							className={classNames(
								montserrat.className,
								'text-5xl font-extralight mb-3'
							)}
						>
							BEYOND DIVINITY
						</Typography>
						<Typography className='text-2xl'>
							Beyond Divinity is the follow-up to the award-winning Divine
							Divinity. Soul-forged with a Death Knight, your fate is to spend
							the rest of eternity bonded to this creature of evil, unless you
							can undo his curse...prepare for your greatest adventure!
						</Typography>
					</>
				)}
				{currentImg === 2 && (
					<>
						<Typography
							className={classNames(
								montserrat.className,
								'text-5xl font-extralight mb-3'
							)}
						>
							DIVINE DIVINITY
						</Typography>
						<Typography className='text-2xl'>
							Divine Divinity is an epic role-playing game with hack-and-slash
							action, offering a huge world to explore and thousands of items to
							investigate, trade and use.
						</Typography>
					</>
				)}
				{currentImg === 3 && (
					<>
						<Typography
							className={classNames(
								montserrat.className,
								'text-5xl font-extralight mb-3'
							)}
						>
							DIVINITY DRAGON COMMANDER
						</Typography>
						<Typography className='text-2xl'>
							You are the Dragon Commander. Your mission it is to reunite a
							broken empire and become the new emperor. Success depends entirely
							on your ability to efficiently rule your empire, build invincible
							armies and lead them to victory.
						</Typography>
					</>
				)}
				{currentImg === 4 && (
					<>
						<Typography
							className={classNames(
								montserrat.className,
								'text-5xl font-extralight mb-3'
							)}
						>
							BALDURS GATE 3
						</Typography>
						<Typography className='text-2xl'>
							An ancient evil has returned to Baldurs Gate, intent on devouring
							it from the outside out. The fate of Faerûn lies in your hands.
							Alone, you may resist. But together, you can overcome. Gather your
							party.
						</Typography>
					</>
				)}
				{currentImg === 5 && (
					<>
						<Typography
							className={classNames(
								montserrat.className,
								'text-5xl font-extralight mb-3'
							)}
						>
							DIVINITY ORIGINAL SIN ENHANCED EDITION
						</Typography>
						<Typography className='text-2xl'>
							Get ready for a back-to-the-roots RPG adventure! Discuss your
							decisions with companions; fight foes in turn-based combat;
							explore an open world and interact with everything and everyone
							you see.
						</Typography>
					</>
				)}
			</Box>
			<ImageSlider
				images={[Img3, Img4, Img5, Img6, Img10, Img11]}
				currentImg={currentImg}
				nextImage={nextImage}
				prevImage={prevImage}
			/>
		</Box>
	)
}

export default ImageSliderWrap
