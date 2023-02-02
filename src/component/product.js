import { Typography, Button, Box, keyframes } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Watches } from "../store/watches";
import { useState, Fragment } from "react";
import { filterActions } from "@/store/filterSlice";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from "@/store/cartSlice";
import { favoriteActions } from "@/store/favoriteSlice";
import CheckIcon from "@mui/icons-material/Check";
const Product = (name) => {
    const item = Watches[name.name];
    const { cartValue } = useSelector((state) => state.cart);
    const { favoriteValue } = useSelector((state) => state.favorite);
    const isInCart = cartValue.indexOf(name.name) !== -1;
    const isInFavorites = favoriteValue.indexOf(name.name) !== -1;
    const dispatch = useDispatch();
    const router = useRouter();
    const [show, setShow] = useState(false)
    const handleClick = () => {
        dispatch(filterActions.detail(name));
        router.push('/detail');
    }

    const handleClickCart = () => {
        dispatch(cartActions.cart({ name: name.name, price: +item?.price }))
    }
    const handleClickFavorite = () => {
        dispatch(favoriteActions.favorite(name))
    }
    const raise = keyframes`
  0% {
        opacity: 0;
        transform: translateY(-1.7rem);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
  `;
    const raise1 = keyframes`
       0% {
        opacity: 0;
        transform: translateY(1.7rem);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }`
    return (
        <Box
            onMouseOver={() => setShow(true)}
            onMouseOut={() => setShow(false)}
            style={{ display: "flex", flexDirection: "column", width: "100%", padding: "5px 0 15px 0", alignItems: "center", position: "relative", border: ".2px solid grey" }}>
            <img
                src={item?.src[0]}
                alt=""
                width={"80%"}
                onClick={() => handleClick()}
            />

            {!show && <Typography variant='body2'
                color={"secondary.main"}
                fontWeight={700}
                bottom={"15%"}
                sx={{
                    opacity: "0",
                    animation: `${raise} 200ms linear 1 forwards `,
                }} textAlign={"center"}>
                {name?.name}
                <br /> ₹{item?.price}
            </Typography>}

            {show && <Box

                sx={{
                    display: "flex",
                    gap: "2em",
                    opacity: "0",
                    animation: `${raise1} 200ms linear 1 forwards`,

                }}>
                <Button
                    variant='text'
                    disableRipple
                    sx={{
                        borderRadius: "0",
                        border: "1px solid #000000",
                        px: 2,
                        whiteSpace: "nowrap",
                        "&:hover": {
                            color: "#fff",
                            backgroundColor: "secondary.main",
                        },
                    }}
                    onClick={() => handleClickCart()}
                >


                    {!isInCart && (
                        <Fragment>
                            <ShoppingCartOutlinedIcon
                                sx={{ fontSize: { md: "1.5rem", sm: "1rem", xs: "1.5rem" } }}
                            />
                            ADD TO CART
                        </Fragment>
                    )}
                    {isInCart && (
                        <Fragment>
                            <CheckIcon
                                sx={{ fontSize: { md: "1.5rem", sm: "1rem", xs: "1.5rem" } }}
                            />
                            ADDED
                        </Fragment>
                    )}

                </Button>
                <Button
                    variant='text'
                    disableRipple
                    sx={{
                        borderRadius: "0",
                        color: isInFavorites ? "#fff" : "secondary.main",
                        backgroundColor: isInFavorites ? "secondary.main" : "transparent",
                        border: "1px solid #000000",
                        px: 2,
                        whiteSpace: "nowrap",
                        "&:hover": {
                            color: "#fff",
                            backgroundColor: "secondary.main",
                        },
                    }}
                    onClick={() => handleClickFavorite()}
                >

                    <FavoriteBorderOutlinedIcon
                    />
                </Button>
            </Box>}

        </Box>
    )
}

export default Product