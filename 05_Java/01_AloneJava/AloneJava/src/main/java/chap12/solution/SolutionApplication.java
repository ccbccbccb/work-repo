package chap12.solution;

import java.util.List;

/**
 * packageName : chap12.sec01.exam02.solution
 * fileName : SolutionApplication
 * author : GGG
 * date : 2023-09-25
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-25         GGG          최초 생성
 */
public class SolutionApplication {
    public static void main(String[] args) {
        Solution solution = new Solution();
        List<Integer> answer = solution.solution(10,3);
        System.out.println(answer);
    }
}
