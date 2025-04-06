import React from "react";

export default function App() {
  const containerStyle = {
    padding: "2rem",
    fontFamily: "sans-serif",
    lineHeight: "1.6"
  };

  const sectionStyle = {
    marginBottom: "3rem",
    padding: "2rem",
    border: "1px solid #ddd",
    borderRadius: "12px",
    backgroundColor: "#f9f9f9"
  };

  const productCard = {
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "1rem",
    marginBottom: "1rem"
  };

  return (
    <main style={containerStyle}>
      <section style={sectionStyle}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>선자당</h1>
        <p>선한 마음을 담은 전통 떡 선물</p>
        <p style={{ fontSize: "0.9rem", color: "#555" }}>
          정성과 품질로 만든 건강한 떡, 소중한 분께 마음을 전하세요
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>베스트셀러 선물세트</h2>
        {[
          {
            name: "프리미엄 전통떡 세트",
            description: "정갈한 포장, 깊은 맛의 전통떡",
            price: "14,800원"
          },
          {
            name: "소담세트 8입",
            description: "다양한 전통떡을 간편하게 즐겨요",
            price: "9,800원"
          },
          {
            name: "명절 한정 스페셜",
            description: "명절 선물로 딱 좋은 구성",
            price: "18,000원"
          }
        ].map((item, idx) => (
          <div key={idx} style={productCard}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>💰 {item.price}</p>
          </div>
        ))}
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>문의 및 상담</h2>
        <p>상품 주문, 제휴, 대량 납품 등 궁금하신 점은 언제든지 문의해주세요.</p>
        <p style={{ fontSize: "0.9rem", color: "#333" }}>
          📞 010-XXXX-XXXX | 📧 hello@seonjadang.kr
        </p>
      </section>
    </main>
  );
}
