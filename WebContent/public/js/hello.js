var objFruitData = [];

$(document).ready(function() {
	//
	if ("" !== $("#fruitList").val()) {
		objFruitData = $.parseJSON(replaceDoubleQuotes($("#fruitList").val()));
	}

	renderFruitTable();

	$("#BTN_jadge").click(function() {
		$.each(objFruitData, function(i, row) {
			if (row.newFlag) {
				window.alert("新規分が存在しています。");
			}
		});
	});

});

// レンダリング
/**
 * @returns
 */
function renderFruitTable() {
	// 最初の行を除くすべての表の行を削除する
	$("#fruitTable").find("tr:gt(0)").remove();
	var tempTr = $("#fruitTable tr:first").clone().end();
	$.each(objFruitData, function(i, row) {
		var trAdd = tempTr.clone();
		trAdd.find("input[tyoe=checkbox]").val(i);
		trAdd.find("td.fruit").text(row.fruit);
		if (row.newFlag) {
			trAdd.find("td.newFlag").text("○");
		} else {
			trAdd.find("td.newFlag").text("");
		}
		trAdd.css("display", "").appendTo("#fruitTable");
	});
	// スクロールの設定
};

/**
 * @param value
 * @returns
 */
function replaceDoubleQuotes(target) {
	return target.replace(/\'/g, '\"');
}