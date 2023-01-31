import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Checkbox,
    ListSubheader,
    Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
const BrandFilter = ({ onChange }) => {
    const [filters, setFilters] = useState([]);
    const handleToggle = (value) => () => {
        const currentIndex = filters.indexOf(value);
        const newFilters = [...filters];
        if (currentIndex === -1) {
            newFilters.push(value);
        } else {
            newFilters.splice(currentIndex, 1);
        }
        setFilters(newFilters);
        onChange(newFilters);
    };


    return (
        <div>
            <List sx={{ bgcolor: grey[100] }}>
                <ListSubheader sx={{ backgroundColor: "transparent" }}>
                    <Typography fontWeight={600} color={"#000000"}>BRANDS</Typography>
                </ListSubheader>
                {["CARTIER", "CASIO", "GUCCI", "SONATA", "TISSOT", "TOM FORD"].map((val, idx) => (
                    <ListItem key={idx}
                        disableGutters
                        disablePadding
                        sx={{
                            width: "fit-content",
                            "& .MuiButtonBase-root.MuiListItemButton-root": {
                                py: 0.3,
                                "&:hover": {
                                    backgroundColor: "inherit !important",
                                },
                            },
                            "& .MuiListItemIcon-root": {
                                minWidth: "auto",
                            },
                            "& span": {
                                py: 0,
                            },
                        }}>
                        <ListItemButton dense onClick={handleToggle(val)} disableRipple>
                            <Checkbox
                                edge="start"
                                checked={filters.indexOf(val) !== -1}
                                disableRipple />
                            <ListItemText
                                key={idx}
                                primary={
                                    <Typography
                                        variant="body2"
                                        p={0}
                                        color={"grey.main"}
                                        fontWeight={600}
                                    >
                                        {val}
                                    </Typography>
                                }>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default BrandFilter