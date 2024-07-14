class Car {
  constructor(engine, doors, wheels) {
    // this -> Instance variable / Member variable
    this.engine = engine;
    this.doors = doors;
    this.wheels = wheels;
  }

  horn() {
    return `Peeeep`;
  }
}
// console.log(typeof Car);

const nano = new Car("nan", 4, 4);
const maruthi = new Car("mrt", 2, 4);
const johndree = new Car("jd", 2, 6);
const ashokLeyland = new Car("al", 2, 8);

// console.log(typeof nano);

// console.log(nano);
// console.log(maruthi);
// console.log(johndree);
// console.log(ashokLeyland.horn());

// ------------------------------------------------------------------------------------------------------------------

class HDFC {
  static objectCount = 0;
  static interest = 0.03;
  balance;
  #transacts = [];
  constructor(accNo, name, ifsc, balance) {
    this.accNo = accNo;
    this.name = name;
    this.ifsc = ifsc;
    this.balance = balance;
    HDFC.objectCount += 1;
  }

  addTransactions(type, amount) {
    this.#transacts.push({
      id: this.#transacts.length + 1,
      type,
      amount,
      date: Date.now(),
    });
    return;
  }

  displayTransactions() {
    return this.#transacts;
  }

  displayBalance() {
    return `Your current balance is ${new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(this.balance)} 🤩`;
  }

  withdrawMoney(amount) {
    if (amount > this.balance) {
      ("Insufficient Balance 😭");
    } else {
      (this.balance -= amount),
        this.addTransactions("Debit", amount),
        `Hi ${
          this.name
        } After withdraw Your current balance is ${this.displayBalance()}`;
    }
  }

  depositeMoney(amount) {
    if (amount <= 0) {
      ("Amount should be Positive");
    } else {
      (this.balance += amount),
        this.addTransactions("Credit", amount),
        `Hi ${
          this.name
        } After Deposite Your current balance is ${this.displayBalance()}`;
    }
  }

  applyIntrest() {
    this.balance += this.balance *= HDFC.interest;
    return `After Applying interest ${this.displayBalance()}`;
  }
}

class CurrentAccount extends HDFC {
  constructor(accNo, name, ifsc, balance) {
    super(accNo, name, ifsc, balance);
  }
  withdrawMoney(amount) {
    if (amount > this.balance) {
      ("Insufficient Balance 😭");
    } else {
      (this.balance -= amount + 10),
        this.addTransactions("Debit", amount),
        `Hi ${
          this.name
        } After withdraw Your current balance is ${this.displayBalance()}`;
    }
    return;
  }
}
class SavingsAccount extends HDFC {
  static interest = 0.06;
  constructor(accNo, name, ifsc, balance) {
    super(accNo, name, ifsc, balance);
  }

  applyIntrest() {
    this.balance += this.balance *= SavingsAccount.interest;
    return `After Applying interest ${this.displayBalance()}`;
  }
}

const ragav = new CurrentAccount(123456, "ragav", "HDFC0001356", 100);
const Nithin = new SavingsAccount(123457, "Nithin", "HDFC0001356", 100);

// console.log(ragav.displayBalance());

// console.log(ragav.withdrawMoney(100));

// console.log(ragav.depositeMoney(100));

// console.log(ragav.displayTransactions());

// console.log(ragav.displayBalance());

// console.log(ragav.applyIntrest());

// console.log(Nithin.displayBalance());

// console.log(Nithin.withdrawMoney(100));

// console.log(Nithin.applyIntrest());

// console.log(HDFC.objectCount);

// -------------------------------------------------------------------------------------------------------

// `use strict`
const luffy = {
  name: "Monkey D. Luffy",
  crew: "Straw Hat Pirates",
  actions: {
    gearSecond: function () {
      console.log(`${this.name} activates Gear Second!`); // undefined

      function attack() {
        console.log(`${this.name} attacks with Gomu Gomu no Jet Pistol!`);
      }

      attack(); // undefined
    },
    gearFourth: function () {
      console.log(`${this.name} activates Gear Fourth!`); // undefined

      const attack = () => {
        console.log(`${this.name} attacks with Gomu Gomu no Kong Gun!`);
      };

      attack(); // undefined
    },
    crewShout: () => {
      console.log(`Crew Shout: ${this.crew} cannot be accessed here.`); // undefined
    },
  },
};

// What happens? Clue: Change Context
// luffy.actions.gearSecond.call(luffy);
// luffy.actions.gearFourth.call(luffy);
// luffy.actions.crewShout.call(luffy);
