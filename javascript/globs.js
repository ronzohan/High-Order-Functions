//define functions and global variables here...
var siteloc = "http://localhost/High-Order-Functions/";
var scriptloc = "/script/"

 
function fetchValue(exponential,val)
{
  $.ajax({
      url: siteloc + scriptloc + "expo.py",
      data: {exponential:exponential,
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
