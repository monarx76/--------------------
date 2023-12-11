'use client'

import { Box, IconButton, Stack } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Link from 'next/link'

interface ImageSliderProps {
	images: (string | StaticImageData)[]
	prevImage: () => void
	nextImage: () => void
	currentImg: number
}

const ImageSlider: FC<ImageSliderProps> = ({
	images,
	nextImage,
	prevImage,
	currentImg,
}) => {
	if (images.length === 0) {
		return null
	}

	return (
		<Stack component={'section'} direction={'row'}>
			<IconButton disableRipple onClick={prevImage}>
				<KeyboardArrowLeftIcon color='primary' fontSize='large' />
			</IconButton>
			{images.map((image, index) => (
				<Box key={index}>
					{currentImg === index && (
						<Link href={`${index}`}>
							<Image
								src={image}
								className={'rounded-[20px] w-[500px] h-[500px]'}
								alt={''}
								width={384}
								height={384}
								quality={100}
							/>
						</Link>
					)}
				</Box>
			))}
			<IconButton disableRipple onClick={nextImage}>
				<KeyboardArrowRightIcon color='primary' fontSize='large' />
			</IconButton>
		</Stack>
	)
}

export default ImageSlider
