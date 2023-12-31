-- 07_Subquery.sql
-- 서브쿼리 : 단일행 서브쿼리(1건만 나옴)
-- 예제1) SCOTT 사원보다 급여를 많이 받는 사원을 찾기위한 SQL문을 작성하세요
-- 해결 : 1-1) 사원테이블에서 SCOTT 사원의 급여를 찾은 후에(1번)
--       1-2) 그 급여를 비교해서 많이 받는 사원을 추가로 찾아야함(2번)
-- 1번
SELECT SALARY
FROM EMPLOYEE
WHERE ENAME = 'SCOTT'; -- 3000(급여)

-- 2번
SELECT ENAME, SALARY
FROM EMPLOYEE
WHERE SALARY > 3000;

-- 문제점 ) 성능 저하 : 여러번 쿼리로 인해
-- 사용법) SELECT 컬럼명 FROM 테이블명
--        WHERE 비교컬럼 > (SELECT 비교컬럼 FROM 테이블명)
SELECT ENAME, SALARY
FROM EMPLOYEE
WHERE SALARY = (SELECT SALARY
                FROM EMPLOYEE
                WHERE ENAME = 'SCOTT');

-- 예제1) SCOTT 사원과 동일한 부서에서(DNO) 근무하는 사원(ENAME) 출력하기
                
SELECT ENAME
FROM EMPLOYEE
WHERE DNO = (SELECT DNO
                FROM EMPLOYEE
                WHERE ENAME = 'SCOTT');
                
SELECT DNO, MIN(SALARY)
FROM EMPLOYEE
GROUP BY DNO HAVING MIN(SALARY) > (SELECT MIN(SALARY)
                FROM EMPLOYEE
                WHERE DNO = 30);    
                
-- 3) 특수한 경우 아래처럼 사용도 가능
-- SELECT 예약어 다음에도 서브쿼리 사용가능
SELECT 2*3, (SELECT 4*3 FROM DUAL)
FROM DUAL;

-- FROM 예약어 다음에도 서브쿼리 사용가능
SELECT EMP.ENAME, EMP.ENO
FROM (SELECT ENAME, ENO FROM EMPLOYEE) EMP;

-- 2) 다중 행 서브쿼리(자식쿼리) : 여러 건이 나옴
-- 예제4) (1) 부서별 최소 급여를 받는 사원 중에서 (2) 사원번호와 이름을 출력하세요

SELECT ENO, ENAME
FROM EMPLOYEE
WHERE SALARY IN (SELECT MIN(SALARY)
                FROM EMPLOYEE
                GROUP BY DNO);
