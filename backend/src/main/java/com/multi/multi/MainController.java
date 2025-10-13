package com.multi.multi; // 이 코드가 속한 폴더(패키지) 이름입니다.

import org.springframework.web.bind.annotation.GetMapping; // 웹 주소와 함수를 연결하는 도구(어노테이션)입니다.
import org.springframework.web.bind.annotation.RestController; // 이 파일이 '웹 요청을 받는 컨트롤러'임을 알려주는 도구입니다.

// 웹사이트에 접속했을 때 무엇을 보여줄지 결정하는 '컨트롤러'입니다.
// @RestController 덕분에 여기서 만든 함수는 웹 주소(URL)에 연결됩니다.
@RestController
public class MainController {
    // '/multi'라는 주소로 접속하면 이 함수를 실행하라고 약속하는 부분입니다.
    @GetMapping("/multi")
    public String index() {
        return "하우병신";
    }
}