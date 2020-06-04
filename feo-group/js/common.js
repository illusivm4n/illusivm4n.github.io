$(document).ready(function() {

	$("#form, #form2").submit(function() {
		$.ajax({
			type: "POST",
			url: "sendmail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form, #form2").trigger("reset");
		});
		return false;
	});
	
});