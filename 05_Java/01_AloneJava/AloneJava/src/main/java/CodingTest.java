public class CodingTest {
//    public static void main(String[] args) {

//        9 페이지
//        TODO: 0901 유한소수 판별하기

//    class Solution {
//        public int solution(int a, int b) {
//            int answer = 2;
//            int q1 = 0;
//            for (int i = b; i > 0; i--) {
//                if ((a % i == 0) && (b % i == 0)) {
//                    q1 = i;
//                } else if (a == b) {
//                    q1 = 1;
//                }
//            }
//
//            int result1 = b/q1;
//            int result2 = b/q1;
//            int result3 = b/q1;
//            int check1 = 0;
//            int check2 = 0;
//            int check3 = 0;
//            for (int i = 1; i <= 500 ; i++) {
//                result1 = result1/2;
//                if(result1 == 1 && result2%2==0) {
//                    check1 = 1;
//                }
//            }
//            for (int i = 1; i <= 200 ; i++) {
//                result1 = result1/5;
//                if(result1 == 1 && result2%5==0) {
//                    check2 = 1;
//                }
//            }
//            for (int i = 2; i <=result1 ; i+=2) {
//                for(int j=5; j<=result2; j+=5){
//                    if(result1%(i*j)==0) {
//                     check3 = 1;
//                    }
//                }
//            }
//
//            if(check1 == 1 || check2 == 1 || check3 == 1) {
//                answer = 1;
//            }
//            return answer;
//        }

    // TODO: 0902 겹치는 선분의 길이

    public int solution(int[][] lines) {
        int answer = 0;
        if (lines[0][1] >= lines[1][0] && lines[0][0] >= lines[1][1]) {
            if (lines[0][1] > lines[1][1]) {
                answer = answer + (lines[1][1] - lines[0][0]);
            } else if (lines[0][1] < lines[1][1]) {
                answer = answer + (lines[0][1] - lines[1][0]);
            } else if (lines[0][1] == lines[1][1]) {
                answer = answer + (lines[0][1] - Math.max(lines[0][0], lines[1][0]));
            }
        }

            if (lines[0][1] >= lines[2][0] && lines[0][0] >= lines[2][1]) {
                if (lines[0][1] > lines[2][1]) {
                    answer = answer + (lines[2][1] - lines[0][0]);
                } else if (lines[0][1] < lines[2][1]) {
                    answer = answer + (lines[0][1] - lines[2][0]);
                } else if (lines[0][1] == lines[2][1]) {
                    answer = answer + (lines[0][1] - Math.max(lines[0][0], lines[2][0]));
                }
            }

                if (lines[1][1] >= lines[2][0] && lines[1][0] >= lines[2][1]) {
                    if (lines[1][1] > lines[2][1]) {
                        answer = answer + (lines[2][1] - lines[1][0]);
                    } else if (lines[1][1] < lines[2][1]) {
                        answer = answer + (lines[1][1] - lines[2][0]);
                    } else if (lines[1][1] == lines[2][1]) {
                        answer = answer + (lines[1][1] - Math.max(lines[1][0], lines[2][0]));
                    }
                }

                    return answer;
                }
//    }
//    }
            }



