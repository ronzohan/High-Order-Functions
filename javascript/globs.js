//define functions and global variables here...
var siteloc = "http://localhost/High-Order-Functions/";
var scriptloc = "/script/"

 
function fetchValue(operation,val)
{
  $.ajax({
      url: siteloc + scriptloc + "expo.py",
      data: {operation:operation,
      		 val:val
             },
      dataType: 'json',
      success: function (res) {
      		console.log(res);
		$('#output').empty(); //empty the p tag before appending
		$('#output').append('Output: '+res);
		}
    });
}
