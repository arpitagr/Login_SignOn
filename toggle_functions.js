function change_to_register() 
{
	var register_form = document.getElementById('register_form');
	var login_form = document.getElementById('login_form');
	var forget_pw_form = document.getElementById('forget_pw_form');
	var reset_pw_form = document.getElementById('reset_pw_form');
	login_form.style.display='none';
	reset_pw_form.style.display = 'none';
	register_form.style.display='inherit';
	forget_pw_form.style.display = 'inherit';
}
function change_to_login() 
{
	var register_form = document.getElementById('register_form');
	var login_form = document.getElementById('login_form');
	var forget_pw_form = document.getElementById('forget_pw_form');
	var reset_pw_form = document.getElementById('reset_pw_form');
	login_form.style.display='inherit';
	reset_pw_form.style.display = 'none';
	register_form.style.display='none';
	forget_pw_form.style.display = 'inherit';
}
function reset_password() {
	var register_form = document.getElementById('register_form');
	var login_form = document.getElementById('login_form');
	var forget_pw_form = document.getElementById('forget_pw_form');
	var reset_pw_form = document.getElementById('reset_pw_form');
	login_form.style.display='none';
	reset_pw_form.style.display = 'inherit';
	register_form.style.display='none';
	forget_pw_form.style.display = 'none';
}