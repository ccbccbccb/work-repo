import chap01.Sec0101;
import chap02.Sec0201;
import chap02.Sec0202;
import chap02.Sec0203;

/**
 * packageName : PACKAGE_NAME
 * fileName : JavaApplication
 * author : GGG
 * date : 2023-09-18
 * description : 실행 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-18         GGG          최초 생성
 */
public class JavaApplication {
    public static void main(String[] args) {

//        객체 생성
//      사용법: 클래스명 객체변수 = new 생성자함수();
//      객체지향 코딩 : 아래처럼 코딩 하는 것

//        Sec0101 sec0101 = new Sec0101();
//        sec0101.exam01(); // Hello Wolrd
//        sec0101.exam02();

        Sec0201 sec0201 = new Sec0201();
//        sec0201.exam01();
//        sec0201.exam02();

        Sec0202 sec0202 = new Sec0202();
//        sec0202.exam01();
//        sec0202.exam03();
//        sec0202.exam04(); // A
//        sec0202.exam05();
//        sec0202.exam06();
//        sec0202.exam07();

        Sec0203 sec0203 = new Sec0203();
//        sec0203.exam01();
//        sec0203.exam02();
        sec0203.exam06();
    }

}

