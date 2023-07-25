"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import getCities from "@/lib/getCities";

const AutoComplete = ({setCity}) => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue !== "") {
      const timer = setTimeout(() => {
        cities_list(inputValue);
      }, 700);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setOptions([]);
    }
  }, [inputValue]);

  const cities_list = async (city) => {
    if (city) {
      const response = await getCities(city || "");
      const cities = response?.data?.map((item) => item.city_name);
      setOptions(cities);
    }
  };

  const filterOptions = (options, { inputValue }) => {
    return options?.filter((option) =>
      option?.toLowerCase().startsWith(inputValue.toLowerCase())
    );
  };

  return (
    <div className="input_control_wrapper">
      {/* <p>{JSON.stringify(inputValue)}</p> */}
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue(newValue);
            setCity(newValue)
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue(newValue.inputValue);
            setCity(newValue.inputValue)
          } else {
            setValue(newValue);
            setCity(newValue)
          }
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        freeSolo
        id="controllable-states-demo"
        options={options || []}
        filterOptions={filterOptions}
        sx={{
          width: "100%",
          "& .MuiAutocomplete-input": {
            "&:hover, &:focus": {
              outline: "none !important",
              border: "none !important",
            },
          },
        }}
        renderInput={(params) => (
          <TextField
            autoComplete="off"
            key="my-input-key"
            className="border-none outline-none"
            placeholder="city"
            {...params}
          />
        )}
        // blurOnSelect={false}
      />
    </div>
  );
};

export default AutoComplete;
