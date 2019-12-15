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
		<input type="hidden" id="fruitList" name="fruitList" value="${fruitList}" />

		<h1>${appName}</h1>
		<div>
			<p>${message}</p>
			<p>${now}</p>
		</div>
		<div></div>
		<div>
			<table border="1" style="border-collapse: collapse;">
				<tr>
					<th width="50px">選択</th>
					<th width="50px">新規</th>
					<th width="100px">果物名</th>
					<th width="100px">番号</th>
					<th width="150px">登録日</th>
					<th width="100px">登録日-年</th>
					<th width="100px">登録日-月</th>
					<th width="100px">登録日-日</th>
				</tr>
			</table>
		</div>
		<div>
			<table id="fruitTable" border="1" style="border-collapse: collapse">
				<tr style="display: none;">
					<td width="50px"  align="center">
						<input type="checkbox" name="select" />
					</td>
					<td width="50px" class="newFlag" align="center" style="color: red;"></td>
					<td width="100px" class="fruitName"></td>
					<td width="100px" class="fruitNo"></td>
					<td width="150px" class="regDate"></td>
					<td width="100px" class="regDateYear"></td>
					<td width="100px" class="regDateMonth"></td>
					<td width="100px" class="regDateDay"></td>
				</tr>
			</table>
		</div>
		<br>
		<div>
			<input type="button" id="BTN_jadge" name="BTN_jadge" value="判定">
		</div>
		<br>
		<div>
			<form:input style="width: 30px;" id="regDateYear" path="regDateYear" />年
			<form:input style="width: 30px;" id="regDateMonth" path="regDateMonth" />月
			<form:input style="width: 30px;" id="regDateDay" path="regDateDay" />日
		</div>
		<br>
		<div>
			<input type="button" id="BTN_updateRegDate" name="BTN_updateRegDate" value="登録日更新">
		</div>
		<div>
			<input type="button" id="BTN_decide" name="BTN_decide" value="実行">
		</div>
	</form:form>
	<footer>
		<script type="text/javascript"
			src="/demo/resources/js/jQuery-3.4.1.min.js"></script>
		<script type="text/javascript" src="/demo/resources/js/hello.js"></script>
	</footer>
</body>
</html>