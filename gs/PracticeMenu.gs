
function addMenuToUi() {
    SpreadsheetApp.getUi()
        .createMenu('Practice')
        .addItem('Start', 'startPractice')
        .addItem('Stop', 'stopPractice')
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Minutes daily')
            .addItem('Update ', 'updateMinutesDaily'))
        .addToUi();
}

function startPractice() {
    PracticeLog.startPractice();

    SpreadsheetApp.getActive().toast('Practice started');
}


function stopPractice() {
    PracticeLog.stopPractice();

    SpreadsheetApp.getActive().toast('Practice stopped');
}

function updateMinutesDaily() {
    MinutesDaily.update();

    SpreadsheetApp.getActive().toast('Minutes daily updated');
}