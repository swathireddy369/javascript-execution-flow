const user = {
    name: "rajesh",
    address: {
        personal: {
            city: "hyderabad",
            area: "chaitanyapuri"
        },
        office: {
            city: "hyderabad",
            area: {
                landmark:
                    "chaitanyapuri"
            }
        }
    }
}
let final = {};
const prepareMagicObj = function (user, parent_path) {

    for (let key in user) {
        if (typeof (user[key]) == "object") {
            prepareMagicObj(user[key], parent_path + "-" + key);
        } else {
              final = {
                ...final,
                [parent_path + "-" + key]: user[key]
            };
        }

    }
   
 console.log(final);
}

prepareMagicObj(user, "user");