function validateAndFetchFormData() {
    var studentIdVar = $("#studentId").val();
    if (studentIdVar === "") {
        alert("Student Roll-No Required Value");
        $("#studentId").focus();
        return "";
    }
    var studentNameVar = $("#studentName").val();
    if (studentNameVar === "") {
        alert("Student Name is Required Value");
        $("#studentName").focus();
        return "";
    }
    var studentClassVar = $("#studentClass").val();
    if (studentClassVar === "") {
        alert("Student Class is Required Value");
        $("#studentClass").focus();
        return "";
    }
    var studentDOBVar = $("#studentDOB").val();
    if (studentDOBVar === "") {
        alert("Student Birth-Date is Required Value");
        $("studentDOB").focus();
        return "";
    }
    var studentAddressVar = $("#studentAddress").val();
    if (studentAddressVar === "") {
        alert("Student Address is Required Value");
        $("#studentAddress").focus();
        return "";
    }
    var studentEnrollDateVar = $("studentEnrollDate").val();
    if (studentEnrollDateVar === "") {
        alert("Student Enrollment-Date is Required Value");
        $("studentEnrollDate").focus();
        return "";
    }
    var jsonObj = {
        studentId: studentIdVar,
        studentName: studentNameVar,
        studentClass: studentClassVar,
        studentDOB: studentDOBVar,
        studentAddress: studentAddressVar,
        studentEnrollDate: studentEnrollDateVar,
    };
    return JSON.stringify(jsonObj);
}

function getStudentIdAsJsonObj() {
    var studentId = $("#studentId").val();
    var jsonStr = {
        id: studentId,
    };
    return JSON.stringify(jsonStr);
}

function getStudent() {
    var studentIdJsonObj = getStudentIdAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(
            connToken,
            studentDBName,
            studentRelationName,
            studentIdJsonObj
            );
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(
            getRequest,
            jpdbBaseURL,
            jpdbURL
            );
    jQuery.ajaxSetup({async: true});
    if (resJsonObj.status === 400) {
        $("#saveButton").prop("disabled", false);
        $("#resetButton").prop("disabled", false);
        $("#studentName").focus();
    } else if (resJsonObj.status === 200) {
        $("#studentId").prop("disabled", true);
        fillData(resJsonObj);
        $("#changeButton").prop("disabled", false);
        $("#resetButton").prop("disabled", false);
        $("#studentName").focus();
    }
}

function resetForm() {
    $("#studentId").val("");
    $("#studentName").val("");
    $("#studentClass").val("");
    $("#studentDOB").val("");
    $("#studentAddress").val("");
    $("#studentEnrollDate").val("");
    $("#studentId").focus();
}

function changeData() {
    $("#changeButton").prop("disabled", true);
    var jsonChange = validateAndFetchFormData();
    var updateRequest = createUPDATERecordRequest(
            ConnToken,
            jsonChange,
            studentDBName,
            studentRelationName,
            localStorage.getItem("recno")
            );
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(
            updateRequest.jpdBaseURL,
            jpdbIML
            );
    jQuery.ajaxSetup({async: true});
    console.log(resJsonObj);
    resetForm();
    $("#studentId").focus();
}

function saveData() {
    var jsonStr = validateAndFetchFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest(
            "90931951|-31949300496345898|90960417",
            jsonStr,
            "SCHOOL-DB",
            "STUDENT-TABLE"
            );

    alert(putReqStr);

    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(
            putReqStr,
            "http://api.login2explore.com:5577",
            "/api/iml"
            );
    jQuery.ajaxSetup({async: true});

    alert(JSON.stringify(resultObj));
    resetForm();
}
