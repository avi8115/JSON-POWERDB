# Login2Xplore


# Student Enrollment Form (Micro project Code)

This is a student registration form that saves the user's information in JSONPowerDB. Both serverless technology and REST APIs are supported. A student's roll number can be used to add or update them. The roll number is automatically verified on this form, and with the use of an API, the data submitted into other input fields is also verified so that the user can change as necessary. AJAX requests are used by the programme to enable quick and seamless interaction. Data of every kind, including numbers, strings, dates, and more, can be saved.

## Benefits of using JsonPowerDB
- JsonPowerDB is a high performance, light weight, ajax enabled, serverless, simple to use, real-time database.
- It is built on top of one of the fastest and real-time data indexing engine - PowerIndeX.
- It is low level (raw) form of data and is also human readable.
- It helps developers in faster coding, in-turn reduces development cost.



# Release History

## JsonPowerDB

### Version: 1.0

#### Execute API

```javascript
var baseUrl = "http://api.login2explore.com:5577";
function executeCommand(reqString, apiEndPointUrl) {
    var url = baseUrl + apiEndPointUrl;
    var jsonObj;
    $.post(url, reqString, function (result) {
        jsonObj = JSON.parse(result);
    }).fail(function (result) {
        var dataJsonObj = result.responseText;
        jsonObj = JSON.parse(dataJsonObj);
    });
    return jsonObj;
}
```
## Create a PUT Request String

```javascript
function createPUTRequest(connToken, jsonObj, dbName, relName) {
    var putRequest = "{\n"
            + "\"token\" : \""
            + connToken
            + "\","
            + "\"dbName\": \""
            + dbName
            + "\",\n" + "\"cmd\" : \"PUT\",\n"
            + "\"rel\" : \""
            + relName + "\","
            + "\"jsonStr\": \n"
            + jsonObj
            + "\n"
            + "}";
    return putRequest;
}

```
## Table of Contents

- Title of the Project
- Description
- Benefits of using JsonPowerDB
- Release History
- Scope of functionalities
- Examples of use
- Project status
- Sources
- Other information

## Scope of functionalities

This project provides a web-based interface for student enrollment. The functionalities include:

- Data Validation: The form validates the data to ensure no fields are left empty before submission.
- Data Storage: The data entered in the form is stored in the STUDENT-TABLE relation of the SCHOOL-DB database.
- Data Retrieval: If a student’s Roll-No is entered and it exists in the database, the corresponding student’s data is retrieved and displayed in the form.
- Data Update: If a student’s data is retrieved, it can be updated and the updated data is saved back to the database.
- Form Reset: The form can be reset to its initial state at any time.

## Illustrations:
**Screenshots of the Form**: 

![image](https://github.com/avi8115/JSON-POWERDB/assets/87919237/95a53de4-e0db-4bca-87eb-3f78dc20b3df)


**Database Schema** : 
![image](https://github.com/avi8115/JSON-POWERDB/assets/87919237/e0878415-b37e-4fc9-9576-58a322e22218)


## Examples of use

1. **Data Entry**: Navigate to the Student Enrollment Form on the webpage. Enter the student's Roll-No in the corresponding field. If the Roll-No does not exist in the database, you can enter the rest of the student's details in the form.

2. **Data Validation**: As you fill out the form, the data is validated to ensure no fields are left empty. If a field is left empty, an alert will be displayed prompting you to enter a value.

3. **Data Storage**: After filling out the form, click the 'Save' button to store the student's data in the database. An alert will be displayed with the request string sent to the database.

4. **Data Retrieval**: If you enter a Roll-No that exists in the database, the corresponding student's data will be retrieved and displayed in the form.

5. **Data Update**: If a student's data is retrieved, you can update the data by changing the values in the form fields and clicking the 'Change' button. The updated data will be saved back to the database.

6. **Form Reset**: At any time, you can reset the form to its initial state by clicking the 'Reset' button.


## Project status

The project is complete and is working smoothly. All functionalities have been implemented and thoroughly tested. The form correctly handles data entry, validation, storage, retrieval, update, and reset operations. The project is ready for deployment or further enhancements if required.

## Sources

- JsonPowerDB: For the database system used in this project.
- Bootstrap: For the CSS framework used to style the web interface.
- jQuery: For simplifying JavaScript operations.


## Other information

- Acknowledgments: 
  I am very thankful to the organization Login2explore for giving me oppourtunity to learn about this advance DB.

- Contact Information:
 This is my email avinashku648kk@gmail.com if you want to contribute feel free to mail me.

>JsonPowerDB
