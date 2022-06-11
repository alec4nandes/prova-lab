const organizerID = 33834574653;

const navbarEmailInput = document.querySelector(
    "#sticky .subscribe input[type='email']"
);

function highlightSubscribe() {
    navbarEmailInput.focus();
}

const eventsStatusCounter = (entries) =>
    entries.reduce((a, v) => {
        const [, events] = v;
        return a + events.length;
    }, 0);

function populateEvents({ isBootcamp }) {
    const elem = document.getElementById(isBootcamp ? "bootcamps" : "events");
    if (elem) {
        const obj = separateCategories(separateUpcomingAndPast(eventsData));
        displayEvents({
            ...obj,
            isBootcamp,
            elem,
        });
    }
}

try {
    populateEvents({ isBootcamp: true });
    populateEvents({ isBootcamp: false });
} catch (err) {
    console.log(err);
}

function displayEvents({
    upcomingCategories,
    pastCategories,
    isBootcamp,
    elem,
}) {
    document.getElementById("loading-events").style.display = "none";
    elem.innerHTML += [upcomingCategories, pastCategories]
        .map((obj, i) => displayEventsStatus(obj, i, isBootcamp))
        .join("");
}

function displayEventsStatus(obj, i, isBootcamp) {
    const entries = Object.entries(obj)
        .filter(([catID]) =>
            // Eventbrite ID for Bootcamps 101: Business & Professional
            isBootcamp ? catID === "101" : catID !== "101"
        )
        .sort(sortCategoriesByMostRecent);
    let result = `<div class="events-status">
            <h2 class="section-title">${i ? "Past" : "Upcoming"} ${
        isBootcamp ? "Bootcamps" : "Events"
    } ${isBootcamp ? `</h1><h3>` : ""} (${eventsStatusCounter(entries)}) ${
        isBootcamp ? "&nbsp;&#x25B6;&#xFE0E;</h3>" : "</h2>"
    }`;
    if (!entries.length) {
        const pageURL = `https://www.eventbrite.com/o/${organizerID}`;
        result += `
            <p>
                There are currently no upcoming events.
                For updates, please follow us on <a href="${pageURL}" target="_blank">Eventbrite</a>
                and <button class="subscribe-autofocus-link" onclick="highlightSubscribe()">join our mailing list</button>.
            </p>`;
    } else {
        result += entries
            .map(([catID, events]) =>
                displayEventsCategory(catID, events, isBootcamp)
            )
            .join("");
    }
    result += "</div>";
    return result;
}

function sortCategoriesByMostRecent(a, b) {
    const [, aEvents] = a,
        [, bEvents] = b,
        aDate = new Date(aEvents[0].start.utc),
        bDate = new Date(bEvents[0].start.utc);
    return bDate.getTime() - aDate.getTime();
}

function displayEventsCategory(catID, events, isBootcamp) {
    const isSIP = catID === "sip",
        catName = categoryIDs[catID] || "SIP Events";
    let result = `<div class="events-category">${
        isBootcamp
            ? ""
            : `<h3 class='category-name'>${catName}<br/>(${events.length}) &nbsp;&#x25B6;&#xFE0E;</h3>`
    }${
        isSIP
            ? `<p>
                    Originally devised as an online series of informal happy hours
                    during COVID-19’s shelter-in-place, SIPs are signature Prova Lab events
                    designed to raise awareness and connect on issues in our community.
                    SIP remains a safe and meaningful space to learn, inspire and support each other.
                </p>`
            : ""
    }
        <div class="events-wrapper">`;
    events.forEach((event) => (result += displayEvent(event)));
    result += "</div></div>";
    return result;
}

function displayEvent(event) {
    const name = event.name.text,
        description = event.description.text,
        { url, start, end } = event,
        utcStart = new Date(start.utc),
        utcEnd = new Date(end.utc),
        link = url ? `<a href="${url}" target="_blank">${name}</a>` : name;
    return `
    <div class="event-info">
        <h4 class="event-name">${link}</h4>
        <p class="date">${datesFormatter([utcStart, utcEnd])}</p>
        <p class="description">${description}</p>
    </div>`;
}

function datesFormatter(dates) {
    const [date1, date2] = dates.map((date) => dateFormatter(date)),
        { date: date1Date, time: date1Time } = date1,
        { date: date2Date, time: date2Time } = date2;
    if (date1Date === date2Date) {
        if (date1Time === date2Time) {
            return date1Date;
        } else {
            return `${date1Date}<br />${date1Time} - ${date2Time}`;
        }
    } else {
        return `${date1Date} ${date1Time} -<br />${date2Time} ${date2Time}`;
    }
}

function dateFormatter(theDate) {
    const m = theDate.getMonth(),
        d = theDate.getDate(),
        y = theDate.getFullYear(),
        hr = theDate.getHours(),
        min = theDate.getMinutes(),
        date = `${months[m]} ${d} ${y}`,
        time = `${hr === 0 ? 12 : hr > 12 ? hr % 12 : hr}${
            min ? `:${("" + min).padStart(2, "0")}` : ""
        }${hr < 12 ? "am" : "pm"}`;
    return {
        date,
        time,
    };
}

function separateUpcomingAndPast(json) {
    const { events } = json,
        upcoming = [],
        past = [];
    events.forEach((event) =>
        event.status === "completed" ? past.push(event) : upcoming.push(event)
    );
    return {
        upcoming,
        past,
    };
}

function separateCategories({ upcoming, past }) {
    const upcomingCategories = {},
        pastCategories = {
            sip: sipEvents,
        };
    separateCategoriesHelper(upcoming, upcomingCategories);
    separateCategoriesHelper(past, pastCategories);
    return {
        upcomingCategories,
        pastCategories,
    };
}

function separateCategoriesHelper(arr, obj) {
    // filter out SIP in past events
    arr.filter((event) =>
        event.name.text.includes("SIP") // only include SIP events from Eventbrite after 6/7/22
            ? new Date(2022, 6, 7).getTime() <
              new Date(event.start.utc).getTime()
            : true
    ).forEach((event) => {
        const catID = event.category_id;
        obj[catID]?.push(event) || (obj[catID] = [event]);
    });
    Object.values(obj).forEach((events) => events.sort(sortByMostRecent));
}

function sortByMostRecent(a, b) {
    const aDate = new Date(a.start.utc),
        bDate = new Date(b.start.utc);
    return bDate.getTime() - aDate.getTime();
}

// async function fetchRecursive(json) {
//     result += JSON.stringify(json);
//     const next = json.pagination?.continuation;
//     next &&
//         (await fetch(
//             `https://www.eventbriteapi.com/v3/users/me/organizations/?continuation=${next}&token=YOUR_TOKEN`
//         )
//             .then((resp) => resp.json())
//             .then((jsonObj) => fetchRecursive(jsonObj)));
// }
