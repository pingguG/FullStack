import "./section01.css";

export default function Section01() {
  return (
    <section className="home-section01">
      <h2>섹션 01</h2>

      {/* 첫 번째 줄: 카드(왼쪽) | 텍스트(오른쪽) */}
      <div className="row-item default-order">
        <div className="section-card">안하영</div>
        <div className="text-area">
          <h2>섹션 01 끝</h2>
        </div>
      </div>

      {/* 두 번째 줄: 텍스트(왼쪽) | 카드(오른쪽) */}
      <div className="row-item reverse-order">
        <div className="section-card">안하영</div>
        <div className="text-area">
          <h2>섹션 01 끝</h2>
        </div>
      </div>
      {/* 세 번째 줄: 카드(왼쪽) | 텍스트(오른쪽) */}
      <div className="row-item default-order">
        <div className="section-card">안하영</div>
        <div className="text-area">
          <h2>섹션 01 끝</h2>
        </div>
      </div>
      {/* 네 번째 줄: 텍스트(왼쪽) | 카드(오른쪽) */}
      <div className="row-item reverse-order">
        <div className="section-card">안하영</div>
        <div className="text-area">
          <h2>섹션 01 끝</h2>
        </div>
      </div>
    </section>
  );
}
