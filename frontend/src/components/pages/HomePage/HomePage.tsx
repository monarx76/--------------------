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
import Link from 'next/link'

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
						<Link href='https://merch.larian.com/'>Товар</Link>
					</Typography>
					<Typography className='text-3xl text-white hover:border-b-[2px] cursor-pointer'>
						<Link href='#games'>Игры</Link>
					</Typography>
					<Typography className='text-3xl text-white hover:border-b-[2px] cursor-pointer'>
						<Link href='#about us'>О нас</Link>
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
			<Box id='games' className='relative'>
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
			<Box id='about us' className='flex bg-[#1d1d1d] text-[#666] pt-20'>
				<Stack gap={3} className='w-1/2 pl-40 pr-20'>
					<Typography className='font-light'>СОЦИАЛЬНЫЕ МЕДИА</Typography>
					<Typography className='text-5xl text-white'>
						ПОДОЙДИ К НАМ ПОБЛИЖЕ
					</Typography>
					<Typography>
						Создание игр - это приключение. Следуйте за нами в наших социальных
						сетях, чтобы присоединиться к нам в нашем путешествии и испытать
						приключение самостоятельно.
					</Typography>
					<Box className='grid grid-cols-2 gap-3 w-1/2'>
						<Typography>
							<Link
								href='https://www.facebook.com/LarianStudios/'
								className='hover:text-gray-100 cursor-pointer'
							>
								Facebook
							</Link>
						</Typography>
						<Typography>
							<Link
								href='https://twitter.com/larianstudios'
								className='hover:text-gray-100 cursor-pointer'
							>
								Twitter
							</Link>
						</Typography>
						<Typography>
							<Link
								href='https://www.instagram.com/larianstudios/'
								className='hover:text-gray-100 cursor-pointer'
							>
								Instagram
							</Link>
						</Typography>
						<Typography>
							<Link
								href='https://www.youtube.com/user/LarianStudios'
								className='hover:text-gray-100 cursor-pointer'
							>
								Youtube
							</Link>
						</Typography>
						<Typography>
							<Link
								href='https://www.twitch.tv/larianstudios'
								className='hover:text-gray-100 cursor-pointer'
							>
								Twitch
							</Link>
						</Typography>
						<Typography>
							<Link
								href='https://store.steampowered.com/search/?publisher=Larian%20Studios'
								className='hover:text-gray-100 cursor-pointer'
							>
								Steam
							</Link>
						</Typography>
						<Typography>
							<Link
								href='https://discord.com/invite/larianstudios'
								className='hover:text-gray-100 cursor-pointer'
							>
								Discord
							</Link>
						</Typography>
					</Box>
				</Stack>
				<Box className='w-1/2 pl-20'>
					<Box className='grid grid-cols-3 grid-rows-2 gap-20'>
						<Stack className='cursor-pointer' gap={0.2}>
							<Typography className='font-semibold text-white cursor-pointer'>
								<Link href='https://larian.com/#games'>ИГРЫ</Link>
							</Typography>
							<Typography className='hover:text-gray-100'>
								<Link href='https://baldursgate3.game/'>Baldurs Gate 3</Link>
							</Typography>
							<Typography className='hover:text-gray-100'>
								<Link href='https://divinity.game/'>
									Divinity: Original Sin II
								</Link>
							</Typography>
							<Typography className='hover:text-gray-100'>
								<Link href='http://www.divinityoriginalsin.com/'>
									Divinity: Original Sin
								</Link>
							</Typography>
							<Typography className='hover:text-gray-100'>
								<Link href='https://store.steampowered.com/app/243950/Divinity_Dragon_Commander/'>
									Dragon Commander
								</Link>
							</Typography>
							<Typography className='hover:text-gray-100'>
								<Link href='https://store.steampowered.com/app/219780/Divinity_II_Developers_Cut/'>
									Divinity II: Developers Cut
								</Link>
							</Typography>
							<Typography className='hover:text-gray-100'>
								<Link href='https://store.steampowered.com/app/219760/Beyond_Divinity/'>
									Beyond Divinity
								</Link>
							</Typography>
							<Typography className='hover:text-gray-100'>
								<Link href='https://store.steampowered.com/app/214170/Divine_Divinity/'>
									Divine Divinity
								</Link>
							</Typography>
						</Stack>
						<Stack gap={0.2}>
							<Typography className='font-semibold text-white cursor-pointer'>
								<Link href='https://larian.com/careers'>КАРЬЕРА</Link>
							</Typography>
							<Typography className='hover:text-gray-100'>
								<Link href='https://larian.com/careers/location/barcelona?location=barcelona'>
									Baldurs Gate 3
								</Link>
							</Typography>
							<Typography className='hover:text-gray-100 cursor-pointer'>
								<Link href='https://larian.com/careers/location/dublin?location=dublin'>
									Барселона
								</Link>
							</Typography>
							<Typography className='hover:text-gray-100 cursor-pointer'>
								<Link href='https://larian.com/careers/location/dublin?location=dublin'>
									Дублин
								</Link>
							</Typography>
							<Typography className='hover:text-gray-100 cursor-pointer'>
								<Link href='https://larian.com/careers/location/gent?location=gent'>
									Гент
								</Link>
							</Typography>
							<Typography className='hover:text-gray-100 cursor-pointer'>
								<Link href='https://larian.com/careers/location/guildford?location=guildford'>
									Гилфорд
								</Link>
							</Typography>
							<Typography className='hover:text-gray-100 cursor-pointer'>
								<Link href='https://larian.com/careers/location/kuala-lumpur?location=kuala-lumpur'>
									Куала-Лумпур
								</Link>
							</Typography>
							<Typography className='hover:text-gray-100 cursor-pointer'>
								<Link href='https://quebec.larian.com/'>Квебек</Link>
							</Typography>
						</Stack>
						<Stack gap={0.2}>
							<Typography className='font-semibold text-white cursor-pointer'>
								<Link href='https://larian.com/press'>ПРЕСС-КИТ</Link>
							</Typography>
							<Typography className='hover:text-gray-100 cursor-pointer'>
								<Link href='https://larian.com/press'>Пресс-кит</Link>
							</Typography>
							<Typography className='hover:text-gray-100 cursor-pointer'>
								<Link href='press@larian.com'>Контактная информация</Link>
							</Typography>
						</Stack>
						<Box>
							<Typography className='font-semibold text-white cursor-pointer'>
								<Link href='http://forums.larian.com/'>FORUMS</Link>
							</Typography>
						</Box>
						<Box>
							<Typography className='font-semibold text-white cursor-pointer'>
								<Link href='https://larian.com/support'>SUPPORT</Link>
							</Typography>
						</Box>
						<Stack gap={0.2}>
							<Typography className='font-semibold text-white cursor-pointer'>
								CONTACT
							</Typography>
							<Typography className='hover:text-gray-100 cursor-pointer'>
								<Link href='support@larian.com'>Support</Link>
							</Typography>
							<Typography className='hover:text-gray-100 cursor-pointer'>
								<Link href='info@larian.com'>Business</Link>
							</Typography>
						</Stack>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default HomePage
