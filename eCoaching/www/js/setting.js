var  db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
		
        db.transaction(populateDB, errorCB, successCB);

    function populateDB(tx) {
   tx.executeSql('SELECT * FROM Email', [], querySuccess, errorCB);

	}

 function updateDB(tx) {
     var bla = $('#txtEmail').val();
	
  tx.executeSql('UPDATE Email SET data = "'+bla+'" where id = 1');
 alert("Email has been updated");
	}

   

    // Query the success callback
    //
    function querySuccess(tx, results) {
        var len = results.rows.length;
       if(len>0){
		 $('#txtEmail').val(results.rows.item(0).data);
		   }
		
    }

    // Transaction error callback
    //
    function errorCB(err) {
  
    }



    // Transaction success callback
    //
    function successCB() {
  
    }

    function updateEmail() {
        db.transaction(updateDB, errorCB, successCB);

    }
    // PhoneGap is ready
    //
  
   
