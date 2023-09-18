package chap02;

/**
 * packageName : chap02
 * fileName : Sec0203
 * author : GGG
 * date : 2023-09-18
 * description : 자료형 변환
 * 요약 :
 *       자동 타입 변환 : 자동으로 자료형이 변환되는것 : 작은(byte) 자료형 -> 큰 자료형
 *       강제 타입 변환 : 강제로 자료형 변환 : 사용법 : (자료형)변수명, 큰 자료형 -> 작은 자료형
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-18         GGG          최초 생성
 */
public class Sec0203 {
    public void exam01() {
    byte byteValue = 10; // 1 byte 정수형
    //    자동 자료형 변환
    int intValue = byteValue;
//    결과 : sout, 줄복사 : ctrl + d
        System.out.println("intValue : " + intValue);

//    실수 자동 형변환 :
        float floatValue = 100.5F;
        double doubleValue = floatValue;
//        결과 : sout , 줄복사 : ctrl + d
        System.out.println("doubleValue : " + doubleValue);
    }

    /**
     * 강제 형변환 예제
     * 참고 ) 아스키 코드 변환 : char 변수 <- int 값 : 아스키코드 -> 문자로 변환
     *                           int 변수 <- char    : 아스키코드 변환 <- 문자
     */
    public void exam02() {
        int intValue = 44032; // int(4byte) , char(2byte)
        char charValue = (char)intValue; // 강제 형변환
        //        결과 : sout, 줄복사 : ctrl + d
        System.out.println(charValue);
//        double(8) -> int (4) 강제 형변환
        double doubleValue = 3.14;
        int intValue2 = (int)doubleValue;
        System.out.println(intValue2);
    }

    /**
     * 문자열 + 숫자 = 문자열
     */

    public void exam06() {
//        결합 연산
        String str1 = 10 + 2 + "8";
        System.out.println(str1); // 128

        String str2 = 10 + "2" + 8;
        System.out.println(str2); // 1028

        String str3 = "10" + (2 + 8); // 1010
        System.out.println(str3);
    }

    /**
     * 문자열 -> int 자료형 변경
     */
    public void exam07() {

    }
}
