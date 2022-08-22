import React from "react";
import State from "./State";
import { CasesContext } from "../../Helper/Context";
import { useContext, useState } from "react";
import ReactPaginate from "react-paginate";

const PER_PAGE = 6;

export default function States() {
  const { states } = useContext(CasesContext);
  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = states
    .slice(offset, offset + PER_PAGE)
    .map((state) => (
      <State
        key={state._id}
        state={state.state}
        confirmed={state.confirmedCases}
        admission={state.casesOnAdmission}
        discharged={state.discharged}
        deaths={state.death}
      />
    ));
  const pageCount = Math.ceil(states.length / PER_PAGE);
  return (
    <div className="states flex flex-wrap justify-between gap-y-10 pt-4 md:px-2">
      {currentPageData}
      <div className="pagination">
        <ReactPaginate
          breakLabel="..."
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName={"pagination-list"}
          previousLinkClassName={"pagination-link"}
          nextLinkClassName={"pagination-link"}
          disabledClassName={"pagination-link--disabled"}
          activeClassName={"pagination-link--active"}
        />
      </div>
    </div>
  );
}
