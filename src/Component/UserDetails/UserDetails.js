import axios from "axios";
import React, { useEffect, useState } from "react";
// import Pagination from "react-js-pagination";
import ReactPaginate from "react-paginate";
import ContantDetails from "../Contactdeatails/ContantDetails";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
function UserDetails() {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(1);
  const [perPageitems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [pageCount, setpageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const data = res.data;
      const slice = data.slice(offset, offset + perPage);
      const pageCountNum = Math.ceil(data.length / perPage);
      setpageCount(pageCountNum);
      setData(slice);
    });
  }, [offset, perPage]);

  const handlePageChange = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;
    setCurrentPage(selectedPage);
    setOffset(offset);
  };
  const handleDropdownClick = (value) => {
    setPerPage(value);
  };
  return (
    <div>
      <ContantDetails data={data}></ContantDetails>

      <DropdownButton id="dropdown-basic-button" title={perPage} style={{ maxHeight: "28px" }}>
        {perPageitems.map((item, i) => {
          return (
            <Dropdown.Item
              as="button"
              key={i}
              onClick={() => {
                handleDropdownClick(item);
              }}
            >
              {item}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={(e) => {
          handlePageChange(e);
        }}
        disabledClassName="disabled"
        initialPage={0}
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        breakClassName="break-me"
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        subContainerClassName="pages pagination"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
}
export default UserDetails;
