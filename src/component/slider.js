import Image from 'next/image'
import { Typography, Box, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import Pic1 from "../assets/slide-1.jpg"
import Pic2 from "../assets/slide-2.jpg"
import Pic3 from "../assets/slide-3.jpg"
import { useState } from 'react'
import { keyframes } from "@emotion/react";

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState("1");
    const myEffect = keyframes`
  to{
    opacity:1;
    transform:translate(0px)
  }
`;
    console.log(currentSlide)
    return (
        <div>
            <div style={{ display: `${currentSlide === "1" ? "flex" : "none"}`, position: "relative", width: "100%", overflow: "hidden", height: "calc(100vh - 150px)" }}>
                <Box zIndex="999" marginTop={28} marginLeft={10}
                    sx={{
                        animation: `${currentSlide === "1" ? `${myEffect} 400ms ease-in 1 forwards` : ""
                            }`,
                        opacity: 0,
                        transform: "translateY(80px)",
                    }}
                >
                    <Typography color={"primary.main"}>
                        CONSECTETUER ADIPISCING ELIT
                    </Typography>
                    <Typography variant='h2' width={"60%"} fontWeight={"bold"}>
                        GREAT WATCH FROM THE WATRIX
                    </Typography>
                    <Typography color={grey[500]}>
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
                <Image src={Pic1} fill alt="" />
            </div>
            <div style={{ display: `${currentSlide === "2" ? "flex" : "none"}`, position: "relative", width: "100%", overflow: "hidden", height: "calc(100vh - 150px)" }}>
                <Box zIndex="999" marginTop={28} marginLeft={10}
                    sx={{
                        animation: `${currentSlide === "2" ? `${myEffect} 400ms ease-in 1 forwards` : ""
                            }`,
                        opacity: 0,
                        transform: "translateY(80px)",
                    }}>
                    <Typography color={"primary.main"}>
                        CONSECTETUER ADIPISCING ELIT
                    </Typography>
                    <Typography variant='h2' width={"60%"} fontWeight={"bold"}>
                        GREAT WATCH FROM THE WATRIX
                    </Typography>
                    <Typography color={grey[500]}>
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
                <Image src={Pic2} fill alt="" />
            </div>
            <div style={{ display: `${currentSlide === "3" ? "flex" : "none"}`, position: "relative", width: "100%", overflow: "hidden", height: "calc(100vh - 150px)" }}>
                <Box zIndex="999" marginTop={28} marginLeft={10}
                    sx={{
                        animation: `${currentSlide === "3" ? `${myEffect} 400ms ease-in 1 forwards` : ""
                            }`,
                        opacity: 0,
                        transform: "translateY(80px)",
                    }}>
                    <Typography color={"primary.main"}>
                        CONSECTETUER ADIPISCING ELIT
                    </Typography>
                    <Typography variant='h2' width={"60%"} fontWeight={"bold"}>
                        GREAT WATCH FROM THE WATRIX
                    </Typography>
                    <Typography color={grey[500]}>
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
                <Image src={Pic3} fill alt="" />
            </div>
            <div style={{ textAlign: "center", margin: "5px 0" }}>
                <span className={`${currentSlide === "1" ? "dot active" : "dot"}`} onClick={() => setCurrentSlide("1")}></span>
                <span className={`${currentSlide === "2" ? "active dot" : "dot"}`} onClick={() => setCurrentSlide("2")}></span>
                <span className={`${currentSlide === "3" ? "active dot" : "dot"}`} onClick={() => setCurrentSlide("3")}></span>
            </div>
        </div>
    )
}

export default Slider