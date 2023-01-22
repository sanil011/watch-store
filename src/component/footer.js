import { Typography, Box, Button, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const footer = () => {
    const customer = ["My Account", "Shop", "Wishlist", "Contacts", "Term and Condition"];
    const company = ["About us", "Delivery", "Payment", "Contacts us"];
    const shop = ["For Him", "For Her", "For Kid", "Smart Watches", "Casio"];
    return (
        <div>
            <div style={{ backgroundColor: "#F5F5F5", display: "flex", justifyContent: "space-between", padding: "4em 1em", borderBottom: "1px solid grey" }}>
                <div>
                    <Typography>BE THE FIRST TO KNOW</Typography>
                    <Typography color={"grey.main"}>Get all the latest information on Events, Sales and Offers.</Typography>
                </div>
                <div>
                    <TextField sx={{ backgroundColor: "#fff", width: "25em", marginRight: "0em" }} label={"YOUR EMAIL"} />
                    <Button
                        variant="outlined"
                        sx={{
                            borderRadius: "0",
                            width: "10em",
                            height: "4em",
                            borderColor: grey[500],
                            color: "#eee",
                            backgroundColor: "secondary.main",
                            "&:hover": {
                                color: "secondary.main",
                                background: "transparent",
                                borderColor: grey[500],
                            },
                        }}
                    >
                        SUBSCRIBE
                    </Button>
                </div>
                <div>
                    <Button
                        variant="outlined"
                        sx={{
                            minWidth: "40px",
                            borderRadius: "0",
                            marginRight: "1em",
                            borderColor: grey[500],
                            color: "secondary.main",
                            backgroundColor: "transparent",
                            padding: "0.9rem",
                            "&:hover": {
                                color: "#eee",
                                borderColor: `${grey[500]} !important`,
                                backgroundColor: "secondary.main",
                            },
                        }}
                    >
                        <FacebookIcon />
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            minWidth: "40px",
                            borderRadius: "0",
                            marginRight: "1em",
                            borderColor: grey[500],
                            color: "secondary.main",
                            backgroundColor: "transparent",
                            padding: "0.9rem",
                            "&:hover": {
                                color: "#eee",
                                backgroundColor: "grey.main",
                                borderColor: `${grey[500]} !important`,
                            },
                        }}
                    >
                        <InstagramIcon />
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            minWidth: "40px",
                            borderRadius: "0",
                            borderColor: grey[500],
                            color: "secondary.main",
                            backgroundColor: "transparent",
                            padding: "0.9rem",
                            "&:hover": {
                                color: "#eee",
                                borderColor: `${grey[500]} !important`,
                                backgroundColor: "secondary.main",
                            },
                        }}
                    >
                        <TwitterIcon />
                    </Button>
                </div>

            </div>
            <div style={{ display: "flex", justifyContent: "space-around", padding: "1.5em 1em", borderBottom: "1px solid grey" }}>

                <div>
                    <Typography fontWeight={600}>CONTACT INFORMATION</Typography>
                    <Typography color={"primary.main"} marginTop={1}>Address:</Typography>
                    <Typography color={"grey.main"}>Sukhrali, M.G. Road </Typography>
                    <Typography color={"grey.main"}>Gurgaon - 122001</Typography>
                    <Typography color={"primary.main"} marginTop={1}>Phone:</Typography>
                    <Typography color={"grey.main"} variant="body2" fontWeight={600}>+95 8510882843</Typography>
                    <Typography color={"primary.main"} marginTop={1}>Email:</Typography>
                    <Typography color={"grey.main"} variant="body2" fontWeight={600}>lorem@lorem.com</Typography>
                </div>
                <div>
                    <Typography fontWeight={600}>CUSTOM CARE</Typography>
                    {customer.map((db, idx) => (
                        <Typography key={idx} color={"grey.main"} variant="body2" marginTop={2} fontWeight={600}>{db}</Typography>
                    ))}
                </div>
                <div>
                    <Typography fontWeight={600}>COMPANY</Typography>
                    {company.map((db, idx) => (
                        <Typography key={idx} color={"grey.main"} variant="body2" marginTop={2} fontWeight={600}>{db}</Typography>
                    ))}
                </div>
                <div>
                    <Typography fontWeight={600}>SHOP</Typography>
                    {shop.map((db, idx) => (

                        <Typography key={idx} color={"grey.main"} variant="body2" marginTop={2} fontWeight={600}>{db}</Typography>
                    ))}
                </div>
            </div>

            <div style={{ backgroundColor: "#F5F5F5", textAlign: "center", padding: "1.5em 0" }}>
                <Typography color={"grey.main"}>2023©All Right Reserved</Typography>
            </div>
        </div>
    )
}

export default footer