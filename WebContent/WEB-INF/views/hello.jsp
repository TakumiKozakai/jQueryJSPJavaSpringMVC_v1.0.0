<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>hello</title>
</head>
<body>
	<form:form id="submitForm" modelAttribute="form" action="${action}">
		<input type="hidden" id="fruitList" name="fruitList"
			value="${fruitList}" />

		<h1>${appName}</h1>
		<div>
			<p>${message}</p>
			<p>${now}</p>
		</div>
		<div></div>
		<div>
			<ol>
				<c:forEach var="value" items="${fruits}" varStatus="index">
					<li>${value}(${index.count})</li>
				</c:forEach>
			</ol>
		</div>
		<div>
			<table border="1" style="border-collapse: collapse">
				<tr>
					<th width="50px">選択</th>
					<th width="100px">フラグ</th>
					<th width="100px">果物</th>
				</tr>
			</table>
		</div>
		<div>
			<table id="fruitTable" border="1" style="border-collapse: collapse">
				<tr style="display: none">
					<td width="50px" align="center"><input type="checkbox" name="select" /></td>
					<td width="100px" class="newFlag" align="center" style="color: red"></td>
					<td width="100px" class="fruit"></td>
				</tr>
			</table>
		</div>
		<br>
		<div>
			<input type="button" id="BTN_jadge" name="BTN_jadge" value="判定">
		</div>
		<br>
	</form:form>
	<footer>
		<script type="text/javascript"
			src="/demo/resources/js/jQuery-3.4.1.min.js"></script>
		<script type="text/javascript" src="/demo/resources/js/hello.js"></script>
	</footer>
</body>
</html>