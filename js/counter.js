// EAD-LSM Glimpse section timer


// window.onscroll = function() {animateValue(obj, start, end, duration)};

function animateValue_twodigit(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp + startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function animateValue_fourdigit(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp + startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}


function ead_attendees_func() {
    const ead_attendees = document.getElementById("ead_attendees");
    animateValue_fourdigit(ead_attendees, 10000, 30000, 5000);
}

function ead_speakers_func() {
    const ead_speakers = document.getElementById("ead_speakers");
    animateValue_twodigit(ead_speakers, 0, 50, 5000);
}

function ead_events_func() {
    const ead_events = document.getElementById("ead_events");
    animateValue_twodigit(ead_events, 0, 100, 5000);
}

function lsm_pitches_func() {
    const ead_attendees = document.getElementById("lsm_pitches");
    animateValue_fourdigit(ead_attendees, 0, 7, 5000);
}

function lsm_investors_func() {
    const ead_speakers = document.getElementById("lsm_investors");
    animateValue_twodigit(ead_speakers, 0, 10, 5000);
}

function lsm_startups_func() {
    const ead_events = document.getElementById("lsm_startups");
    animateValue_twodigit(ead_events, 0, 300, 5000);
}


ead_events_func();

ead_speakers_func();

ead_attendees_func();

lsm_startups_func();

lsm_investors_func();

lsm_pitches_func();