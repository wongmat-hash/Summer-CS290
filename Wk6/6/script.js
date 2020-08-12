//this function is the delete function provided in the assignment
function deleteRow(tableID,currentRow)
{
  try
    {
      var table = document.getElementById(tableID);
      var rowCount = table.rows.length;
      for (var i = 0; i < rowCount; i++)
      {
        var row = table.rows[i];
        if (row==currentRow.parentNode.parentNode)
        {
          if (rowCount <= 3)
          {
            alert("Cannot delete all the rows.");
            break;
          }
          table.deleteRow(i);
          rowCount--;
          i--;
        }
      }
    } catch (e)
    {
      alert(e);
    }
//getValues();
}

//this is the function to edit the input
function edit_row(no)
{
  document.getElementById("edit_button"+no).style.display="none";
  document.getElementById("save_button"+no).style.display="block";
  var name=document.getElementById("name_row"+no);
  var reps=document.getElementById("reps_row"+no);
  var weight=document.getElementById("weight_row"+no);
  var date=document.getElementById("date_row"+no);
  var unit=document.getElementById("unit_row"+no);
  var name_data=name.innerHTML;
  var reps_data=reps.innerHTML;
  var weight_data=weight.innerHTML;
  var date_data=date.innerHTML;
  var unit_data=unit.innerHTML;
  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
  reps.innerHTML="<input type='text' id='reps_text"+no+"' value='"+reps_data+"'>";
  weight.innerHTML="<input type='text' id='weight_text"+no+"' value='"+weight_data+"'>";
  date.innerHTML="<input type='text' id='date_text"+no+"' value='"+date_data+"'>";
  unit.innerHTML="<input type='text' id='unit_text"+no+"' value='"+unit_data+"'>";
}

//this function will save rows
function save_row(no)
{
  var name_val=document.getElementById("name_text"+no).value;
  var reps_val=document.getElementById("reps_text"+no).value;
  var weight_val=document.getElementById("weight_text"+no).value;
  var date_val=document.getElementById("date_text"+no).value;
  var unit_val=document.getElementById("unit_text"+no).value;
  document.getElementById("name_row"+no).innerHTML=name_val;
  document.getElementById("reps_row"+no).innerHTML=reps_val;
  document.getElementById("weight_row"+no).innerHTML=weight_val;
  document.getElementById("date_row"+no).innerHTML=date_val;
  document.getElementById("unit_row"+no).innerHTML=unit_val;
  document.getElementById("edit_button"+no).style.display="block";
  document.getElementById("save_button"+no).style.display="none";
}

//this function will add rows
function add_row()
{
  var new_name=document.getElementById("new_name").value;
  var new_reps=document.getElementById("new_reps").value;
  var new_weight=document.getElementById("new_weight").value;
  var new_date=document.getElementById("new_date").value;
  var new_unit=document.getElementById("new_unit").value;
  var table=document.getElementById("dataTable");
  var table_len=(table.rows.length)-1;
  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='reps_row"+table_len+"'>"+new_reps+"</td><td id='weight_row"+table_len+"'>"+new_weight+"</td><td id='date_row"+table_len+"'>"+new_date+"</td><td id='unit_row"+table_len+"'>"+new_unit+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' style='display: none;' class='save' onclick='save_row("+table_len+")'> </td><td><input type='button' class='delete' value='Delete' onclick=deleteRow('dataTable',this)></td></tr>";
  document.getElementById("new_name").value="";
  document.getElementById("new_reps").value="";
  document.getElementById("new_weight").value="";
  document.getElementById("new_date").value="";
  document.getElementById("new_unit").value="";
}

//works cited: https://github.com/mfry1/CS290-database-ui/tree/master/public/javascript used to help with the JS to finish thet able adding 
