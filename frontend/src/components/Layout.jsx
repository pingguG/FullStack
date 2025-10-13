import Header from "./Header"; // 1. 상단 메뉴 컴포넌트
import Footer from "./Footer"; // 2. 하단 정보 컴포넌트

// Layout 컴포넌트는 자식 컴포넌트들을 담는 '틀' 역할을 합니다.
// 여기서 'children'은 Layout 컴포넌트 안에 들어갈 모든 내용입니다.
function Layout({ children }) {
  return (
    <div className="app-container">
      {/* 3. 웹사이트의 헤더 부분 */}
      <Header />

      {/* 4. 웹사이트의 핵심 내용이 동적으로 들어가는 부분 */}
      <main className="main-content">
        {/* 만약 SideBar가 있다면 여기에 SideBar 컴포넌트를 추가합니다. */}
        {/* <SideBar /> */}
        {children}
      </main>

      {/* 5. 웹사이트의 푸터 부분 */}
      <Footer />
    </div>
  );
}

export default Layout;
