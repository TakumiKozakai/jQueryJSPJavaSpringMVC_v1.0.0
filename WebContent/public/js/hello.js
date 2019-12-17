// フルーツデータ
var objFruitData = [];

$(document).ready(function() {
	// フルーツリストをJSON形式に変換
	if ("" !== $("#fruitList").val()) {
		objFruitData = $.parseJSON(replaceDoubleQuotes($("#fruitList").val()));
	}

	// formのフルーツリストにobjFruitDataを設定
	$("#fruitList").val(JSON.stringify(objFruitData));

	// フルーツテーブルレンダリング
	renderFruitTable();

	// 判定ボタン押下イベント
	$("#BTN_jadge").click(function() {
		// 新規分有無チェック
		$.each(objFruitData, function(i, row) {
			if (row.newFlag) {
				window.alert("新規分が存在しています。");
				return false;
			}
		});
	});

	// フルーツテーブル_選択押下イベント
	$("input[name='select']").click(function() {
		// 複数チェック抑止
		$("input[name='select']").prop('checked', false);
		$(this).prop('checked', true);

		// 日付コピー
		copyRegDate();
	});

	// 登録日更新ボタン押下イベント
	$("#BTN_updateRegDate").click(function() {
		// 登録日更新
		updateRegDate();
	});

});
/**
 * フルーツテーブルレンダリング
 *
 * @returns
 */
function renderFruitTable() {
	// 最初の行を除くすべての表の行を削除する
	$("#fruitTable").find("tr:gt(0)").remove();
	var tempTr = $("#fruitTable tr:first").clone().end();
	$.each(objFruitData, function(i, row) {
		var trAdd = tempTr.clone();
		trAdd.find("input[tyoe=checkbox]").val(i);
		if (row.newFlag) {
			trAdd.find("td.newFlag").text("○");
		} else {
			trAdd.find("td.newFlag").text("");
		}
		trAdd.find("td.fruitName").text(row.fruitName);
		trAdd.find("td.fruitNo").text(row.fruitNo);
		trAdd.find("td.regDate").text(row.regDate);
		trAdd.find("td.regDateYear").text(row.regDateYear);
		trAdd.find("td.regDateMonth").text(row.regDateMonth);
		trAdd.find("td.regDateDay").text(row.regDateDay);
		trAdd.css("display", "").appendTo("#fruitTable");
	});
	// スクロールの設定
};
/**
 * 日付コピー
 *
 * @returns
 */
function copyRegDate() {
	// 選択された行の年月日をコピーする
	$($("input[name='select']:checkbox:checked").get())
			.each(
					function() {
						$("#regDateYear").val(
								$(this).parent().parent().find("td.regDateYear").text());
						$("#regDateMonth").val(
								$(this).parent().parent().find("td.regDateMonth").text());
						$("#regDateDay").val(
								$(this).parent().parent().find("td.regDateDay").text());
					});
}
/**
 * 登録日更新
 *
 * @returns
 */
function updateRegDate() {
	// 登録日を入力された年月日で更新する
	// 新規分のもののみ更新する
	// 番号が同一の場合は、同一分全て更新する

	// 日付生成
	// 登録日-年
	var inputtedRegDateYear = $("#regDateYear").val();
	// 登録日-月
	var inputtedRegDateMonth = $("#regDateMonth").val();
	// 登録日-日
	var inputtedRegDateDay = $("#regDateDay").val();
	// 登録日
	var inputtedRegDate =
		inputtedRegDateYear + "年"
		+ inputtedRegDateMonth + "月"
		+ inputtedRegDateDay + "日"

	// 更新対象判定用 番号取得
	var row = [];
	row = $("input[name='select']:checkbox:checked").get();
	var fruitNo = $(row).parent().parent().find("td.fruitNo").text();

	$.each(objFruitData, function(i, row) {
		// 新規分でない場合、スキップ
		if (!row.newFlag) {
			return;
		}

		// 番号が同一の場合、日付更新
		if (fruitNo === row.fruitNo) {
			row.regDate = inputtedRegDate;
			row.regDateYear = inputtedRegDateYear;
			row.regDateMonth = inputtedRegDateMonth;
			row.regDateDay = inputtedRegDateDay;
		}
	});

	// formのフルーツリストにobjFruitDataを設定
	$("#fruitList").val(JSON.stringify(objFruitData));

	// フルーツテーブルレンダリング
	renderFruitTable();
}
/**
 * @param value
 * @returns
 */
function replaceDoubleQuotes(target) {
	return target.replace(/\'/g, '\"');
}