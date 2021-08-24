// Task 1
// Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.

class Goods {
  constructor(name, amount, image, count) {
    this.name = name;
    this.amount = amount;
    this.image = image;
    this.count = count;
  }

  draw() {
    let wrapper = document.createElement('div');
    let name = document.createElement('p');
    name.innerText = this.name;
    wrapper.append(name);
    let amount = document.createElement('p');
    amount.innerText = this.amount;
    wrapper.append(amount);
    let img = document.createElement('img');
    img.src = this.image;
    img.style.width = '100px';
    wrapper.append(img);
    let count = document.createElement('p');
    count.innerText = this.count;
    wrapper.append(count);
    return wrapper;
  }
}

let goods = new Goods('apples', '10grn');
console.log(goods);

//Task 2.
//  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

//Task 3.
//  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).

// Task 4.
// Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.

let goods2 = new Goods('apples', '10grn', 'https://pngimg.com/uploads/apple/apple_PNG12423.png', '2t');
document.querySelector('.out-4').append(goods2.draw());

//Task 5.
// Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.

class Goods2 extends Goods {
  constructor(name, amount, image, count, sale) {
    super(name, amount, image, count);
    this.sale = sale;
  }

  draw() {
    let wrapper = super.draw();
    let sale = document.createElement('p');
    sale.innerText = this.sale;
    wrapper.append(sale);
    return wrapper;
  }
}

// Task 6.
// Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.

let goods3 = new Goods2('apples', '10grn', 'https://pngimg.com/uploads/apple/apple_PNG12423.png', '2t', 'true');
document.querySelector('.out-6').append(goods3.draw());

// Task 7.
// Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.

class Valid {
  constructor(email, password, isValid) {
    this.email = email;
    this.password = password;
    this.isValid = isValid;
  }

  validate() {
    if (this.password.length > 6) {
      this.isValid = true;
    }
    return this.isValid;
  }
}

//Task 8.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.

let password = new Valid('gggg@gmail.com', 'auto', false);
console.log(password.validate());

//Task 9.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.

let valid = new Valid('gggg@gmail.com', 'nuclear', false);
console.log(valid.validate());

//Task 10.
// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.

class Valid2 extends Valid {
  constructor(email, password, isValid, emailError, passwordError) {
    super(email, password, isValid);
    this.emailError = emailError;
    this.passwordError = passwordError;
  }

  validate() {
    super.validate();

    if (this.isValid === false) {
      this.passwordError = 'min length 6';
    }
    
    if (this.email === '') {
      this.isValid = false;
      this.emailError = 'email empty';
    }

    return {
      email: this.email,
      password: this.password,
      isValid: this.isValid,
      emailError: this.emailError,
      passwordError: this.passwordError
    }
  }
}

//Task 11.
// Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

let valid2 = new Valid2('', 'nuclearblast', false, '', '');
console.log(valid2);
console.log(valid2.validate());

//Task 12.
// Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

let valid3 = new Valid2('ambivalence@gmail.com', 'nuclearblast', false, '', '');
console.log(valid3);
console.log(valid3.validate());