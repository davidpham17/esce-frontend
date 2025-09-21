import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TourList.css';

const TourList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tourType, setTourType] = useState([]);
  const [dateRange, setDateRange] = useState({ from: '', to: '' });
  const [area, setArea] = useState('all');
  const [priceRanges, setPriceRanges] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Dữ liệu filter options
  const tourTypes = [
    { id: 'mountain-forest', name: 'Núi & Rừng' },
    { id: 'beach-island', name: 'Biển & Đảo'},
    { id: 'river-stream', name: 'Sông & Suối' },
    { id: 'wild-nature', name: 'Thiên nhiên hoang dã' },
    { id: 'village-agriculture', name: 'Làng quê & Nông nghiệp'},
    { id: 'culture-local', name: 'Văn hóa & Địa phương' }
  ];

  const areas = [
    { id: 'all', name: 'Tất cả khu vực' },
    { id: 'danang-haichau', name: 'Đà Nẵng – Hải Châu' },
    { id: 'danang-sontra', name: 'Đà Nẵng – Sơn Trà' },
    { id: 'danang-nguhanhson', name: 'Đà Nẵng – Ngũ Hành Sơn' },
    { id: 'danang-hoavang', name: 'Đà Nẵng – Hòa Vang' },
    { id: 'quangnam-hoian', name: 'Quảng Nam – Hội An' },
    { id: 'quangnam-culaocham', name: 'Quảng Nam – Cù Lao Chàm' }
  ];

  const priceRangeOptions = [
    { id: 'under-500k', name: 'Dưới 500,000₫', min: 0, max: 500000 },
    { id: '500k-1m', name: '500,000₫ – 1,000,000₫', min: 500000, max: 1000000 },
    { id: '1m-3m', name: '1,000,000₫ – 3,000,000₫', min: 1000000, max: 3000000 },
    { id: '3m-5m', name: '3,000,000₫ – 5,000,000₫', min: 3000000, max: 5000000 },
    { id: 'over-5m', name: 'Trên 5,000,000₫', min: 5000000, max: Infinity }
  ];

  // Dữ liệu tour mẫu
  const tours = [
    {
      id: 1,
      name: 'Bà Nà Hills - Cầu Vàng',
      price: 850000,
      originalPrice: 950000,
      rating: 4.8,
      discount: 8,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      location: 'Đà Nẵng – Hòa Vang',
      type: ['mountain-forest', 'culture-local'],
      area: 'danang-hoavang'
    },
    {
      id: 2,
      name: 'Hội An - Phố Cổ',
      price: 1200000,
      originalPrice: 1400000,
      rating: 4.6,
      discount: 12,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      location: 'Quảng Nam – Hội An',
      type: ['culture-local', 'village-agriculture'],
      area: 'quangnam-hoian'
    },
    {
      id: 3,
      name: 'Sơn Trà - Chùa Linh Ứng',
      price: 650000,
      originalPrice: 700000,
      rating: 4.7,
      discount: 5,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      location: 'Đà Nẵng – Sơn Trà',
      type: ['mountain-forest', 'wild-nature'],
      area: 'danang-sontra'
    },
    {
      id: 4,
      name: 'Cù Lao Chàm - Đảo Xanh',
      price: 950000,
      originalPrice: 1100000,
      rating: 4.9,
      discount: 15,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      location: 'Quảng Nam – Cù Lao Chàm',
      type: ['beach-island', 'wild-nature'],
      area: 'quangnam-culaocham'
    },
    {
      id: 5,
      name: 'Bãi Biển Mỹ Khê',
      price: 450000,
      originalPrice: 500000,
      rating: 4.5,
      discount: 10,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      location: 'Đà Nẵng – Hải Châu',
      type: ['beach-island', 'wild-nature'],
      area: 'danang-haichau'
    },
    {
      id: 6,
      name: 'Hải Vân Pass - Đường Đèo Huyền Thoại',
      price: 550000,
      originalPrice: 600000,
      rating: 4.4,
      discount: 8,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      location: 'Đà Nẵng – Hòa Vang',
      type: ['mountain-forest', 'wild-nature'],
      area: 'danang-hoavang'
    },
    {
      id: 7,
      name: 'Làng Gốm Thanh Hà',
      price: 450000,
      originalPrice: 500000,
      rating: 4.3,
      discount: 10,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      location: 'Quảng Nam – Hội An',
      type: ['culture-local', 'village-agriculture'],
      area: 'quangnam-hoian'
    },
    {
      id: 8,
      name: 'Thác Bạc - Suối Mơ',
      price: 680000,
      originalPrice: 750000,
      rating: 4.6,
      discount: 9,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      location: 'Đà Nẵng – Hòa Vang',
      type: ['river-stream', 'wild-nature'],
      area: 'danang-hoavang'
    },
    {
      id: 9,
      name: 'Ngũ Hành Sơn - Chùa Non Nước',
      price: 380000,
      originalPrice: 420000,
      rating: 4.2,
      discount: 9,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      location: 'Đà Nẵng – Ngũ Hành Sơn',
      type: ['mountain-forest', 'culture-local'],
      area: 'danang-nguhanhson'
    },
    {
      id: 10,
      name: 'Sông Hàn - Cầu Rồng',
      price: 320000,
      originalPrice: 380000,
      rating: 4.1,
      discount: 15,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      location: 'Đà Nẵng – Hải Châu',
      type: ['river-stream', 'culture-local'],
      area: 'danang-haichau'
    },
    {
      id: 11,
      name: 'Bãi Đá Dựng - Sơn Trà',
      price: 890000,
      originalPrice: 1000000,
      rating: 4.7,
      discount: 11,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      location: 'Đà Nẵng – Sơn Trà',
      type: ['mountain-forest', 'wild-nature'],
      area: 'danang-sontra'
    },
    {
      id: 12,
      name: 'Làng Rau Trà Quế',
      price: 280000,
      originalPrice: 320000,
      rating: 4.0,
      discount: 12,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      location: 'Quảng Nam – Hội An',
      type: ['village-agriculture', 'culture-local'],
      area: 'quangnam-hoian'
    }
  ];

  // Lọc tour theo tìm kiếm và bộ lọc
  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = tourType.length === 0 || tourType.some(type => tour.type.includes(type));
    
    const matchesArea = area === 'all' || tour.area === area;
    
    const matchesPriceRanges = priceRanges.length === 0 || priceRanges.some(rangeId => {
      const range = priceRangeOptions.find(r => r.id === rangeId);
      if (!range) return false;
      if (range.max === Infinity) {
        return tour.price >= range.min;
      }
      return tour.price >= range.min && tour.price <= range.max;
    });
    
    return matchesSearch && matchesType && matchesArea && matchesPriceRanges;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
      stars += '★';
    }
    if (hasHalfStar) {
      stars += '☆';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars += '☆';
    }
    
    return stars;
  };

  // Xử lý tour type filter
  const handleTourTypeChange = (typeId) => {
    setTourType(prev => 
      prev.includes(typeId) 
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    );
  };

  // Xử lý price ranges filter
  const handlePriceRangesChange = (rangeId) => {
    setPriceRanges(prev => 
      prev.includes(rangeId) 
        ? prev.filter(id => id !== rangeId)
        : [...prev, rangeId]
    );
  };

  // Reset tất cả filter
  const clearAllFilters = () => {
    setSearchTerm('');
    setTourType([]);
    setDateRange({ from: '', to: '' });
    setArea('all');
    setPriceRanges([]);
  };

  return (
    <div className="tourlist">
      {/* Header - Giống HomePage */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <div className="logo-icon">🌿</div>
            <div className="logo-text">
              <h1>ESCE Du Lịch</h1>
              <p>Sinh thái Đà Nẵng</p>
            </div>
          </div>
          <nav className="nav">
            <Link to="/">Trang chủ</Link>
            <Link to="/tours" className="active">Tour du lịch</Link>
            <a href="#about">Về chúng tôi</a>
            <a href="#contact">Liên hệ</a>
          </nav>
          <div className="header-buttons">
            <button className="btn-login">Đăng nhập</button>
            <button className="btn-register">Đăng ký</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="main-layout">
          {/* Sidebar Filter */}
          <aside className="filter-sidebar">
            <div className="filter-header">
              <h3>Bộ lọc</h3>
              <button 
                className="btn-clear-all"
                onClick={clearAllFilters}
              >
                Xóa tất cả
              </button>
            </div>

            <div className="filter-content">
              {/* Search by keyword */}
              <div className="filter-section">
                <h4 className="filter-title">Tìm kiếm từ khóa</h4>
                <div className="search-input-wrapper">
                  <span className="search-icon">🔍</span>
                  <input
                    type="text"
                    placeholder="Tên tour, địa điểm..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
              </div>

              {/* Search by tour type */}
              <div className="filter-section">
                <h4 className="filter-title">Loại tour</h4>
                <div className="checkbox-group">
                  {tourTypes.map(type => (
                    <label key={type.id} className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={tourType.includes(type.id)}
                        onChange={() => handleTourTypeChange(type.id)}
                      />
                      <span className="checkbox-custom"></span>
                      <span className="checkbox-label">
                        <span className="type-icon">{type.icon}</span>
                        {type.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Search by date */}
              <div className="filter-section">
                <h4 className="filter-title">Khoảng thời gian</h4>
                <div className="date-inputs">
                  <div className="date-input-group">
                    <label>Từ ngày</label>
                    <input
                      type="date"
                      value={dateRange.from}
                      onChange={(e) => setDateRange(prev => ({ ...prev, from: e.target.value }))}
                      className="date-input"
                    />
                  </div>
                  <div className="date-input-group">
                    <label>Đến ngày</label>
                    <input
                      type="date"
                      value={dateRange.to}
                      onChange={(e) => setDateRange(prev => ({ ...prev, to: e.target.value }))}
                      className="date-input"
                    />
                  </div>
                </div>
              </div>

              {/* Search by area */}
              <div className="filter-section">
                <h4 className="filter-title">Khu vực</h4>
                <select 
                  value={area} 
                  onChange={(e) => setArea(e.target.value)}
                  className="area-select"
                >
                  {areas.map(areaOption => (
                    <option key={areaOption.id} value={areaOption.id}>
                      {areaOption.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search by price ranges */}
              <div className="filter-section">
                <h4 className="filter-title price-title">GIÁ TOUR –</h4>
                <div className="price-ranges-group">
                  {priceRangeOptions.map(range => (
                    <label key={range.id} className="price-range-item">
                      <input
                        type="checkbox"
                        checked={priceRanges.includes(range.id)}
                        onChange={() => handlePriceRangesChange(range.id)}
                      />
                      <span className="checkbox-custom"></span>
                      <span className="price-range-label">{range.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="content-area">
            {/* Breadcrumb */}
            <div className="breadcrumb">
              <Link to="/" className="breadcrumb-link">Trang chủ</Link>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-current">Tour du lịch</span>
            </div>

            {/* Page Header */}
            <div className="page-header">
              <div className="page-header-content">
                <h1>Danh sách Tour Du Lịch</h1>
                <p>Khám phá những điểm đến tuyệt vời nhất Đà Nẵng và vùng lân cận</p>
                <div className="page-stats">
                  <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Tour đa dạng</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">4.8★</span>
                    <span className="stat-label">Đánh giá trung bình</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">1000+</span>
                    <span className="stat-label">Khách hàng hài lòng</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Filter Button */}
            <button 
              className="mobile-filter-btn"
              onClick={() => setIsFilterOpen(true)}
            >
              🔍 Bộ lọc
            </button>

          {/* Results Count */}
          <div className="results-info">
            <p>Tìm thấy <strong>{filteredTours.length}</strong> tour phù hợp</p>
          </div>

          {/* Tours Grid */}
          <div className="tours-grid">
            {filteredTours.map(tour => (
              <div key={tour.id} className="tour-card">
                <div className="tour-image">
                  <img src={tour.image} alt={tour.name} />
                  <div className="discount-badge">Giảm {tour.discount}%</div>
                </div>
                <div className="tour-content">
                  <h3>{tour.name}</h3>
                  <p className="tour-location">📍 {tour.location}</p>
                  <div className="tour-rating">
                    <span className="stars">{renderStars(tour.rating)}</span>
                    <span className="rating">({tour.rating})</span>
                  </div>
                  <div className="tour-price-section">
                    <div className="current-price">{formatPrice(tour.price)}</div>
                    <div className="original-price">{formatPrice(tour.originalPrice)}</div>
                  </div>
                      <Link to={`/tours/${tour.id}`} className="btn-details">Xem chi tiết</Link>
                </div>
              </div>
            ))}
          </div>

            {/* No Results */}
            {filteredTours.length === 0 && (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3>Không tìm thấy tour nào</h3>
                <p>Hãy thử thay đổi từ khóa tìm kiếm hoặc bộ lọc</p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <div className="mobile-filter-overlay" onClick={() => setIsFilterOpen(false)}>
            <div className="mobile-filter-drawer" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-filter-header">
                <h3>Bộ lọc</h3>
                <button 
                  className="close-btn"
                  onClick={() => setIsFilterOpen(false)}
                >
                  ✕
                </button>
              </div>
              <div className="mobile-filter-content">
                {/* Copy nội dung filter từ sidebar */}
                <div className="filter-section">
                  <h4 className="filter-title">Tìm kiếm từ khóa</h4>
                  <div className="search-input-wrapper">
                    <span className="search-icon">🔍</span>
                    <input
                      type="text"
                      placeholder="Tên tour, địa điểm..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                    />
                  </div>
                </div>

                <div className="filter-section">
                  <h4 className="filter-title">Loại tour</h4>
                  <div className="checkbox-group">
                    {tourTypes.map(type => (
                      <label key={type.id} className="checkbox-item">
                        <input
                          type="checkbox"
                          checked={tourType.includes(type.id)}
                          onChange={() => handleTourTypeChange(type.id)}
                        />
                        <span className="checkbox-custom"></span>
                        <span className="checkbox-label">
                          <span className="type-icon">{type.icon}</span>
                          {type.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="filter-section">
                  <h4 className="filter-title">Khoảng thời gian</h4>
                  <div className="date-inputs">
                    <div className="date-input-group">
                      <label>Từ ngày</label>
                      <input
                        type="date"
                        value={dateRange.from}
                        onChange={(e) => setDateRange(prev => ({ ...prev, from: e.target.value }))}
                        className="date-input"
                      />
                    </div>
                    <div className="date-input-group">
                      <label>Đến ngày</label>
                      <input
                        type="date"
                        value={dateRange.to}
                        onChange={(e) => setDateRange(prev => ({ ...prev, to: e.target.value }))}
                        className="date-input"
                      />
                    </div>
                  </div>
                </div>

                <div className="filter-section">
                  <h4 className="filter-title">Khu vực</h4>
                  <select 
                    value={area} 
                    onChange={(e) => setArea(e.target.value)}
                    className="area-select"
                  >
                    {areas.map(areaOption => (
                      <option key={areaOption.id} value={areaOption.id}>
                        {areaOption.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="filter-section">
                  <h4 className="filter-title price-title">GIÁ TOUR –</h4>
                  <div className="price-ranges-group">
                    {priceRangeOptions.map(range => (
                      <label key={range.id} className="price-range-item">
                        <input
                          type="checkbox"
                          checked={priceRanges.includes(range.id)}
                          onChange={() => handlePriceRangesChange(range.id)}
                        />
                        <span className="checkbox-custom"></span>
                        <span className="price-range-label">{range.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mobile-filter-actions">
                <button 
                  className="btn-clear-all"
                  onClick={clearAllFilters}
                >
                  Xóa tất cả
                </button>
                <button 
                  className="btn-apply"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Áp dụng
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default TourList;
