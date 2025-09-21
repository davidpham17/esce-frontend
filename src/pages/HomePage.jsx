import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
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
            <a href="#home">Trang chủ</a>
            <a href="#tours">Tour du lịch</a>
            <a href="#about">Về chúng tôi</a>
            <a href="#contact">Liên hệ</a>
          </nav>
          <div className="header-buttons">
            <button className="btn-login">Đăng nhập</button>
            <button className="btn-register">Đăng ký</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-tag">
                <span className="tag-icon">🌿</span>
                <span>Du lịch sinh thái bền vững</span>
              </div>
              <h2 className="hero-title">
                Khám phá Đà Nẵng <span className="highlight">cùng nhóm bạn</span>
              </h2>
              <p className="hero-description">
                Đặt tour theo nhóm thông minh, tiết kiệm chi phí và tạo những kỷ niệm đáng nhớ với các tour du lịch sinh thái tại Đà Nẵng.
              </p>
              <button className="btn-explore">
                Khám phá ngay
                <span className="arrow">→</span>
              </button>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">
                <div className="image-overlay">
                  <div className="group-info">
                    <span className="group-icon">👥</span>
                    <div>
                      <p>Nhóm 20+ người</p>
                      <p>Tiết kiệm 9% chi phí</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number green">1,284+</span>
              <span className="stat-label">Khách hàng</span>
            </div>
            <div className="stat">
              <span className="stat-number blue">127</span>
              <span className="stat-label">Nhóm tour</span>
            </div>
            <div className="stat">
              <span className="stat-number orange">4.8★</span>
              <span className="stat-label">Đánh giá</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="container">
          <div className="section-header">
            <h2>Tại sao chọn ESCE Du lịch?</h2>
            <p>Chúng tôi mang đến trải nghiệm du lịch sinh thái độc đáo với công nghệ đặt tour nhóm tiên tiến</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Đặt Tour Nhóm Thông Minh</h3>
              <p>Tạo nhóm dễ dàng, mời bạn bè và nhận ưu đãi hấp dẫn khi đi đông người</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Du Lịch Sinh Thái Bền Vững</h3>
              <p>Khám phá thiên nhiên Đà Nẵng với các tour thân thiện môi trường</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>An Toàn & Tin Cậy</h3>
              <p>Đội ngũ hướng dẫn viên chuyên nghiệp, bảo hiểm toàn diện</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎁</div>
              <h3>Ưu Đãi Độc Quyền</h3>
              <p>Giảm giá lên đến 15% khi đặt tour nhóm từ 8 người trở lên</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="popular-tours">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Tour được yêu thích nhất</h2>
              <p>Khám phá những điểm đến tuyệt vời nhất Đà Nẵng</p>
            </div>
            <button className="btn-view-all">Xem tất cả </button>
          </div>
          <div className="tours-grid">
            <div className="tour-card">
              <div className="tour-image">
                <div className="discount-badge">Giảm 8%</div>
              </div>
              <div className="tour-content">
                <h3>Bà Nà Hills - Cầu Vàng</h3>
                <div className="tour-rating">
                  <span className="stars">★★★★☆</span>
                  <span className="rating">(4.8)</span>
                </div>
                <div className="tour-price">850.000 VNĐ</div>
                <button className="btn-details">Xem chi tiết</button>
              </div>
            </div>
            <div className="tour-card">
              <div className="tour-image">
                <div className="discount-badge">Giảm 12%</div>
              </div>
              <div className="tour-content">
                <h3>Hội An - Phố Cổ</h3>
                <div className="tour-rating">
                  <span className="stars">★★★★☆</span>
                  <span className="rating">(4.6)</span>
                </div>
                <div className="tour-price">1.200.000 VNĐ</div>
                <button className="btn-details">Xem chi tiết</button>
              </div>
            </div>
            <div className="tour-card">
              <div className="tour-image">
                <div className="discount-badge">Giảm 5%</div>
              </div>
              <div className="tour-content">
                <h3>Sơn Trà - Chùa Linh Ứng</h3>
                <div className="tour-rating">
                  <span className="stars">★★★★☆</span>
                  <span className="rating">(4.7)</span>
                </div>
                <div className="tour-price">650.000 VNĐ</div>
                <button className="btn-details">Xem chi tiết</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Tourism Section */}
      <section className="responsible-tourism">
        <div className="container">
          <div className="tourism-content">
            <div className="tourism-text">
              <div className="tourism-tag">
                <span className="tag-icon">🌿</span>
                <span>Hành trình xanh</span>
              </div>
              <h2>
                Du lịch có trách nhiệm <span className="highlight">vì một tương lai xanh</span>
              </h2>
              <p>
                ESCE cam kết mang đến các tour du lịch sinh thái bền vững, bảo vệ môi trường và hỗ trợ cộng đồng địa phương. Mỗi chuyến đi là một bước nhỏ vì hành tinh xanh.
              </p>
              <ul className="tourism-features">
                <li>✓ Sử dụng phương tiện thân thiện môi trường</li>
                <li>✓ Hỗ trợ cộng đồng địa phương</li>
                <li>✓ Giáo dục ý thức bảo vệ thiên nhiên</li>
                <li>✓ Cam kết không để lại rác thải</li>
              </ul>
              <button className="btn-learn-more">
                Tìm hiểu thêm
                <span className="arrow">→</span>
              </button>
            </div>
            <div className="tourism-image">
              <div className="image-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Discount Section */}
      <section className="group-discount">
        <div className="container">
          <div className="discount-header">
            <div className="discount-tag">
              <span className="tag-icon">💡</span>
              <span>Ưu đãi đặc biệt</span>
            </div>
            <h2>Càng đông càng tiết kiệm</h2>
            <p>Tạo nhóm tour cùng bạn bè và nhận ngay ưu đãi hấp dẫn. Càng nhiều người tham gia, càng tiết kiệm nhiều!</p>
          </div>
          <div className="discount-cards">
            <div className="discount-card">
              <div className="discount-circle">3%</div>
              <h3>5-7 người</h3>
              <div className="discount-badge">Giảm 3%</div>
            </div>
            <div className="discount-card">
              <div className="discount-circle">5%</div>
              <h3>8-11 người</h3>
              <div className="discount-badge">Giảm 5%</div>
            </div>
            <div className="discount-card">
              <div className="discount-circle">7%</div>
              <h3>12-19 người</h3>
              <div className="discount-badge">Giảm 7%</div>
            </div>
            <div className="discount-card">
              <div className="discount-circle">9%</div>
              <h3>20+ người</h3>
              <div className="discount-badge">Giảm 9%</div>
            </div>
          </div>
          <div className="discount-cta">
            <h3>Bắt đầu tạo nhóm tour ngay hôm nay!</h3>
            <div className="cta-buttons">
              <button className="btn-create-group">
                <span className="btn-icon">👥</span>
                Tạo nhóm tour
              </button>
              <button className="btn-join-group">Tham gia nhóm có sẵn</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <div className="testimonial-tag">Khách hàng nói gì</div>
            <h2>Trải nghiệm từ khách hàng</h2>
            <p>Hơn 1,000+ khách hàng đã tin tưởng và có những trải nghiệm tuyệt vời cùng ESCE Du lịch</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                "Tour rất tuyệt vời! Hướng dẫn viên nhiệt tình, địa điểm đẹp. Đặc biệt là tính năng đặt nhóm giúp tiết kiệm rất nhiều chi phí."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">NTL</div>
                <div className="author-info">
                  <h4>Nguyễn Thị Lan</h4>
                  <p>Tour Bà Nà Hills • 2 tuần trước</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                "ESCE thực sự quan tâm đến môi trường. Cảm giác tham gia tour ở đây rất ý nghĩa, vừa vui vẻ vừa bảo vệ thiên nhiên."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">TVN</div>
                <div className="author-info">
                  <h4>Trần Văn Nam</h4>
                  <p>Tour Sơn Trà • 1 tháng trước</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                "Đặt tour nhóm 10 người được giảm 12%. App rất dễ sử dụng, chia sẻ link cho bạn bè rất tiện lợi!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">LTM</div>
                <div className="author-info">
                  <h4>Lê Thị Mai</h4>
                  <p>Tour Hội An • 3 tuần trước</p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials-cta">
            <button className="btn-more-reviews">
              Xem thêm đánh giá
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Đăng ký nhận thông tin tour mới</h3>
              <p>Nhận ngay những ưu đãi độc quyền và thông tin về các tour du lịch sinh thái mới nhất</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Nhập email của bạn..." />
                <button className="btn-subscribe">Đăng ký</button>
              </div>
            </div>
            <div className="footer-section">
              <h3>Liên hệ</h3>
              <div className="contact-info">
                <p>📞 +84 236 3123 456</p>
                <p>✉️ info@esce-danang.com</p>
                <p>📍 123 Nguyễn Văn Linh, Đà Nẵng</p>
              </div>
              <div className="certification">
                <p>🏆 Chứng nhận du lịch bền vững</p>
                <p>Bộ Văn hóa, Thể thao và Du lịch Việt Nam</p>
              </div>
            </div>
            <div className="footer-section">
              <h3>Theo dõi chúng tôi</h3>
              <div className="social-links">
                <a href="#" className="social-link">f</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">🐦</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
