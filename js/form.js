function validasi(){
	var nama = document.getElementById('nama').value;
	var email = document.getElementById('email').value;
	var subjek = document.getElementById('subjek').value;
	var pesan = document.getElementById('pesan').value;
	var text;

	error.style.padding = "10px";
	if(nama.length < 5){
		text = "Cantumkan nama lengkap anda dengan benar";
		error.innerHTML = text;
		return false;
	}

	if(email.indexOf("@") == -1 || email
		== ''){
		text = "Cantumkan email anda dengan benar";
		error.innerHTML = text;
		return false;
	}

	if(subjek.length < 5){
		text = "Tolong cantumkan subjek";
		error.innerHTML = text;
		return false;
	}

	if(pesan.length == ''){
		text = "Isi kolom pesan";
		error.innerHTML = text;
		return false;
	}

	alert('data tersimpan, kami akan mengirim informasi lanjutannya melalui email anda!');
	nama = '';
	email = '';
	subjek = '';
	pesan = '';
}