import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    adults: 1,
    children: 0,
    infants: 0,
    tourDate: '',
    specialRequests: '',
    paymentMethod: 'bank_transfer'
  });

  // Dữ liệu tour mẫu (trong thực tế sẽ fetch từ API)
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
      duration: '1 ngày'
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
      duration: '2 ngày 1 đêm'
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
      duration: 'Nửa ngày'
    }
  ];

  const tour = tours.find(t => t.id === parseInt(id));

  if (!tour) {
    return (
      <div className="booking-form">
        <div className="not-found">
          <h2>Không tìm thấy tour</h2>
          <Link to="/tours" className="btn-back">Quay lại danh sách</Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const calculateTotal = () => {
    const adultPrice = tour.price * formData.adults;
    const childPrice = tour.price * 0.7 * formData.children; // 70% giá người lớn
    const infantPrice = 0; // Trẻ em dưới 2 tuổi miễn phí
    return adultPrice + childPrice + infantPrice;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNumberChange = (name, value) => {
    const numValue = parseInt(value) || 0;
    if (numValue >= 0) {
      setFormData(prev => ({
        ...prev,
        [name]: numValue
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đặt tour
    alert('Đặt tour thành công! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.');
    navigate('/tours');
  };

  return (
    <div className="booking-form">
      {/* Header */}
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
            <Link to="/tours">Tour du lịch</Link>
            <a href="#about">Về chúng tôi</a>
            <a href="#contact">Liên hệ</a>
          </nav>
          <div className="header-buttons">
            <button className="btn-login">Đăng nhập</button>
            <button className="btn-register">Đăng ký</button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <Link to="/" className="breadcrumb-link">Trang chủ</Link>
          <span className="breadcrumb-separator">›</span>
          <Link to="/tours" className="breadcrumb-link">Tour du lịch</Link>
          <span className="breadcrumb-separator">›</span>
          <Link to={`/tours/${tour.id}`} className="breadcrumb-link">{tour.name}</Link>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">Đặt tour</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="booking-layout">
            {/* Left Column - Form */}
            <div className="booking-form-section">
              <div className="form-header">
                <h1>Đặt tour</h1>
                <p>Vui lòng điền thông tin để hoàn tất đặt tour</p>
              </div>

              <form onSubmit={handleSubmit} className="booking-form-content">
                {/* Thông tin liên hệ */}
                <div className="form-section">
                  <h3>Thông tin liên hệ</h3>
                  <div className="form-group">
                    <label htmlFor="fullName">Họ và tên *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Nhập email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Số điện thoại *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>

                {/* Số lượng khách */}
                <div className="form-section">
                  <h3>Số lượng khách</h3>
                  <div className="guest-counts">
                    <div className="guest-item">
                      <label>Người lớn (≥12 tuổi)</label>
                      <div className="number-input">
                        <button
                          type="button"
                          onClick={() => handleNumberChange('adults', formData.adults - 1)}
                          disabled={formData.adults <= 1}
                        >
                          -
                        </button>
                        <span>{formData.adults}</span>
                        <button
                          type="button"
                          onClick={() => handleNumberChange('adults', formData.adults + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="guest-item">
                      <label>Trẻ em (2-11 tuổi)</label>
                      <div className="number-input">
                        <button
                          type="button"
                          onClick={() => handleNumberChange('children', formData.children - 1)}
                          disabled={formData.children <= 0}
                        >
                          -
                        </button>
                        <span>{formData.children}</span>
                        <button
                          type="button"
                          onClick={() => handleNumberChange('children', formData.children + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="guest-item">
                      <label>Trẻ sơ sinh (&lt;2 tuổi)</label>
                      <div className="number-input">
                        <button
                          type="button"
                          onClick={() => handleNumberChange('infants', formData.infants - 1)}
                          disabled={formData.infants <= 0}
                        >
                          -
                        </button>
                        <span>{formData.infants}</span>
                        <button
                          type="button"
                          onClick={() => handleNumberChange('infants', formData.infants + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ngày tour */}
                <div className="form-section">
                  <h3>Ngày tham gia</h3>
                  <div className="form-group">
                    <label htmlFor="tourDate">Chọn ngày *</label>
                    <input
                      type="date"
                      id="tourDate"
                      name="tourDate"
                      value={formData.tourDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                {/* Yêu cầu đặc biệt */}
                <div className="form-section">
                  <h3>Yêu cầu đặc biệt</h3>
                  <div className="form-group">
                    <label htmlFor="specialRequests">Ghi chú thêm</label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="Nhập yêu cầu đặc biệt (nếu có)"
                      rows="4"
                    />
                  </div>
                </div>

                {/* Phương thức thanh toán */}
                <div className="form-section">
                  <h3>Phương thức thanh toán</h3>
                  <div className="payment-methods">
                    <label className="payment-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank_transfer"
                        checked={formData.paymentMethod === 'bank_transfer'}
                        onChange={handleInputChange}
                      />
                      <span>Chuyển khoản ngân hàng</span>
                    </label>
                    <label className="payment-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === 'cash'}
                        onChange={handleInputChange}
                      />
                      <span>Thanh toán khi đến</span>
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn-submit">
                  Xác nhận đặt tour
                </button>
              </form>
            </div>

            {/* Right Column - Tour Summary */}
            <div className="booking-summary">
              <div className="summary-header">
                <h3>Tóm tắt đặt tour</h3>
              </div>
              
              <div className="tour-summary">
                <div className="tour-image">
                  <img src={tour.image} alt={tour.name} />
                </div>
                <div className="tour-info">
                  <h4>{tour.name}</h4>
                  <p>📍 {tour.location}</p>
                  <p>⏱️ {tour.duration}</p>
                </div>
              </div>

              <div className="price-breakdown">
                <div className="price-item">
                  <span>Người lớn x{formData.adults}</span>
                  <span>{formatPrice(tour.price * formData.adults)}</span>
                </div>
                {formData.children > 0 && (
                  <div className="price-item">
                    <span>Trẻ em x{formData.children}</span>
                    <span>{formatPrice(tour.price * 0.7 * formData.children)}</span>
                  </div>
                )}
                {formData.infants > 0 && (
                  <div className="price-item">
                    <span>Trẻ sơ sinh x{formData.infants}</span>
                    <span>Miễn phí</span>
                  </div>
                )}
                <div className="price-total">
                  <span>Tổng cộng</span>
                  <span>{formatPrice(calculateTotal())}</span>
                </div>
              </div>

              <div className="booking-note">
                <p><strong>Lưu ý:</strong></p>
                <ul>
                  <li>Giá trẻ em = 70% giá người lớn</li>
                  <li>Trẻ sơ sinh dưới 2 tuổi miễn phí</li>
                  <li>Thanh toán 50% trước, 50% còn lại khi đến</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingForm;
