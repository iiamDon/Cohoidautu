import React, { useState, useEffect, useRef } from "react";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { Wrapper as PopperWrapper } from "../Popper";
import AccountItem from "../AccountItem";
import useDebounce from "../../hooks/useDebounce";

const cx = classNames.bind(styles);

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debouncedSearchInput = useDebounce(searchInput, 500);
  const inputRef = useRef();

  useEffect(() => {
    if (debouncedSearchInput.trim()) {
      setLoading(true);
      setTimeout(() => {
        setSearchResult([1]); // Giả sử kết quả tìm kiếm là [1]
        setLoading(false);
      }, 200);
    } else {
      setSearchResult([]);
      setLoading(false);
    }
  }, [debouncedSearchInput]);

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <Tippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div
          className={cx("search-result")}
          tabIndex="-1"
          {...attrs}
          data-placement="bottom"
        >
          <PopperWrapper>
            <h4 className={cx("search-title")}>Kết quả</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search-bar")}>
        <input
          ref={inputRef}
          placeholder="Tìm địa điểm, món ăn,..."
          spellCheck={false}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        <button className={cx("search-btn")}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        {!!searchInput && !loading && (
          <button
            className={cx("clear")}
            onClick={() => {
              setSearchInput("");
              inputRef.current.focus();
            }}
          >
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
        )}
        {loading && (
          <button className={cx("loading")}>
            <i className="fa-solid fa-spinner"></i>
          </button>
        )}
        <div className={cx("separator")}></div>
      </div>
    </Tippy>
  );
};

export default Search;
