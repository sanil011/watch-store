import { Typography, Button, Box, Grid } from "@mui/material";
import { Watches } from '../store/watches';
import Slider from "react-slick";
import { useState } from "react"
const Detail = () => {
    const item = Watches["BOLD ROUND ANALOG GUNMETAL DIAL"]["src"];
    const [nav1, setNav1] = useState(999);

    const [nav2, setNav2] = useState();
    console.log(item)

    return (
        <div style={{ margin: "0 4em" }} >
            <Box sx={{ width: "50%", }}>
                <div style={{ width: "60%", height: "500px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    {item.map((db, idx) => (
                        <div key={idx} style={{ width: "35%", height: "100px", marginBottom: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={db} onMouseOver={() => setNav1(idx)} value={idx} style={{ width: "80%", height: "100%", objectFit: "contain" }} />
                            <img src={db} style={{ display: `${nav1 === 999 ? "flex" : nav1 === idx ? "flex" : "none"}`, top: "0", left: "35%", width: "100%", position: "absolute", height: "100%", objectFit: "cover" }} />
                        </div>
                    ))}
                </div>
            </Box>
        </div>
    )
}

export default Detail