import { useEffect, useReducer } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import classes from './PageNoSelector.module.scss';

const pageInitialState = {
  currentPage: 1,
  pageList: [],
};

const pageReducer = (state, action) => {
  if (action.type === 'SET_PAGE_LIST') {
    return { ...state, pageList: action.payload };
  }

  if (action.type === 'SET_CURRENT_PAGE') {
    return { ...state, currentPage: action.payload };
  }

  if (action.type === 'PREV_PAGE') {
    const newPage = state.currentPage - 1;
    let newPageList = state.pageList;
    if (!state.pageList.includes(newPage)) {
      newPageList = [];
      for (let i = newPage; i < newPage + 6; i++) {
        newPageList.push(i);
      }
    }
    return { pageList: newPageList, currentPage: state.currentPage - 1 };
  }

  if (action.type === 'NEXT_PAGE') {
    const newPage = state.currentPage + 1;
    let newPageList = state.pageList;
    if (!state.pageList.includes(newPage)) {
      newPageList = [];
      for (let i = newPage - 5; i <= newPage; i++) {
        newPageList.push(i);
      }
    }
    return { pageList: newPageList, currentPage: state.currentPage + 1 };
  }

  return pageInitialState;
};

const PageNoSelector = (props) => {
  const { totalPages = 10, onChange = () => {} } = props;
  const [pageState, dispatchPage] = useReducer(pageReducer, pageInitialState);

  const { currentPage, pageList } = pageState;

  useEffect(() => {
    const list = [];
    const lastPage = totalPages > 5 ? 5 : totalPages;
    for (let i = 0; i < lastPage; i++) {
      list.push(i + 1);
    }
    dispatchPage({ type: 'SET_PAGE_LIST', payload: list });
    dispatchPage({ type: 'SET_CURRENT_PAGE', payload: 1 });
  }, [totalPages]);

  useEffect(() => {
    onChange(currentPage);
  }, [currentPage, onChange]);

  const prevPageHandler = () => {
    if (currentPage > 1) dispatchPage({ type: 'PREV_PAGE' });
  };

  const nextPageHandler = () => {
    if (currentPage < totalPages) dispatchPage({ type: 'NEXT_PAGE' });
  };

  const selectPageHandler = (event) => {
    dispatchPage({
      type: 'SET_CURRENT_PAGE',
      payload: +event.target.textContent,
    });
  };

  const doubleClickHandler = (event) => {
    event.preventDefault();
  };

  const pages = pageList.map((page) => {
    const isCurrentPage = currentPage === page;

    return (
      <li className={classes.pageBtn} key={page}>
        <div
          className={`${isCurrentPage && classes.currentPageBtn}`}
          onClick={selectPageHandler}
        >
          {page}
        </div>
      </li>
    );
  });

  return (
    <div className={classes.paginationRow}>
      <ul className={classes.pagination}>
        <li className={classes.pageBtn}>
          <FiChevronLeft
            className={classes.icon}
            onClick={prevPageHandler}
            onDoubleClick={doubleClickHandler}
          />
        </li>
        {pages}
        <li className={classes.pageBtn}>
          <FiChevronRight
            className={classes.icon}
            onClick={nextPageHandler}
            onDoubleClick={doubleClickHandler}
          />
        </li>
      </ul>
    </div>
  );
};

export default PageNoSelector;
