
module.exports = getDate;

function getDate() {
    var date = new Date();
    
    var options = {
        weekday:'long',
        day:'numeric',
        month:'long'
    };

    var day = date.toLocaleDateString("en-US", options);
    return day;
}