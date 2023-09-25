import java.util.Arrays;
import java.util.Objects;
import java.util.stream.IntStream;

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

//    public int solution(int[][] lines) {
//        int answer = 0;
//        if (lines[0][1] >= lines[1][0] && lines[0][0] >= lines[1][1]) {
//            if (lines[0][1] > lines[1][1]) {
//                answer = answer + (lines[1][1] - lines[0][0]);
//            } else if (lines[0][1] < lines[1][1]) {
//                answer = answer + (lines[0][1] - lines[1][0]);
//            } else if (lines[0][1] == lines[1][1]) {
//                answer = answer + (lines[0][1] - Math.max(lines[0][0], lines[1][0]));
//            }
//        }
//
//            if (lines[0][1] >= lines[2][0] && lines[0][0] >= lines[2][1]) {
//                if (lines[0][1] > lines[2][1]) {
//                    answer = answer + (lines[2][1] - lines[0][0]);
//                } else if (lines[0][1] < lines[2][1]) {
//                    answer = answer + (lines[0][1] - lines[2][0]);
//                } else if (lines[0][1] == lines[2][1]) {
//                    answer = answer + (lines[0][1] - Math.max(lines[0][0], lines[2][0]));
//                }
//            }
//
//                if (lines[1][1] >= lines[2][0] && lines[1][0] >= lines[2][1]) {
//                    if (lines[1][1] > lines[2][1]) {
//                        answer = answer + (lines[2][1] - lines[1][0]);
//                    } else if (lines[1][1] < lines[2][1]) {
//                        answer = answer + (lines[1][1] - lines[2][0]);
//                    } else if (lines[1][1] == lines[2][1]) {
//                        answer = answer + (lines[1][1] - Math.max(lines[1][0], lines[2][0]));
//                    }
//                }
//
//                    return answer;
//                }
//    }
//    }

         // TODO: 1008 가위 바위 보

//    public String solution(String rsp) {
//        String
//        String[] arr = rsp.split("");
//
//        for (int i = 0; i <arr.length ; i++) {
//            if(Objects.equals(arr[i], "2")){
//                answer.append("0");
//            } else if (Objects.equals(arr[i], "0")) {
//                answer.append("5");
//            } else if (Objects.equals(arr[i], "5")) {
//                answer.append("2");
//            }
//        }
//        return answer;
//    }

         // TODO: 1010 개미 군단 (O)

//    public int solution(int hp) {
//        int answer = 0;
//        if(hp>=5){
//            answer = answer + hp/5;
//            int q1 = hp%5;
//            if(q1>=3){
//                answer = answer + q1/3 + q1%3;
//            } else if (q1<3) {
//                answer = answer + q1;
//            }
//        } else if (hp>=3){
//            answer = answer + hp/3 + hp%3;
//        } else if(hp<3){
//            answer = answer + hp;
//        }
//        return answer;
//    }


         // TODO: 1011 순서쌍의 개수 (O)

//    public int solution(int n) {
//        int answer = 0;
//        for (int i = 1; i <= n; i++) {
//           if((n%i)==0){
//               answer++;
//           }
//        }
//        return answer;
//    }


          // TODO: 1014 배열 자르기 (O)

//    public int[] solution(int[] numbers, int num1, int num2) {
//        int[] answer = new int[numbers.length];
//        answer = Arrays.copyOfRange(numbers, num1,num2+1);
//        return answer;
//    }

          // TODO: 1015 짝수의 합 (O)

//    public int solution(int n) {
//        int answer = 0;
//        for (int i = 1; i <=  n ; i++) {
//            if(i%2 == 0) {
//                answer = answer + i;
//            }
//        }
//        return answer;
//    }

         // TODO: 1016 양꼬치

//    public int solution(int n, int k) {
//        int answer = 0;
//        answer = 12000 * n + 2000 * k;
//        if(n>=10) {
//            answer = answer - (n/10)*2000;
//        }
//        return answer;
//    }
    // TODO: 1017 각도기 (O)

//    public int solution(int angle) {
//        int answer = 0;
//        if(angle<90&&angle>0){
//            answer = 1;
//        } else if(angle==90){
//            answer = 2;
//        } else if(angle<180&&angle>90){
//            answer = 3;
//        } else if(angle==180){
//            answer = 4;
//        }
//        return answer;
//    }

     // TODO: 1018 특정 문자 제거하기 (O)

//    public String solution(String my_string, String letter) {
//        String answer = "";
//        String [] my_string1 = my_string.split("");
//        for (int i = 0; i < my_string1.length ; i++) {
//            if(my_string1[i].charAt(0)==letter.charAt(0))
//            {
//                my_string1[i] = "";
//            }
//            answer = answer + my_string1[i];
//        }
//        return answer;
//    }

      // TODO: 1019 문자 반복 출력하기 (O)

//    public String solution(String my_string, int n) {
//        String answer = "";
//        String [] my_string1 = my_string.split("");
//        for (int i = 0; i < my_string1.length ; i++) {
//            for (int j = 1; j <= n; j++) {
//           answer = answer + my_string1[i];
//            }
//        }
//        return answer;
//    }

      // TODO: 1020 짝수 홀수 개수 (O)

//    public int[] solution(int[] num_list) {
//        int[] answer = {0,0};
//        for (int i = 0; i < num_list.length ; i++) {
//            if(num_list[i]%2 == 0) {
//                answer[0] = answer[0] + 1;
//            } else if(num_list[i]%2 != 0) {
//                answer[1] = answer[1] + 1;
//            }
//
//        }
//        return answer;
//    }

}



