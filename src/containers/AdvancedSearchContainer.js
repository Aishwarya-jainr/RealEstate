import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getPropertyList } from "../redux/actions/propertiesAction";

import { FormWrapper, Form } from "../components";

import { priceFormat } from "../helpers/helper_functions";

const AdvancedSearchContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { properties } = useSelector((state) => state.propertyList);

  const price = properties.map(
    (property) => +property.price.split(",").join("")
  );

  const maxPrice = Math.max.apply(null, price),
    minPrice = Math.min.apply(null, price);

  const categories = [
    ...new Set(properties.map((property) => property.category)),
  ];

  const listedIn = [
    ...new Set(properties.map((property) => property.listedIn)),
  ];

  const counties = [
    ...new Set(properties.map((property) => property.address.county)),
  ];
  const rooms = [
    ...new Set(properties.map((property) => property.features.bedrooms)),
  ].sort((a, b) => a - b);

  const [searchParams, setSearchParams] = useState({
    type: "",
    county: "",
    category: "",
    bedrooms: "",
    priceRange: 0,
    searchTerm: "",
  });

  const handleInputChange = (field, value) => {
    setSearchParams((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to listings page with search parameters
    history.push({
      pathname: "/listing",
      state: { searchParams },
    });
  };

  useEffect(() => {
    dispatch(getPropertyList());
  }, [dispatch]);

  return (
    <FormWrapper>
      <FormWrapper.Header>
        <FormWrapper.Title>Advanced Search</FormWrapper.Title>
      </FormWrapper.Header>
      <FormWrapper.Content>
        <Form onSubmit={handleSubmit}>
          <Form.FormGroup>
            <Form.Select
              value={searchParams.type}
              onChange={(e) => handleInputChange("type", e.target.value)}
            >
              <Form.Option value="">Types</Form.Option>
              {listedIn.map((type) => (
                <Form.Option key={type} value={type}>
                  {type}
                </Form.Option>
              ))}
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Select
              value={searchParams.county}
              onChange={(e) => handleInputChange("county", e.target.value)}
            >
              <Form.Option value="">Counties</Form.Option>
              {counties.map((county) => (
                <Form.Option key={county} value={county}>
                  {county}
                </Form.Option>
              ))}
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Select
              value={searchParams.category}
              onChange={(e) => handleInputChange("category", e.target.value)}
            >
              <Form.Option value="">Categories</Form.Option>
              {categories.map((category) => (
                <Form.Option key={category} value={category}>
                  {category}
                </Form.Option>
              ))}
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Select
              value={searchParams.bedrooms}
              onChange={(e) => handleInputChange("bedrooms", e.target.value)}
            >
              <Form.Option value="">Bed Rooms</Form.Option>
              {rooms.map((room) => (
                <Form.Option key={room} value={room}>
                  {room}
                </Form.Option>
              ))}
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Span>
              {" "}
              Price range: ₹{priceFormat(+searchParams.priceRange)} to ₹{" "}
              {priceFormat(maxPrice)}
            </Form.Span>
            <Form.RangeInput
              type="range"
              min={minPrice}
              max={maxPrice}
              value={searchParams.priceRange}
              onChange={(e) => handleInputChange("priceRange", e.target.value)}
            />
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Input
              type="text"
              placeholder="Search Term"
              value={searchParams.searchTerm}
              onChange={(e) => handleInputChange("searchTerm", e.target.value)}
            />
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.SubmitInput type="submit" value="Search" />
          </Form.FormGroup>
        </Form>
      </FormWrapper.Content>
    </FormWrapper>
  );
};

export default AdvancedSearchContainer;
