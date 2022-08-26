
function checkifCampusAmbassador(e) {
    if (e == "Campus_Ambassadors") {
        document.getElementsByClassName("eadForm-referraldiv")[0].style.display = "block";

    } else {
        document.getElementsByClassName("eadForm-referraldiv")[0].style.display = "none";
        //                 document.getElementById("referral_code")[0].value = "";
    }
}

function checkifCampusAmbassadorlsm(e) {
    if (e == "Campus_Ambassadors") {
        document.getElementsByClassName("lsmForm-referraldiv")[0].style.display = "block"
    } else {
        document.getElementsByClassName("lsmForm-referraldiv")[0].style.display = "none";
        document.getElementsByClassName("lsm-refferalcode")[0].value = "";
    }
}
function lsmregprompt(yesorno) {
    //       console.log(yesorno)
    if (yesorno == "true") {
        //         console.log("Display");
        document.getElementsByClassName("lsmreg")[0].style.display = "block";

    } else {
        //         console.log("hide");
        document.getElementsByClassName("lsmreg")[0].style.display = "none";
    }
}