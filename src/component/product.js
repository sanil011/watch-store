import { Typography, Button, Box } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Watches } from "../store/watches";
import { useState } from "react";
import { filterActions } from "@/store/filterSlice";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { cartActions } from "@/store/cartSlice";
import { favoriteActions } from "@/store/favoriteSlice";
const Product = (name) => {
    const item = Watches[name.name];
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
                textAlign={"center"}>
                {name?.name}
                <br /> ₹{item?.price}
            </Typography>}

            {show && <div style={{ display: "flex", gap: "2em" }}>
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

                    <ShoppingCartOutlinedIcon
                    />
                    ADD TO CART

                </Button>
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
                    onClick={() => handleClickFavorite()}
                >

                    <FavoriteBorderOutlinedIcon
                    />
                </Button>
            </div>}

        </Box>
    )
}

export default Product