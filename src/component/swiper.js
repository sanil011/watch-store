import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import { Typography, Box, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import Pic1 from "../assets/slide-1.jpg"
import Pic2 from "../assets/slide-2.jpg"
import Pic3 from "../assets/slide-3.jpg"
import { useState } from 'react'
import { keyframes } from "@emotion/react";
import { Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import 'swiper/css/scrollbar';
const Swipers = () => {
    const [currentSlide, setCurrentSlide] = useState(true);
    const myEffect = keyframes`
  to{
    opacity:1;
    transform:translate(0px)
  }
`;
    return (
        <Swiper
            spaceBetween={50}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Pagination, A11y, Autoplay]}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => setCurrentSlide(currentSlide)}
            slidesPerView={1}>
            <SwiperSlide>
                <Box sx={{
                    display: "flex", position: "relative",
                    "& img": {
                        width: {
                            md: "100%",
                            sm: "150%",
                            xs: "230%",
                        }
                    },
                    width: "100%", overflow: "hidden", height: "calc(100vh - 125px)"
                }}>
                    <Box zIndex="999"
                        marginTop={{ xs: 10, md: 28 }} marginLeft={{ xs: 5, md: 10 }}
                        sx={{
                            animation: `${currentSlide ? `${myEffect} 400ms ease-in 1 forwards` : ""
                                }`,
                            opacity: 0,
                            transform: "translateY(80px)",
                        }}
                    >
                        <Typography color={"primary.main"}
                            fontSize={{
                                md: "1rem",
                                sm: "0.8rem",
                                xs: "0.6rem",
                            }}
                        >
                            CONSECTETUER ADIPISCING ELIT
                        </Typography>
                        <Typography variant='h2'
                            width={"60%"}
                            letterSpacing={{
                                md: -3,
                                sm: -2,
                                xs: 0,
                            }}
                            fontWeight={"bold"}
                            fontSize={{
                                md: "3.75rem",
                                sm: "2.8rem",
                                xs: "1.5rem",
                            }} >
                            GREAT WATCH FROM THE WATRIX
                        </Typography>
                        <Typography
                            fontSize={{
                                md: "1rem",
                                sm: "0.8rem",
                                xs: "0.6rem",
                            }}
                            color={grey[500]}>
                            Highlight your status and style
                        </Typography>
                        <Button
                            sx={{
                                width: "fit-content",
                                margin: "6px 0",
                                backgroundColor: "primary.main",
                                color: "#fff",
                                "&:hover": {
                                    color: "primary.main",
                                    border: 1,
                                    borderColor: grey[500],
                                },
                            }}
                        >
                            SHOP NOW
                        </Button>
                    </Box>
                    <Image src={Pic1} fill />
                    {/* <img src={Pic1} alt="" /> */}

                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ display: "flex", position: "relative", width: "100%", overflow: "hidden", height: "calc(100vh - 120px)" }}>

                    <Box zIndex="999" marginTop={{ xs: 10, md: 28 }} marginLeft={{ xs: 5, md: 10 }}
                        sx={{
                            animation: `${currentSlide ? `${myEffect} 400ms ease-in 1 forwards` : ""
                                }`,

                            opacity: 0,
                            transform: "translateY(80px)",
                        }}>
                        <Typography
                            color={"primary.main"}
                            fontSize={{
                                md: "1rem",
                                sm: "0.8rem",
                                xs: "0.6rem",
                            }}
                        >
                            CONSECTETUER ADIPISCING ELIT
                        </Typography>
                        <Typography variant='h2'
                            width={"60%"}
                            letterSpacing={{
                                md: -3,
                                sm: -2,
                                xs: 0,
                            }}
                            fontWeight={"bold"}
                            fontSize={{
                                md: "3.75rem",
                                sm: "2.8rem",
                                xs: "1.5rem",
                            }}
                        >
                            GREAT WATCH FROM THE WATRIX
                        </Typography>
                        <Typography
                            fontSize={{
                                md: "1rem",
                                sm: "0.8rem",
                                xs: "0.6rem",
                            }} color={grey[500]}>
                            Highlight your status and style
                        </Typography>
                        <Button
                            sx={{
                                width: "fit-content",
                                margin: "6px 0",
                                backgroundColor: "primary.main",
                                color: "#fff",
                                "&:hover": {
                                    color: "primary.main",
                                    border: 1,
                                    borderColor: grey[500],
                                },
                            }}
                        >
                            SHOP NOW
                        </Button>
                    </Box>
                    <Image src={Pic2} fill />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box sx={{ display: "flex", position: "relative", width: "100%", overflow: "hidden", height: "calc(100vh - 120px)" }}>
                    <Box zIndex="999" marginTop={{ xs: 10, md: 28 }} marginLeft={{ xs: 5, md: 10 }}
                        sx={{
                            animation: `${currentSlide ? `${myEffect} 400ms ease-in 1 forwards` : ""
                                }`,
                            opacity: 0,
                            transform: "translateY(80px)",
                        }}>
                        <Typography color={"primary.main"}
                            fontSize={{
                                md: "1rem",
                                sm: "0.8rem",
                                xs: "0.6rem",
                            }}
                        >
                            CONSECTETUER ADIPISCING ELIT
                        </Typography>
                        <Typography variant='h2'
                            width={"60%"}
                            letterSpacing={{
                                md: -3,
                                sm: -2,
                                xs: 0,
                            }}
                            fontWeight={"bold"}
                            fontSize={{
                                md: "3.75rem",
                                sm: "2.8rem",
                                xs: "1.5rem",
                            }}
                        >
                            GREAT WATCH FROM THE WATRIX
                        </Typography>
                        <Typography
                            fontSize={{
                                md: "1rem",
                                sm: "0.8rem",
                                xs: "0.6rem",
                            }}
                            color={grey[500]}>
                            Highlight your status and style
                        </Typography>
                        <Button
                            sx={{
                                width: "fit-content",
                                margin: "6px 0",
                                backgroundColor: "primary.main",
                                color: "#fff",
                                "&:hover": {
                                    color: "primary.main",
                                    border: 1,
                                    borderColor: grey[500],
                                },
                            }}
                        >
                            SHOP NOW
                        </Button>
                    </Box>
                    <Image src={Pic3} fill />
                </Box>
            </SwiperSlide>
        </Swiper >
    )
}

export default Swipers