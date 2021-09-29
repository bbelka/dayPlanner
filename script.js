var now = moment()
var divValue
var divContent

//displays date at top
function displayDate() {
    var eDisplayMoment = document.getElementById('currentDay');
    eDisplayMoment.innerHTML = now.format('dddd, MMMM D, YYYY');
}

//makes appointment div editable
//enables save button
//continuously saves to localStorage on keyup
function divClicked() {
    $(this).attr("contenteditable", "true");
    $(this).next().removeAtdtr("disabled");
    divValue = $(this).attr('value');
    $(this).keyup(function () {
        divContent = $(this).text();
        localStorage.setItem(divValue, divContent);
    });
};

//saves appointment content
//disalbles editability of appointment div until clicked upon
//stores data to localStorage
function saveClicked() {
    divContent = $(this).prev().text();
    $(this).prev().removeAttr("contenteditable");
    localStorage.setItem(divValue, divContent);
};

//porvides color coding of time periods
//refreshes color coding every 60 seconds
function refresh() {
    $.each($(".description"), function () {
        var hour = now.format("H");
        var timeValue = $(this).attr('value');
        if (parseInt(timeValue) < parseInt(hour)) {
            $(this).addClass('past');
        }
        else if (timeValue === hour) {
            $(this).addClass('present');
        }
        else if (parseInt(timeValue) > parseInt(hour)) {
            $(this).addClass('future');
        };
    });
    setTimeout(refresh, 60000);
};

refresh();
displayDate();

//appointment div enabled on click
$(".description").click(divClicked);

//save button click event. Only enalbed when something has been added to corresponding appointment div.
$(".saveBtn").click(saveClicked);

//disables save buttons on load until something is entered in corresponding entry div.
//loads previous inputs
$(document).ready(function () {
    $(".saveBtn").attr('disabled', 'disabled')
    $.each($(".description"), function () {
        var timeValue = $(this).attr('value');
        console.log(timeValue);
        var prevAppts = localStorage.getItem(timeValue);
        console.log(prevAppts);
        $(this).attr("contenteditable", "true");
        $(this).append(prevAppts);
        $(this).prev().removeAttr("contenteditable");
    })
});