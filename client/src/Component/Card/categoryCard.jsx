import React, { useContext, useState } from 'react';
import { productContext } from '../../Services/Context/ContextAPI';

function CategoryCard(props) {
  const [clickedIs, setClickedIs] = useState(false);
  const { sortingList, setSortingList } = useContext(productContext);

  function addToSorting() {
    // Toggle the state of clickedIs
    setClickedIs((prevClickedIs) => !prevClickedIs);

    // Update sortingList based on the checkbox state
    if (!clickedIs) {
      setSortingList((prevSortingList) => [...prevSortingList, props.data]);
    } else {
      setSortingList((prevSortingList) =>
        prevSortingList.filter((item) => item !== props.data)
      );
    }
  }


  return (
    <>
      <div className='form-check'>
        <input
          type="checkbox"
          className="form-check-input"
          onClick={addToSorting}
          checked={clickedIs}
        />
        <label className="form-check-label m-2">{props.data}</label>
      </div>
    </>
  );
}

export default CategoryCard;
