package com.example.modelexam.controller.exam01;

import com.example.modelexam.model.Dept;
import com.example.modelexam.service.exam01.DeptService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * packageName : com.example.modelexam.controller.exam01
 * fileName : DeptController
 * author : GGG
 * date : 2023-10-10
 * description : 부서 컨트롤러, @Slf4j, findAll()
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-10         GGG          최초 생성
 */
// TODO: @Slf4j - 롬북(라이브러리), 로깅 라이브러리를 위한 어노테이션(디자인패턴 : Facade 패턴)
//       로깅 라이브러리 : log4j(라이브러리) -> 치명적인 버그 -> log4j2, -> 개선 -> logback -> 통일 -> 함수호출을 일원화 시켜주는 기능 -> Slf4j
//    사용법 : 클래스 위에 붙이면 사용가능 : log.debug(값) -> 콘솔창에 값이 나옴
//      ( 간략정보 : Error -> Info -> Debug -> Warn -> Trace : 상세정보 ) -> log.Error || Info || Debug ...등 바꿔서 사용하면 된다.//    logback 설치 :
//    logback 설치 :
//        1) log4jdbc.log4j2.properties, logback-spring.xml 기본 설정 파일 추가
//          - log4jdbc.log4j2.properties : sql 로그를 출력하기 위한 설정파일
//          - logback-spring.xml : logback 의 다양한 레벨 옵션 설정

@Slf4j
@Controller
@RequestMapping("/exam01")
public class DeptController {

//    TODO: MVC 의 Model(Service 클래스) 객체 가져오기
    @Autowired
    DeptService deptService;

    @GetMapping("/dept")
    public String getDeptAll(Model model){

//        TODO: Service 객체의 전체조회 함수 호출
        List<Dept> list = deptService.findAll();
        model.addAttribute("list", list);

//      TODO: 로그 찍기
        log.debug(list.toString());

        return "exam01/dept/dept_all.jsp";
    }



}
