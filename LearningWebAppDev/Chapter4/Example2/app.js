var main = function () {
    "use strict";

    var addCommentFromInputBox = function () {
        var $new_comment;
        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p class=\"user0\">").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };
    var addCommentFromInputBox1 = function () {	
		var $new_comment1;

        if ($(".comment-input1 input").val() !== "") {
            $new_comment1 = $("<p class=\"user1\">").text($(".comment-input1 input").val());
            $new_comment1.hide();
            $(".comments").append($new_comment1);
            $new_comment1.fadeIn();
            $(".comment-input1 input").val("");
        }
		
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });

    $(".comment-input1 button").on("click", function (event) {
        addCommentFromInputBox1();
    });

    $(".comment-input1 input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox1();
	 }
        });


};

$(document).ready(main);
