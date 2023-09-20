package chap06.sec04.exam05;

/**
 * packageName : chap06.sec04.exam05
 * fileName : Car
 * author : GGG
 * date : 2023-09-20
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class Car {

    int speed;
    void keyTurnOn(){
        System.out.println("키를 돌립니다.");
    }

    void run(){
        for (int i = 1; i <=5 ; i++) {
            System.out.println("달립니다.");
            speed = speed + 10;
        }
    }

    public int getSpeed() {
        return speed;
    }
}
