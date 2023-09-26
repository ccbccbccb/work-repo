package chap12.sec01.verify.exam05;


import java.util.HashMap;
import java.util.Map;

/**
 * packageName : chap12.sec01.verify.exam05
 * fileName : DeptApplication
 * author : GGG
 * date : 2023-09-26
 * description : 실행 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */

// TODO: 연습문제) Map 자료구조에 값과 객체를 추가하고 아래와 같이 결과가 출력하도록
//    실행 클래스를 코딩하세요
//    힌트 : put(), get()
//    입력 :  키         |    값
//         currentPage      2
//         totalNum         3
//         dept             Dept{dno=10, dname='Sales', loc='부산'}
//         sizePerPage      3
//    결과 :
//    2
//    3
//    Dept{dno=10, dname='Sales', loc='부산'}
//    3

public class DeptApplication {
    public static void main(String[] args) {

        Map<String, Object> map = new HashMap<>();

        map.put("currentPage", 2);
        map.put("totalNum", 3);
        map.put("dept", new Dept(10,"Sales","부산"));
        map.put("sizePerPage", 3);
        System.out.println(map.get("currentPage"));
        System.out.println(map.get("totalNum"));
        System.out.println(map.get("dept"));
        System.out.println(map.get("sizePerPage"));

//        TODO: 객체 조회 : map.get(키)
//        System.out.println("홍길동 : " + map.get("홍길동"));

    }
}
