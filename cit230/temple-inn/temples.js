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
            let sacOrdinance = temples.sac.ordinanceSchedule;
            let sacSessions = temples.sac.sessionSchedule;
            let sacClosure = temples.sac.templeClosure;

            document.getElementById("sacName").innerHTML = sacName;
            document.getElementById("sacAddress").innerHTML = sacStreetAddress + " " + sacCity + ", " + sacState + " " + sacPostalCode;
            document.getElementById("sacNumber").innerHTML = sacNumber;
            document.getElementById("sacDedicationDate").innerHTML = sacDedicationDate;
            document.getElementById("sacServices").innerHTML = sacServices;
            document.getElementById("sacOrdinance").innerHTML = sacOrdinance;
            document.getElementById("sacSessions").innerHTML = sacSessions;
            document.getElementById("sacClosure").innerHTML = sacClosure;

            let oaklandName = temples.oakland.name;
            let oaklandStreetAddress = temples.oakland.address.streetAddress;
            let oaklandCity = temples.oakland.address.city;
            let oaklandState = temples.oakland.address.state;
            let oaklandPostalCode = temples.oakland.address.postalCode;
            let oaklandNumber = temples.oakland.phoneNumber;
            let oaklandDedicationDate = temples.oakland.dedicationDate;
            let oaklandServices = temples.oakland.services;
            let oaklandOrdinance = temples.oakland.ordinanceSchedule;
            let oaklandSessions = temples.oakland.sessionSchedule;
            let oaklandClosure = temples.oakland.templeClosure;

            document.getElementById("oaklandName").innerHTML = oaklandName;
            document.getElementById("oaklandAddress").innerHTML = oaklandStreetAddress + " " + oaklandCity + ", " + oaklandState + " " + oaklandPostalCode;
            document.getElementById("oaklandNumber").innerHTML = oaklandNumber;
            document.getElementById("oaklandDedicationDate").innerHTML = oaklandDedicationDate;
            document.getElementById("oaklandServices").innerHTML = oaklandServices;
            document.getElementById("oaklandOrdinance").innerHTML = oaklandOrdinance;
            document.getElementById("oaklandSessions").innerHTML = oaklandSessions;
            document.getElementById("oaklandClosure").innerHTML = oaklandClosure;

            let newportName = temples.newport.name;
            let newportStreetAddress = temples.newport.address.streetAddress;
            let newportCity = temples.newport.address.city;
            let newportState = temples.newport.address.state;
            let newportPostalCode = temples.newport.address.postalCode;
            let newportNumber = temples.newport.phoneNumber;
            let newportDedicationDate = temples.newport.dedicationDate;
            let newportServices = temples.newport.services;
            let newportOrdinance = temples.newport.ordinanceSchedule;
            let newportSessions = temples.newport.sessionSchedule;
            let newportClosure = temples.newport.templeClosure;

            document.getElementById("newportName").innerHTML = newportName;
            document.getElementById("newportAddress").innerHTML = newportStreetAddress + " " + newportCity + ", " + newportState + " " + newportPostalCode;
            document.getElementById("newportNumber").innerHTML = newportNumber;
            document.getElementById("newportDedicationDate").innerHTML = newportDedicationDate;
            document.getElementById("newportServices").innerHTML = newportServices;
            document.getElementById("newportOrdinance").innerHTML = newportOrdinance;
            document.getElementById("newportSessions").innerHTML = newportSessions;
            document.getElementById("newportClosure").innerHTML = newportClosure;

            let sanDiegoName = temples.sanDiego.name;
            let sanDiegoStreetAddress = temples.sanDiego.address.streetAddress;
            let sanDiegoCity = temples.sanDiego.address.city;
            let sanDiegoState = temples.sanDiego.address.state;
            let sanDiegoPostalCode = temples.sanDiego.address.postalCode;
            let sanDiegoNumber = temples.sanDiego.phoneNumber;
            let sanDiegoDedicationDate = temples.sanDiego.dedicationDate;
            let sanDiegoServices = temples.sanDiego.services;
            let sanDiegoOrdinance = temples.sanDiego.ordinanceSchedule;
            let sanDiegoSessions = temples.sanDiego.sessionSchedule;
            let sanDiegoClosure = temples.sanDiego.templeClosure;

            document.getElementById("sanDiegoName").innerHTML = sanDiegoName;
            document.getElementById("sanDiegoAddress").innerHTML = sanDiegoStreetAddress + " " + sanDiegoCity + ", " + sanDiegoState + " " + sanDiegoPostalCode;
            document.getElementById("sanDiegoNumber").innerHTML = sanDiegoNumber;
            document.getElementById("sanDiegoDedicationDate").innerHTML = sanDiegoDedicationDate;
            document.getElementById("sanDiegoServices").innerHTML = sanDiegoServices;
            document.getElementById("sanDiegoOrdinance").innerHTML = sanDiegoOrdinance;
            document.getElementById("sanDiegoSessions").innerHTML = sanDiegoSessions;
            document.getElementById("sanDiegoClosure").innerHTML = sanDiegoClosure;

        }
    );