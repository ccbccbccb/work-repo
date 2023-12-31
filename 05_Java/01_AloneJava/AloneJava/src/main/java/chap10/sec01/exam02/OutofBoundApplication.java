package chap10.sec01.exam02;

/**
 * packageName : chap10.sec01.exam02
 * fileName : OutofBoundApplication
 * author : GGG
 * date : 2023-09-26
 * description : 배열의 지정된 index 보다 큰값을 조회할때 발생하는 에러
 *              Out of Bound 에러
 *              예) 10개짜리 배열 : 0 ~ 9까지 (인덱스번호)
 *              => 코딩 11 인덱스를 조회하면 위의 에러가 발생함

 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class OutofBoundApplication {
    public static void main(String[] args) {
//        TODO: Out of Bound 에러 발생시키는 코드
//         현재 main 의 매개변수는 기본적으로 없음
        String data1 = args[0];
        String data2 = args[1];

        System.out.println(data1);
        System.out.println(data2);
    }
}
