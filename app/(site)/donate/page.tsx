"use client";
import SectionHeader from "@/components/Common/SectionHeader";
import Donate from "@/components/Donate";
import Image from "next/image";
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
const DonatePage = () => {
  const [total, setTotal] = useState<number>(0);
  const [order, setOrder] = useState<string[]>([]);

  const [cubeCount, setCubeCount] = useState<number>(1);
  const [toolboxCount, setToolboxCount] = useState<number>(1);

  const handleButtonClick = (value: string) => {
    const previousTotal = total;
    if (value === "TOOLBOX") {
      let newValue = parseFloat(
        process.env.NEXT_PUBLIC_MINERVA_TOOLBOX_PRICE || "0"
      );
      newValue = newValue * toolboxCount;
      const newTotal = previousTotal + newValue;
      setTotal(newTotal);
      setOrder((prevOrder) => [
        ...prevOrder,
        "Minerva ToolBox + Delivery + Setup",
      ]);
    }

    if (value === "CUBE") {
      const newValue = parseFloat(
        process.env.NEXT_PUBLIC_MINERVA_CUBE_PRICE || "0"
      );
      const newTotal = previousTotal + newValue;
      setTotal(newTotal);
      setOrder((prevOrder) => [
        ...prevOrder,
        "Minerva Cube + Delivery + Setup",
      ]);
    }
  };

  return (
    <>
      <title>Donate a System</title>
      <div className="mx-auto md:max-w-c-1154 px-4 md:px-8 pt-20 md:pt-25 pb-200">
        <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: `Donate`,
              description:
                "Choose a system to donate to a school or community. All systems include millions of webpages and their own power source.",
            }}
          />

          <div className="grid gap-4 pt-6 md:grid-cols-2">
            <div className="p-4">
              <h3 className="font-bold text-itemtitle pb-2">Minerva ToolBox</h3>
              <ul>
                <li className="text-black dark:text-manatee last:mb-0">
                  Water Resistant Case
                </li>
                <li className="text-black dark:text-manatee last:mb-0">
                  Minerva Wifi
                </li>
                <li className="text-black dark:text-manatee last:mb-0">
                  Delivery and Setup Instructions
                </li>
                <li className="text-black dark:text-manatee last:mb-0">
                  6 million webpages - Video Lectures - 70,000 Books
                </li>
                <li className="text-black dark:text-manatee last:mb-0">
                  24/7 Uptime - Battery + Solar Panel
                </li>
                <li className="text-black dark:text-manatee last:mb-0">
                  10 Tablets + Integrated Charger + connect any device
                </li>
              </ul>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/technology/minervaToolbox.svg"
                  alt="toolbox"
                  width="280"
                  height="60"
                />
              </div>
              <div className="font-bold text-metatitle3 pb-4">
                {"$" + process.env.NEXT_PUBLIC_MINERVA_TOOLBOX_PRICE}
              </div>
              <Grid container alignItems="center">
                <Grid xs={3}>
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="quantity">Quantity</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={toolboxCount}
                        label="Count"
                        onChange={(event) =>
                          setToolboxCount(Number(event.target.value))
                        }
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3+ Contact Minerva</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid xs={9}>
                  <button
                    aria-label="get connected button"
                    className="font-skia flex bg-lightblue hover:bg-darkblue dark:bg-btndark text-black rounded-xl ease-in-out duration-300 px-4 py-1 mx-auto text-para2"
                    onClick={() => handleButtonClick("TOOLBOX")}
                  >
                    Add to Cart
                  </button>
                </Grid>
              </Grid>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-itemtitle pb-2">Minerva Cube</h3>
              <ul>
                <li className="text-black dark:text-manatee last:mb-0">
                  Water Resistant Case
                </li>
                <li className="text-black dark:text-manatee last:mb-0">
                  Minerva Wifi
                </li>
                <li className="text-black dark:text-manatee last:mb-0">
                  Delivery and Setup Instructions
                </li>
                <li className="text-black dark:text-manatee last:mb-0">
                  6 million webpages - Video Lectures - 70,000 Books
                </li>
                <li className="text-black dark:text-manatee last:mb-0">
                  24/7 Uptime - Battery + Solar Panel
                </li>
                <li className="text-black dark:text-manatee last:mb-0">
                  User Connects any phone/tablet/computer
                </li>
              </ul>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/technology/minervaCubeRuler.svg"
                  alt="cube"
                  width="280"
                  height="60"
                />
              </div>
              <div className="font-bold text-metatitle3 pb-4">
                {"$" + process.env.NEXT_PUBLIC_MINERVA_CUBE_PRICE}
              </div>
              <Grid container alignItems="center">
                <Grid xs={3}>
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="quantity">Quantity</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cubeCount}
                        label="Count"
                        onChange={(event) =>
                          setCubeCount(Number(event.target.value))
                        }
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3+ Contact Minerva</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid xs={9}>
                  <button
                    aria-label="get connected button"
                    className="font-skia flex bg-lightblue hover:bg-darkblue dark:bg-btndark text-black rounded-xl ease-in-out duration-300 px-4 py-1 mx-auto text-para2"
                    onClick={() => handleButtonClick("CUBE")}
                  >
                    Add to Cart
                  </button>
                </Grid>
              </Grid>
            </div>
          </div>
          <div
            className="mx-auto w-full mt-4 mb-4"
            style={{ backgroundColor: "rgba(200, 200, 200, 0.2)" }}
          >
            <Donate
              setTotal={setTotal}
              total={total}
              order={order}
              setOrder={setOrder}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DonatePage;
