package chap11.sec02.exam02;

import java.util.Calendar;

/**
 * packageName : chap11.sec02.exam02
 * fileName : CalendarApplication
 * author : ds
 * date : 2023-09-26
 * description : Calendar ( 날짜객체 : Date -> Calendar(날짜 연산 가능) )
 *             월 : 0 ~ 11 까지
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2022-10-05         ds          최초 생성
 */
public class CalendarApplication {
    public static void main(String[] args) {
//      TODO: 날짜 연산 객체  
        Calendar now = Calendar.getInstance(); // 싱글톤(디자인패턴): 공유(전적)객체

//      TODO: Calendar객체변수.get(날짜상수들) : 날짜 정보를 얻을 수 있음
        int year = now.get(Calendar.YEAR);        // 년도
        int month = now.get(Calendar.MONTH) + 1;  // 월(0 ~ 11)
        int week = now.get(Calendar.DAY_OF_WEEK); // 요일
        int day = now.get(Calendar.DAY_OF_MONTH); // 일

//      TODO: 현재 날짜 정보 출력
        System.out.println(year + "년");
        System.out.println(month + "월");
        System.out.println(week + "요일");
        System.out.println(day+ "일");
        
//      TODO: 현재 시간 정보
        int hour = now.get(Calendar.HOUR);
        int minute = now.get(Calendar.MINUTE);
        int second = now.get(Calendar.SECOND);

        System.out.println(hour + "시");
        System.out.println(minute + "분");
        System.out.println(second + "초");
    }
}






