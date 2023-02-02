import {
    Drawer,
    ListItem,
    ListItemButton,
    Box,
    IconButton,
    List,
    Typography,
    ListItemText,
    ListItemIcon,
    Stack,
} from "@mui/material";
import { useRouter } from "next/router";
import { Watches } from "@/store/watches";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { Fragment } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { grey } from "@mui/material/colors";
import { cartActions } from "@/store/cartSlice";

const Sidebar = ({ open, close, anchor }) => {
    const { cartValue, totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const router = useRouter();
    return (
        <Drawer open={open} onClose={close} anchor={anchor}>
            <Box>


                {anchor === "left" && (
                    <List>
                        {["HOME", "ABOUT", "DELIVERY", "CONTACTS"].map((text) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <Link
                                        style={{
                                            width: "100%",
                                        }}
                                        href={text === "HOME" ? "/" : `/${text.toLowerCase()}`}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            color={router.pathname == "/" ? "primary.main" : "grey.main"}
                                            fontSize={12}
                                        >
                                            {text}
                                        </Typography>
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                )}

                {anchor === "right" && (
                    <List>
                        <ListItem>
                            <ListItemText
                                disableTypography
                                sx={{
                                    fontSize: "1.5rem",
                                }}
                            >
                                Cart
                            </ListItemText>
                            <ListItemIcon
                                sx={{
                                    minWidth: "fit-content",
                                    cursor: "pointer",
                                }}
                                onClick={close}
                            >
                                <CloseIcon />
                            </ListItemIcon>
                        </ListItem>

                        {cartValue.length > 0 && (
                            <Box>
                                <ListItem>
                                    <List
                                        sx={{
                                            borderBottom: 1,
                                            borderColor: `${grey[300]} !important`,
                                        }}>
                                        {cartValue?.map((db, idx) => (
                                            <ListItem key={idx}>
                                                <Stack direction="row" width={"100%"}>
                                                    <Box width={"80px"}>
                                                        <img
                                                            src={Watches[db]["src"][0]}
                                                            style={{
                                                                maxWidth: "100%",
                                                            }}
                                                        />
                                                    </Box>
                                                    <Stack>
                                                        <Typography
                                                            color="primary.main"
                                                            variant="subtitle1"
                                                        >
                                                            {db}
                                                        </Typography>
                                                        <Typography color="grey.main" variant="subtitle1">
                                                            1 x ₹{Watches[db]["price"]}
                                                        </Typography>
                                                    </Stack>
                                                    <ListItemIcon
                                                        onClick={() => dispatch(cartActions.removeItem({ name: db, price: + Watches[db]["price"] }))}
                                                    >
                                                        <CloseIcon />
                                                    </ListItemIcon>
                                                </Stack>
                                            </ListItem>
                                        ))}
                                    </List>
                                </ListItem>
                                <ListItem>
                                    <ListItemText disableTypography>
                                        <Typography
                                            variant="subtitle1"
                                            color={grey[600]}
                                            fontWeight={800}
                                        >
                                            Subtotal:
                                            <Typography
                                                color={"grey.main"}
                                            >
                                                ₹{totalPrice}
                                            </Typography>
                                        </Typography>
                                    </ListItemText>
                                </ListItem>

                                <ListItem onClick={close}>
                                    <Link href="/cart">
                                        <ListItemButton
                                            sx={{
                                                borderRadius: 1,
                                                columnGap: "0.5rem",
                                                justifyContent: "center",
                                                color: "#fff",
                                                bgcolor: "#27d18b",
                                                width: "200px",
                                                mx: "auto",
                                                "&:hover": {
                                                    bgcolor: "#78e6b9",
                                                },
                                            }}
                                        >


                                            <ListItemIcon
                                            >
                                                <ShoppingCartOutlinedIcon />
                                            </ListItemIcon>
                                            Checkout
                                        </ListItemButton>
                                    </Link>

                                </ListItem>
                            </Box>
                        )}

                        {cartValue.length === 0 && (
                            <ListItem>
                                <ListItemText
                                    disableTypography
                                    sx={{ color: "grey.main", fontSize: "1.2rem" }}
                                >
                                    No products in the cart.
                                </ListItemText>
                            </ListItem>
                        )}
                    </List>)}
            </Box>
        </Drawer>
    )
}

export default Sidebar