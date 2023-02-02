import {
    Box,
    Grid,
    Typography,
    TextareaAutosize,
    TextField,
    Button,
    Stack,
} from "@mui/material";
import { memo } from "react";
import { grey } from "@mui/material/colors";

const Contacts = () => {
    return (
        <>
            <Stack my={8}>
                <Typography
                    variant="h4"
                    color={"secondary.main"}
                    fontWeight={700}
                    textAlign={"center"}
                    my={4}
                >
                    WRITE TO US
                </Typography>
                <Typography color="grey.main" fontWeight={600} textAlign={"center"}>
                    We&lsquo;re happy to answer any questions you have or provide you with an
                    estimate. Just <br /> send us a message in the form below with any
                    questions.
                </Typography>
            </Stack>

            <Grid container >
                <Grid item xs={12} sm={6} sx={{ paddingTop: "1.5em" }}>
                    <Stack direction={"column"} gap={3} mx={4}>
                        <TextField label="Name"
                            size="small"
                            variant="outlined"
                            placeholder="Please Enter Your Name" required />
                        <TextField label="Email"
                            size="small"
                            variant="outlined"
                            placeholder="Please Enter Your Phone Number" required />
                        <TextField label="Phone"
                            size="small"
                            variant="outlined"
                            placeholder="Please Enter Your Email" required />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} m={{ xs: 1, sm: 0 }}>
                    <label htmlFor="review" style={{ fontSize: "0.9rem" }}>
                        Message *
                    </label>
                    <TextareaAutosize
                        aria-label="Message"
                        minRows={10}
                        placeholder="Please Enter Your Message"
                        style={{
                            width: "100%",
                            color: grey[600],
                            transition: "200ms",
                            borderColor: grey[300],
                            borderRadius: 1.5,
                            resize: "vertical",
                            padding: "1rem",
                            marginTop: "0.5rem",
                        }}
                        id={"Message"}
                    />
                    <Button
                        variant="outlined"
                        sx={{
                            fontSize: "0.8rem",
                            borderRadius: 0,
                            width: "fit-content",
                            color: "#fff",
                            marginTop: "2em",
                            px: 2,
                            backgroundColor: "primary.main",
                            "&:hover": {
                                backgroundColor: "primary.light",
                            },
                        }}
                    >
                        SEND MESSAGE
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Contacts