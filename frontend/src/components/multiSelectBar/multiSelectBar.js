import React, {useEffect, useState} from "react";
import MultiSelect from "react-multi-select-component";
import {getArraySelectedOS} from "../../actions/arraySelectedOS";
import _ from "lodash";
import {connect} from "react-redux";
import "./style.css"

function MultiSelectBar(props) {
  const options = [
    {label: 'Android', value: "Android"},
    {label: "iOS", value: "iOS"},
    {label: "Window ", value: "Window"},
    {label: 'Linux', value: "Linux"},
    {label: 'Os', value: "Os"},
    {label: "Unknown", value: "Unknown"},
  ];
  const [selected, setSelected] = useState(options);
  const [selectedPrev, setSelectedPrev] = useState(options);
  const [change, setChange] = useState(false)

  useEffect(() => {
    setSelectedPrev(selected);
    let listNameOSSelected = _.map(selected, e => e.value)
    return props.getArraySelectedOS(listNameOSSelected);
    // eslint-disable-next-line
  }, [change]);

  const mountOut = () => {
    if (selected !== selectedPrev)
      setChange(!change)
  }
  return (
    <div onMouseLeave={mountOut}>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select OS"}
        overrideStrings={{
          "selectSomeItems": "Select OS  ",
          "allItemsAreSelected": "All OS are selected.",
          "selectAll": "Select All",
          "search": "Search"
        }}
      />
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  getArraySelectedOS: (arrayOS) => dispatch(getArraySelectedOS(arrayOS))
})

export default connect(null, mapDispatchToProps)(MultiSelectBar);