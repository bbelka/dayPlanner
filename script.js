var now = moment()
var divValue
var saveValue
var desc8
var desc9
var desc10
var desc11
var desc12
var desc13
var desc14
var desc15
var desc16
var desc17
var divContent



$(document).ready(function () {
    $(".saveBtn").attr('disabled', 'disabled')
    console.log($(".saveBtn"));
});

function displayDate() {
    var eDisplayMoment = document.getElementById('currentDay');
    eDisplayMoment.innerHTML = now.format('dddd, MMMM D, YYYY');
}
displayDate();

function divClicked() {
    $(this).attr("contenteditable", "true");
    $(this).next().removeAttr("disabled");
    divValue = $(this).attr('value');
    divContent = $(this).text();
    console.log(divContent);
    
};

function saveClicked() {
    saveValue = ($(this).attr('value'))
    console.log(saveValue);
    divContent = $(this).prev().text();
    $(this).prev().removeAttr("contenteditable");
    localStorage.setItem(divValue,divContent);
    // if (value === divValue) {
        
    //     console.log(divContent);
    // }
};

$(".saveBtn").click(saveClicked);
//     if 




//     $.each($(".description"), function () {
//         // console.log(this)
//         var desc = this
//         var hour = now.format("H");
//         var descID = (this.id);
//         console.log(descID);
//         // if (descID < hour) {
//         //     desc.addClass('past');
//         // }

//     });
//     setTimeout(refresh, 60000);
// };
// refresh();

$(".description").click(divClicked);
