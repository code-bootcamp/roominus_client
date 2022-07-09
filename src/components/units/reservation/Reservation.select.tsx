import { Select } from "antd";
import React, { useState } from "react";
const { Option } = Select;
const provinceData = ["Zhejiang", "Jiangsu"];
const cityData = {
  Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
  Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
};

export default function RoomSelectBox() {
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);

  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>매장 선택</span>
        <Select
          defaultValue={provinceData[0]}
          style={{
            width: 280,
            borderRadius: 25,
          }}
          onChange={handleProvinceChange}
        >
          {provinceData.map((province) => (
            <Option key={province}>{province}</Option>
          ))}
        </Select>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>테마 선택</span>
        <Select
          style={{
            width: 280,
          }}
          value={secondCity}
          onChange={onSecondCityChange}
        >
          {cities.map((city) => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
      </div>
    </>
  );
}
