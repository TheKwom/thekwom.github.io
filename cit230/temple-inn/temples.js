const api = "temples.json";

fetch(api)
    .then(
        (response) => response.json()
    )
    .then(
        (temples) => {
            //DEBUG:
            console.log(temples);

            let sacName = temples.sac.name;
            let sacStreetAddress = temples.sac.address.streetAddress;
            let sacCity = temples.sac.address.city;
            let sacState = temples.sac.address.state;
            let sacPostalCode = temples.sac.address.postalCode;
            let sacNumber = temples.sac.phoneNumber;
            let sacDedicationDate = temples.sac.dedicationDate;
            let sacServices = temples.sac.services;

            document.getElementById("sacName").innerHTML = sacName;
            document.getElementById("sacAddress").innerHTML = sacStreetAddress + " " + sacCity + ", " + sacState + " " + sacPostalCode;
            document.getElementById("sacNumber").innerHTML = sacNumber;
            document.getElementById("sacDedicationDate").innerHTML = sacDedicationDate;
            document.getElementById("sacServices").innerHTML = sacServices;

            let oaklandName = temples.oakland.name;
            let oaklandStreetAddress = temples.oakland.address.streetAddress;
            let oaklandCity = temples.oakland.address.city;
            let oaklandState = temples.oakland.address.state;
            let oaklandPostalCode = temples.oakland.address.postalCode;
            let oaklandNumber = temples.oakland.phoneNumber;
            let oaklandDedicationDate = temples.oakland.dedicationDate;
            let oaklandServices = temples.oakland.services;

            document.getElementById("oaklandName").innerHTML = oaklandName;
            document.getElementById("oaklandAddress").innerHTML = oaklandStreetAddress + " " + oaklandCity + ", " + oaklandState + " " + oaklandPostalCode;
            document.getElementById("oaklandNumber").innerHTML = oaklandNumber;
            document.getElementById("oaklandDedicationDate").innerHTML = oaklandDedicationDate;
            document.getElementById("oaklandServices").innerHTML = oaklandServices;

            let newportName = temples.newport.name;
            let newportStreetAddress = temples.newport.address.streetAddress;
            let newportCity = temples.newport.address.city;
            let newportState = temples.newport.address.state;
            let newportPostalCode = temples.newport.address.postalCode;
            let newportNumber = temples.newport.phoneNumber;
            let newportDedicationDate = temples.newport.dedicationDate;
            let newportServices = temples.newport.services;

            document.getElementById("newportName").innerHTML = newportName;
            document.getElementById("newportAddress").innerHTML = newportStreetAddress + " " + newportCity + ", " + newportState + " " + newportPostalCode;
            document.getElementById("newportNumber").innerHTML = newportNumber;
            document.getElementById("newportDedicationDate").innerHTML = newportDedicationDate;
            document.getElementById("newportServices").innerHTML = newportServices;

            let sanDiegoName = temples.sanDiego.name;
            let sanDiegoStreetAddress = temples.sanDiego.address.streetAddress;
            let sanDiegoCity = temples.sanDiego.address.city;
            let sanDiegoState = temples.sanDiego.address.state;
            let sanDiegoPostalCode = temples.sanDiego.address.postalCode;
            let sanDiegoNumber = temples.sanDiego.phoneNumber;
            let sanDiegoDedicationDate = temples.sanDiego.dedicationDate;
            let sanDiegoServices = temples.sanDiego.services;

            document.getElementById("sanDiegoName").innerHTML = sanDiegoName;
            document.getElementById("sanDiegoAddress").innerHTML = sanDiegoStreetAddress + " " + sanDiegoCity + ", " + sanDiegoState + " " + sanDiegoPostalCode;
            document.getElementById("sanDiegoNumber").innerHTML = sanDiegoNumber;
            document.getElementById("sanDiegoDedicationDate").innerHTML = sanDiegoDedicationDate;
            document.getElementById("sanDiegoServices").innerHTML = sanDiegoServices;

        }
    );