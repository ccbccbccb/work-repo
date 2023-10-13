<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<!-- thymeleaf 설정 -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<%--  header 시작 --%>
<jsp:include page="../../common/header.jsp" />
<%--  header 끝 --%>

<div class="container mt-5">

    <div>
        <form action="/exam01/emp/add" method="post">
<%--            todo: 사원명 --%>
            <div class="mb-3">
                <label for="ename" class="form-label">사원명</label>
                <input type="text" class="form-control" id="ename" required name="ename">
            </div>
<%--            todo: 직책 --%>
            <div class="mb-3">
                <label for="job" class="form-label">직책</label>
                <input type="text" class="form-control" id="job" required name="job">
            </div>
    <%--            todo: 매니저 --%>
    <div class="mb-3">
        <label for="manager" class="form-label">매니저</label>
        <input type="text" class="form-control" id="manager" required name="manager">
    </div>
    <%--            todo: 입사일 --%>
    <div class="mb-3">
        <label for="hiredate" class="form-label">입사일</label>
        <input type="text" class="form-control" id="hiredate" required name="hiredate">
    </div>
    <%--            todo: 급여 --%>
    <div class="mb-3">
        <label for="salary" class="form-label">급여</label>
        <input type="text" class="form-control" id="salary" required name="salary">
    </div>
    <%--            todo: 상여금 --%>
    <div class="mb-3">
        <label for="commission" class="form-label">상여금</label>
        <input type="text" class="form-control" id="commission" required name="commission">
    </div>
    <%--            todo: 부서번호 --%>
    <div class="mb-3">
        <label for="dno" class="form-label">부서번호</label>
        <input type="text" class="form-control" id="dno" required name="dno">
    </div>

            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>

</div>

<%--  header 시작 --%>
<jsp:include page="../../common/footer.jsp"/>
<%--  header 끝 --%>
</body>
</html>