import { Slider, Typography, Button, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { grey } from "@mui/material/colors";

const PriceFilter = ({ onChange }) => {
    const [filters, setFilters] = useState([75, 500]);
    const handleChange = (event, newValue) => {
        setFilters(newValue);
    };
    const onClickHandler = () => {
        onChange(filters);
    };

    return (
        <Stack py={4}
            px={2} style={{ backgroundColor: grey[100], marginTop: "1em" }}>
            <Typography fontWeight={600} color={"#000000"}>PRICE</Typography>
            <Slider
                getAriaLabel={() => "Price range"}
                value={filters}
                onChange={handleChange}
                min={75}
                max={500}
                valueLabelDisplay="auto"
            />
            <Typography color={"grey.main"} variant={"body2"} textAlign={"center"}>
                {filters.join(" - ")}
            </Typography>
            <Button
                disableRipple
                variant={"outlined"}
                sx={{
                    width: "90%",
                    marginTop: "1em"
                }}
                onClick={onClickHandler}
            >
                FILTER
            </Button>
        </Stack>
    )
}

export default PriceFilter