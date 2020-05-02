var today= 2020;

  function findBornYear(name, age) {
    var dob = today-age;
    var message =
      "My Name is " + name + " and I was born in " + dob + ".";
    return message;
  }

  console.log(findBornYear("Erol",36));
