const findFriend = function(data, names, field) {
  // Implement me

  let emptObj = {};
  let empName = "";
  let emptyField = "";

  for (let obj of data) {
    if (obj.name === names) {
      empName = obj.friends[0];

    }
  }
  for (let objs of data) {
    for (let key in objs) {
      if (objs[key] === empName) {
        emptyField = objs[field];

      }

    }

  }
  emptObj["name"] = empName;
  emptObj[field] = emptyField;
  return emptObj === undefined || emptyField === undefined || empName === "" || emptyField === "" ? "Not found" : emptObj;
};









// EXAMPLE DATA BELOW
const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];


//console.log(contacts[0]);
console.log(findFriend(contacts, "Buster", "email"));