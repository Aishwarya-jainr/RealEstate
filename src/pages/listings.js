import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  HeaderContainer,
  ListingItemContainer,
  AdvancedSearchContainer,
  FooterContainer,
} from "../containers";
import { Section } from "../components";
import { getPropertyList } from "../redux/actions/propertiesAction";

const Listing = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = location.state?.searchParams;

  const listProperties = useSelector((state) => state.propertyList);
  const { properties } = listProperties;

  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    dispatch(getPropertyList());
  }, [dispatch]);

  useEffect(() => {
    if (searchParams && properties.length > 0) {
      // Filter properties based on search parameters
      let filtered = properties;

      // Filter by type (listedIn)
      if (searchParams.type) {
        filtered = filtered.filter(
          (property) => property.listedIn === searchParams.type
        );
      }

      // Filter by county
      if (searchParams.county) {
        filtered = filtered.filter(
          (property) => property.address.county === searchParams.county
        );
      }

      // Filter by category
      if (searchParams.category) {
        filtered = filtered.filter(
          (property) => property.category === searchParams.category
        );
      }

      // Filter by bedrooms
      if (searchParams.bedrooms) {
        filtered = filtered.filter(
          (property) =>
            property.features.bedrooms === parseInt(searchParams.bedrooms)
        );
      }

      // Filter by price range
      if (searchParams.priceRange > 0) {
        filtered = filtered.filter((property) => {
          const propertyPrice = +property.price.split(",").join("");
          return propertyPrice >= searchParams.priceRange;
        });
      }

      // Filter by search term (title, location, or description)
      if (searchParams.searchTerm) {
        const term = searchParams.searchTerm.toLowerCase();
        filtered = filtered.filter(
          (property) =>
            property.title.toLowerCase().includes(term) ||
            property.location.toLowerCase().includes(term) ||
            property.description.toLowerCase().includes(term)
        );
      }

      setFilteredProperties(filtered);
    } else {
      // If no search params, show all properties
      setFilteredProperties(properties);
    }
  }, [searchParams, properties]);

  const displayProperties = filteredProperties.length > 0 ? filteredProperties : properties;

  return (
    <>
      <HeaderContainer bg="false" />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <Section.Flex>
            <Section.FlexItem width="30%" relative flexStart>
              <Section.Shadow>
                <AdvancedSearchContainer />
              </Section.Shadow>
            </Section.FlexItem>
            <Section.FlexItem width="65%">
              <Section.Title>
                {searchParams
                  ? `Search Results (${displayProperties.length} properties found)`
                  : "Our Property List"}
              </Section.Title>
              <Section.Content>
                {displayProperties.length > 0 ? (
                  displayProperties.map((featured) => (
                    <ListingItemContainer
                      key={featured.id}
                      featured={featured}
                      width="49%"
                    />
                  ))
                ) : (
                  <Section.Text>
                    No properties found matching your search criteria.
                  </Section.Text>
                )}
              </Section.Content>
              <Section.Footer>
                <Section.Button>More Listing</Section.Button>
              </Section.Footer>
            </Section.FlexItem>
          </Section.Flex>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default Listing;
