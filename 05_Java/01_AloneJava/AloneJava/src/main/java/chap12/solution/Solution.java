package chap12.solution;

import java.util.ArrayList;
import java.util.List;

/**
 * packageName : chap12.sec01.exam02.solution
 * fileName : Solution
 * author : GGG
 * date : 2023-09-25
 * description : 프로그래머스 솔루션 함수 예제(샘플)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-25         GGG          최초 생성
 */
public class Solution {
    /**
     *
     * @param n
     * @param k
     * @return
     */
    public List<Integer> solution(int n, int k) {
        List<Integer> answer = new ArrayList<>();
        for (int i = 1; i <= n ; i++) {
            if(i % k == 0) {
//              i값 추적 : 로깅(디버깅의 기초)
//              i의 변하는 값을 화면에 결과 출력 : sout
                System.out.println("[i] " + i); // i 의 값 추적
                answer.add(i);
            }
        }
        return answer;
    }
}
