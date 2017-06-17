var checker = (function() {
	var mailRegex = /^[a-z0-9.]+@[a-z0-9.]+\.[a-z0-9.]+$/i;
	
	var telephoneRegex = /^\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

	var fullNameRegex = /^[A-ZА-Я]{1}[a-zа-я]+ [A-ZА-Я]{1}[a-zа-я]+ [A-ZА-Я]{1}[a-zа-я]+$/;

	return {
		testMail(mail) {
			return mailRegex.test(mail);
		},

		testTelephone(telephone) {
			return telephoneRegex.test(telephone);
		},

		testFullName(fullName) {
			return fullNameRegex.test(fullName);
		}
	}
})();