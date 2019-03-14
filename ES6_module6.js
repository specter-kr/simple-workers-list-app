const users = [];
const r = /\d+/;

class User{
	constructor(userName){
		const names = userName.split(' ');
		this.firstName = names[0];
		this.lastName = names[1];
		this.regDate = new Date();
	}
}

function filterSymbols(user){
	if (user.match(r)){
		return 0;
	}
}

function filterLength(userName){
	let words = userName.split(' ');
	if (words.length > 2){
		return 0;
	}
}

class UserList{
	constructor(){
	}
	checkDouble(user) {
		for (let i = 0; i < users.length; i++){
			if (user.firstName == users[i].firstName && user.lastName == users[i].lastName){
				return 0;
			}
			else{
				return;
			}
		}
	}
	add (user){
		users.push(user);
	}
	getAllUsers() {
		for (let i = 0; i < users.length; i++){
			//console.log(users[i]);
			let n = users[i].firstName;
			let l = users[i].lastName;
			let d = users[i].regDate;
			console.log(`Имя: ${n}, Фамилия: ${l}, Дата: ${d}`);
		}
	}
}

let userName = prompt('Введите имя и фамилию:');
let list = new UserList();
while (typeof(userName) == "string"){
	let myUser = new User(userName);
	if (list.checkDouble(myUser) == 0){
		alert('Ошибка. Такой пользователь уже есть.');
	}
	else if (filterSymbols(userName) == 0){
		alert('В строке не должно быть цифр.');
	}
	else if (filterLength(userName) == 0){
		alert('Введите ТОЛЬКО имя и фамилию.');
	}
	else{
		list.add(myUser);
	}
	userName = prompt('Введите имя и фамилию:');
}
list.getAllUsers();