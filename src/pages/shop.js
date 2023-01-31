import { Typography } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import Product from "@/component/product";
import BrandFilter from "@/component/shop/BrandFilter";
import PriceFilter from "@/component/shop/PriceFilter";
import StrapFilter from "@/component/shop/StrapFilter";
import ColorFilter from "@/component/shop/ColorFilter";
import { filterActions } from "@/store/filterSlice";
import { useEffect, useState } from "react"
const Shop = () => {
    const { watches } = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    console.log(watches)
    const [filters, setFilters] = useState({
        BRAND: [],
        PRICE: [],
        COLOR: [],
        STRAP: [],
    });

    const onBrandsChange = (brandsFilter) => {
        setFilters(
            (prev) =>
            (prev = {
                ...prev,
                BRAND: brandsFilter,
            })
        );
    };
    const onPriceChange = (priceFilters) => {
        setFilters(
            (prev) =>
            (prev = {
                ...prev,
                PRICE: priceFilters,
            })
        );
    };
    const onColorChange = (colorsFilter) => {
        setFilters(
            (prev) =>
            (prev = {
                ...prev,
                COLOR: colorsFilter,
            })
        );
    };
    const onStrapChange = (strapFilter) => {
        setFilters(
            (prev) =>
            (prev = {
                ...prev,
                STRAP: strapFilter,
            })
        );
    };
    useEffect(() => {
        dispatch(filterActions.brand(filters.BRAND));
        dispatch(filterActions.color(filters.COLOR));
        dispatch(filterActions.price(filters.PRICE));
        dispatch(filterActions.strap(filters.STRAP));
        dispatch(filterActions.filter())
    }, [filters])

    return (
        <div style={{ padding: "0 1em" }}>
            <Typography my={4} fontWeight={600} variant="h4" textAlign={"center"}>MEN&lsquo;S WATCHES</Typography>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "2em" }}>
                <div style={{ width: "25%" }}>
                    <BrandFilter onChange={onBrandsChange} />
                    <PriceFilter onChange={onPriceChange} />
                    <StrapFilter onChange={onStrapChange} />
                    <ColorFilter onChange={onColorChange} />
                </div>
                <div style={{ width: "75%", display: "flex", flexWrap: "wrap" }}>
                    {watches.map((db, idx) => (
                        <div key={idx} style={{ width: "33.33%" }}>
                            <Product name={db} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop