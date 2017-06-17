
	var email = $('#email');
	var fio = $('#fullName');
	var tel = $('#tel');


	var hasWarnings = "attention";



	var helpCheck = function(testFunc, $val) {
		if(!testFunc($val.val())) {
			$val.addClass(hasWarnings); 
		}
		else {
			$val.removeClass(hasWarnings);
		}

	}


function keyCheckMail() {

	helpCheck(checker.testMail, email);
}

function keyCheckFullName() {

	helpCheck(checker.testFullName, fio);
}

function keyCheckTel() {

	helpCheck(checker.testTelephone, tel);
}

$('#inputSubmit').click(
function (event) {
	//tel fio email
	var isBad = false;
	if(!checker.testMail(email.val())) {
		alert('Bad mail');

		isBad = true;
	}
	if(!checker.testFullName(fio.val())) {
		alert('Bad full name');
		
		isBad = true;
	}
	if(!checker.testTelephone(tel.val())) {
		alert('Bad telephone');
		
		isBad = true;
	}

	if (isBad)
		event.preventDefault();
});

jQuery(function($){
   $("#tel").mask("+9 (999) 999-99-99");
});
