import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './TourDetail.css';

const TourDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dữ liệu tour mẫu (trong thực tế sẽ fetch từ API)
  const tours = [
    {
      id: 1,
      name: 'Bà Nà Hills - Cầu Vàng',
      price: 850000,
      originalPrice: 950000,
      rating: 4.8,
      discount: 8,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      location: 'Đà Nẵng – Hòa Vang',
      type: ['mountain-forest', 'culture-local'],
      area: 'danang-hoavang',
      description: 'Khám phá Bà Nà Hills với Cầu Vàng nổi tiếng thế giới. Trải nghiệm không gian mát mẻ trên đỉnh núi, tham quan các công trình kiến trúc độc đáo và tận hưởng cảnh quan thiên nhiên tuyệt đẹp.',
      duration: '1 ngày',
      groupSize: 'Tối đa 20 người',
      includes: [
        'Vé tham quan Bà Nà Hills',
        'Cáp treo lên xuống',
        'Hướng dẫn viên tiếng Việt',
        'Bữa trưa buffet',
        'Bảo hiểm du lịch'
      ],
      highlights: [
        'Cầu Vàng - biểu tượng du lịch Việt Nam',
        'Làng Pháp cổ kính',
        'Vườn hoa Le Jardin d\'Amour',
        'Chùa Linh Ứng',
        'Công viên giải trí Fantasy Park'
      ],
      images: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
      ]
    },
    {
      id: 2,
      name: 'Hội An - Phố Cổ',
      price: 1200000,
      originalPrice: 1400000,
      rating: 4.6,
      discount: 12,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      location: 'Quảng Nam – Hội An',
      type: ['culture-local', 'village-agriculture'],
      area: 'quangnam-hoian',
      description: 'Hội An - thành phố cổ kính được UNESCO công nhận là Di sản Văn hóa Thế giới. Khám phá kiến trúc cổ, thưởng thức ẩm thực địa phương và trải nghiệm văn hóa truyền thống.',
      duration: '2 ngày 1 đêm',
      groupSize: 'Tối đa 15 người',
      includes: [
        'Vé tham quan phố cổ Hội An',
        'Khách sạn 3 sao',
        'Hướng dẫn viên chuyên nghiệp',
        'Bữa sáng, trưa, tối',
        'Thuyền thúng trên sông Hoài',
        'Bảo hiểm du lịch'
      ],
      highlights: [
        'Chùa Cầu - biểu tượng Hội An',
        'Nhà cổ Tân Ky',
        'Hội quán Phúc Kiến',
        'Làng gốm Thanh Hà',
        'Chợ đêm Hội An',
        'Thả đèn hoa đăng'
      ],
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
      ]
    },
    {
      id: 3,
      name: 'Sơn Trà - Chùa Linh Ứng',
      price: 650000,
      originalPrice: 700000,
      rating: 4.7,
      discount: 5,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      location: 'Đà Nẵng – Sơn Trà',
      type: ['mountain-forest', 'wild-nature'],
      area: 'danang-sontra',
      description: 'Khám phá bán đảo Sơn Trà với Chùa Linh Ứng và tượng Phật Quan Âm cao nhất Việt Nam. Tận hưởng không khí trong lành và ngắm toàn cảnh thành phố Đà Nẵng từ trên cao.',
      duration: 'Nửa ngày',
      groupSize: 'Tối đa 25 người',
      includes: [
        'Vé tham quan Sơn Trà',
        'Hướng dẫn viên',
        'Bữa trưa',
        'Bảo hiểm du lịch'
      ],
      highlights: [
        'Chùa Linh Ứng',
        'Tượng Phật Quan Âm 67m',
        'Bãi Đá Dựng',
        'Rừng nguyên sinh',
        'Ngắm hoàng hôn'
      ],
      images: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
      ]
    }
  ];

  const tour = tours.find(t => t.id === parseInt(id));

  if (!tour) {
    return (
      <div className="tour-detail">
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

  const handleBooking = () => {
    navigate(`/booking/${tour.id}`);
  };

  return (
    <div className="tour-detail">
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
          <span className="breadcrumb-current">{tour.name}</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="tour-detail-layout">
            {/* Left Column - Images */}
            <div className="tour-images">
              <div className="main-image">
                <img src={tour.image} alt={tour.name} />
                {tour.discount && <div className="discount-badge">Giảm {tour.discount}%</div>}
              </div>
              <div className="image-gallery">
                {tour.images.map((img, index) => (
                  <div key={index} className="gallery-item">
                    <img src={img} alt={`${tour.name} ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="tour-info">
              <div className="tour-header">
                <h1>{tour.name}</h1>
                <div className="tour-location">📍 {tour.location}</div>
                <div className="tour-rating">
                  <span className="stars">{renderStars(tour.rating)}</span>
                  <span className="rating">({tour.rating})</span>
                </div>
              </div>

              <div className="tour-description">
                <p>{tour.description}</p>
              </div>

              <div className="tour-details">
                <div className="detail-item">
                  <span className="detail-label">Thời gian:</span>
                  <span className="detail-value">{tour.duration}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Số lượng:</span>
                  <span className="detail-value">{tour.groupSize}</span>
                </div>
              </div>

              <div className="tour-highlights">
                <h3>Điểm nổi bật</h3>
                <ul>
                  {tour.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="tour-includes">
                <h3>Bao gồm</h3>
                <ul>
                  {tour.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="tour-price-section">
                <div className="price-info">
                  <span className="current-price">{formatPrice(tour.price)}</span>
                  {tour.originalPrice && (
                    <span className="original-price">{formatPrice(tour.originalPrice)}</span>
                  )}
                </div>
                <button className="btn-booking" onClick={handleBooking}>
                  Đặt tour ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TourDetail;
