import React, { useState } from 'react';
import { Search, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import './FilterBar.css';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  selectedYear?: string;
  onYearChange?: (year: string) => void;
  showSaleFilter?: boolean;
  onSaleOnly: boolean;
  onSaleFilterChange: (onSale: boolean) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortChange,
  selectedYear,
  onYearChange,
  showSaleFilter,
  onSaleOnly,
  onSaleFilterChange
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const handleReset = () => {
    onSearchChange('');
    onPriceRangeChange([0, 5000]);
    onSortChange('newest');
    if (onYearChange) onYearChange('');
  };

  const hasActiveFilters = 
    searchQuery || 
    priceRange[0] > 0 || 
    priceRange[1] < 5000 || 
    selectedYear || 
    sortBy !== 'newest';

  return (
    <>
      <div className="filter-bar">
        <div className="filter-bar-header">
          <button 
            className={`search-toggle ${isSearchOpen ? 'active' : ''}`}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search size={18} />
          </button>

          <div className="active-filters">
            {searchQuery && (
              <span className="filter-tag">
                Search: {searchQuery}
                <X 
                  size={14} 
                  onClick={() => onSearchChange('')}
                  className="remove-tag"
                />
              </span>
            )}
            {priceRange[0] > 0 && (
              <span className="filter-tag">
                Min: ${priceRange[0]}
                <X 
                  size={14} 
                  onClick={() => onPriceRangeChange([0, priceRange[1]])}
                  className="remove-tag"
                />
              </span>
            )}
            {priceRange[1] < 5000 && (
              <span className="filter-tag">
                Max: ${priceRange[1]}
                <X 
                  size={14} 
                  onClick={() => onPriceRangeChange([priceRange[0], 5000])}
                  className="remove-tag"
                />
              </span>
            )}
            {selectedYear && (
              <span className="filter-tag">
                Year: {selectedYear}
                <X 
                  size={14} 
                  onClick={() => onYearChange && onYearChange('')}
                  className="remove-tag"
                />
              </span>
            )}
          </div>

          <div className="filter-actions">
            {hasActiveFilters && (
              <button className="reset-button" onClick={handleReset}>
                Reset
              </button>
            )}
            <button 
              className={`filter-toggle ${isFiltersOpen ? 'active' : ''}`}
              onClick={() => {
                if (window.innerWidth <= 768) {
                  setIsMobileDrawerOpen(true);
                } else {
                  setIsFiltersOpen(!isFiltersOpen);
                }
              }}
            >
              <SlidersHorizontal size={18} />
              <span>Filters</span>
              <ChevronDown size={16} className={`chevron ${isFiltersOpen ? 'open' : ''}`} />
            </button>
          </div>
        </div>

        {/* Desktop Filters */}
        <div className={`desktop-filters ${isSearchOpen || isFiltersOpen ? 'show' : ''}`}>
          {isSearchOpen && (
            <div className="search-section">
              <div className="search-input-wrapper">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>
          )}

          {isFiltersOpen && (
            <div className="filters-section">
              <div className="filter-group">
                <label>Price Range</label>
                <div className="price-inputs">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
                    placeholder="Min"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
                    placeholder="Max"
                  />
                </div>
              </div>

              <div className="filter-group">
                <label>Sort By</label>
                <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>

              {onYearChange && (
                <div className="filter-group">
                  <label>Year</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => onYearChange(e.target.value)}
                  >
                    <option value="">All Years</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </select>
                </div>
              )}

              {showSaleFilter && (
                <div className="filter-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={onSaleOnly}
                      onChange={(e) => onSaleFilterChange(e.target.checked)}
                    />
                    On Sale Only
                  </label>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer-overlay ${isMobileDrawerOpen ? 'open' : ''}`} onClick={() => setIsMobileDrawerOpen(false)}>
        <div className="mobile-drawer" onClick={e => e.stopPropagation()}>
          <div className="mobile-drawer-header">
            <h2>Filters</h2>
            <button className="close-drawer" onClick={() => setIsMobileDrawerOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="mobile-drawer-content">
            <div className="filters-section">
              <div className="filter-group">
                <label>Price Range</label>
                <div className="price-inputs">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
                    placeholder="Min"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
                    placeholder="Max"
                  />
                </div>
              </div>

              <div className="filter-group">
                <label>Sort By</label>
                <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>

              {onYearChange && (
                <div className="filter-group">
                  <label>Year</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => onYearChange(e.target.value)}
                  >
                    <option value="">All Years</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </select>
                </div>
              )}

              {showSaleFilter && (
                <div className="filter-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={onSaleOnly}
                      onChange={(e) => onSaleFilterChange(e.target.checked)}
                    />
                    On Sale Only
                  </label>
                </div>
              )}
            </div>
          </div>
          <div className="mobile-drawer-footer">
            <button 
              className="apply-filters"
              onClick={() => setIsMobileDrawerOpen(false)}
            >
              Apply Filters
            </button>
            {hasActiveFilters && (
              <button 
                className="reset-filters"
                onClick={handleReset}
              >
                Reset All
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBar; 