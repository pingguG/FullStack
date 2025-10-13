import Layout from "./components/Layout";
import WelcomeMessage from "./components/WelcomeMessage"; // 이전에 만든 환영 메시지

function App() {
  return (
    // <Layout> 태그 안에 들어가는 모든 내용이
    // Layout.jsx의 {children} 위치에 들어가게 됩니다.
    <Layout>
      {/* 여기가 메인 콘텐츠 영역입니다. */}
      <WelcomeMessage />
      <h1>동아리 소개 페이지</h1>
      <p>여기에 동아리 소개 내용이 들어갈 예정입니다.</p>
    </Layout>
  );
}

export default App;
