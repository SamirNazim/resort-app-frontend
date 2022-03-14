import React from "react";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const FilterNavBar = () => {
  const [type, setType] = useState([]);
  const [clicked, isClicked] = useState(false);

  let navigate = useNavigate();
  useEffect(() => {
    const URL = `${process.env.REACT_APP_BACK_END_API_DOMAIN}/properties/type`;
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setType(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Form>
      <div className="form-check form-check-inline">
        <h4>Filter by Type: </h4>
        {type.data?.map((type) => (
          <>
            <Form.Check
              inline
              type="checkbox"
              label={type}
              id={`disabled-default-${type}`}
              onChange={() => {
                if (!clicked) {
                  isClicked(true);
                  navigate(`/listings/${type}`);
                } else {
                  isClicked(false);
                  navigate(`/listings`);
                }
              }}
            />
          </>
        ))}

        <Form.Check
          inline
          type="checkbox"
          label="All"
          id={`disabled-default-${type}`}
          onClick={() => {
            navigate(`/listings`);
          }}
        />
      </div>
    </Form>
  );
};

export default FilterNavBar;
