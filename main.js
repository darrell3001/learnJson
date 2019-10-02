var myList = [
    { "name": "abc", "age": 50 },            // <-item   i=0
    { "age": "25", "hobby": "swimming" },
    { "name": "xyz", "hobby": "programming" }
  ];

// Builds the HTML Table out of myList.
// get called by onLoad of the page
// <body onLoad="buildHtmlTable('#excelDataTable')"> */}
// it passes a jquery selector in (an html element id)
function buildHtmlTable(selector) {
    var columns = addAllColumnHeaders(myList, selector);        // call the routine that will return an arrray of unique column names
    
    $.each(myList, function(i, item) {              // cycle thru each item in myList. myList is an array, thus we can expect 2 parms to be passed; an index and an item
        var row$ = $('<tr></tr>');                  // create an jq element with <tr> tag 
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {     // do a for loop to increment to each column name in the array retuned from above     
            var cellValue = item[columns[colIndex]];        // get the value from the item by using the column name as the key for the list
            if (cellValue == null) cellValue = "";          // if the value is null, then just set the cellValue = ""
            // console.log("cellValue = " + cellValue);
            row$.append($('<td></td>').html(cellValue));    // create a <td> tag and imbed the value into the <tr> element we created above
        }

        $(selector).append(row$);             // append the fully populated rows$ element into the selector from the DOM
    })
}

    
// var myList = [
//     { "name": "abc", "age": 50 },  // 
//     { "age": "25", "hobby": "swimming" },
//     { "name": "xyz", "hobby": "programming" }
//   ];
// 
// Build an array with a list of fields
// The fully populated array will look like this:
// 
// var colArray = ["name" , // <-colName j=0
//                 "age" , 
//                 "hobby"];

function addAllColumnHeaders(myList, selector) {
    var columnSet = [];                 // initialize columnSet to be an empty array
    var headerTr$ = $('<tr></tr>');     // initialize headerTr$ to be an empty <tr> jquery element
    
    $.each(myList, function(i, item) {      // cycle thru myList. Its an array so we can expect an index and the item
        $.each(item, function(key) {        // cycle thru each item element. Its a list so we can expect just a key
            if ($.inArray(key, columnSet) == -1) {  // check to see if the columnSet array already contains this key
                columnSet.push(key);                // if no, then push the key into the columnSet array
                headerTr$.append($('<th></th>').html(key));     // also, put <th> tag around key and append the key to the headerTr$ element.
                                                                // <tr><th>name</th><th>age</th><th>hobbies</th></tr>
            }
        })
    })
    
    $(selector).append(headerTr$);          // once we ar done with all the keys, append headerTr$ to the selector in the DOM
                                            // selector = <table id="excelDataTable" border="1"><tr><th>name</th><th>age</th><th>hobbies</th></tr></table>

    return columnSet;                       // return the columnSet array to the caller
}



//#region
// // <table id="excelDataTable" border="1">
// //     <tr>
// //         <th>name</th>
// //         <th>age</th>
// //         <th>hobby</th>
// //     </tr>
// //     <tr>
// //         <td>abc</td>
// //         <td>50</td>
// //         <td></td>
// //     </tr>
// //     <tr>
// //         <td></td>
// //         <td>25</td>
// //         <td>swimming</td>
// //     </tr>
// //     <tr>
// //         <td>xyz</td>
// //         <td></td>
// //         <td>programming</td>
// //         </tr>
// // </table>
//#endregion

//#endregion testcode



