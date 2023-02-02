import {
    Typography,
    Button,
    Box,
    Card,
    CardMedia,
    Stack,
    CardContent,
    Rating,
    CardActions,
    Grid
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Watches } from "@/store/watches";
import { favoriteActions } from "@/store/favoriteSlice";
import { cartActions } from "@/store/cartSlice";
import { Fragment } from "react";
const Favorite = () => {
    const { favoriteValue } = useSelector((state) => state.favorite);
    const { cartValue } = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    return (
        <Box>
            <Typography variant="h4" fontWeight={600} m={3}>Whishlist</Typography>
            <Grid container >

                {favoriteValue.length === 0 ? <Typography
                    variant="h6"
                    color={"secondary.main"}
                    fontWeight={600}
                    mt={10}
                    pl={3}
                >
                    No products were added to the wishlist.
                </Typography> :
                    favoriteValue.map((db, idx) => (
                        <Grid key={idx} xs={12} sm={6} md={3} p={1}>
                            <Card
                                sx={{
                                    "&:hover": {
                                        boxShadow: "0 4px 25px 0 rgb(34 41 47 / 25%)",
                                    },
                                }}
                            >
                                <CardMedia
                                    component={"img"}
                                    alt={db}
                                    sx={{
                                        width: 150,
                                        mx: "auto",
                                    }}
                                    image={Watches[db]["src"][0]}
                                />
                                <CardContent>
                                    <Stack direction={"row"} justifyContent={"space-between"}>
                                        <Rating
                                            value={Math.ceil(Math.random() * 5)}
                                            readOnly
                                            size="small"
                                        />
                                        <Typography
                                            variant="body1"
                                            color={"secondary.main"}
                                            fontWeight={600}
                                        >
                                            ₹{Watches[db]["price"]}
                                        </Typography>
                                    </Stack>
                                    <Typography
                                        variant="subtitle2"
                                        color={"primary.main"}
                                        overflow={"hidden"}
                                        textOverflow={"ellipsis"}
                                        whiteSpace={"nowrap"}
                                    >
                                        {db}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color={"grey.main"}
                                        overflow={"hidden"}
                                        textOverflow={"ellipsis"}
                                        whiteSpace={"nowrap"}
                                        fontSize={"0.6rem"}
                                    >
                                        TAGS: {Watches[db]["tags"].join(", ")}
                                    </Typography>
                                </CardContent>

                                <CardActions
                                    sx={{
                                        flexDirection: {
                                            sm: "column",
                                            xs: "row",
                                        },
                                        p: 0,
                                    }}
                                >
                                    <Button
                                        disableRipple
                                        variant="text"
                                        color="secondary"
                                        sx={{
                                            opacity: 0.7,
                                            bgcolor: `${grey[100]} !important`,
                                            width: "100%",
                                            columnGap: "0.5rem",
                                            borderRadius: {
                                                sm: "4px",
                                                xs: 0,
                                            },
                                        }}
                                        onClick={() =>
                                            dispatch(favoriteActions.removeItem(db))
                                        }
                                    >
                                        <CloseIcon
                                            sx={{
                                                fontSize: "1rem",
                                            }}
                                        />
                                        Remove
                                    </Button>
                                    <Button
                                        // disabled={cart.indexOf(db) !== -1}
                                        variant="outlined"
                                        color="white"
                                        sx={{
                                            bgcolor: "primary.main",
                                            width: "100%",
                                            ml: `${0} !important`,
                                            border: 1,
                                            borderColor: "primary.main",
                                            borderRadius: {
                                                sm: "4px",
                                                xs: 0,
                                            },
                                            "&:hover": {
                                                bgcolor: "primary.main",
                                                border: 1,
                                                borderColor: "primary.main",
                                            },
                                        }}
                                        onClick={() => {
                                            dispatch(favoriteActions.removeItem(db));
                                            dispatch(cartActions.cart({ name: db, price: +Watches[db]["price"] }))
                                        }}
                                    >
                                        {cartValue.indexOf(db) === -1 && (
                                            <Fragment>
                                                <ShoppingCartOutlinedIcon /> Move to cart
                                            </Fragment>
                                        )}
                                        {cartValue.indexOf(db) !== -1 && (
                                            <Fragment>
                                                <CheckIcon />
                                                in cart
                                            </Fragment>
                                        )}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </Box>
    )
}

export default Favorite
