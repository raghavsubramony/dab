<?php
/**
 * Returns the list of policies.
 */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$host    = "localhost:3306";
                $user    = "root";
                $pass    = "root";
                $db_name = "experian_webautomationui";
                
				
                //create connection
                $connection = mysqli_connect($host, $user, $pass, $db_name);
                
                //test if connection failed
                if(mysqli_connect_errno()){
                    die("connection failed: "
                        . mysqli_connect_error()
                        . " (" . mysqli_connect_errno()
                        . ")");
                }


$run = [];
$sql = "SELECT * FROM experian_webautomationui.run r 
join experian_webautomationui.testcase_execution e on e.run_run_id = r.run_id 
inner join experian_webautomationui.testcase_master m on m.id = e.testcase_testcase_id 
where r.test_run_on >= CURDATE() order by r.run_id desc ";

if($result = mysqli_query($connection,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $run[$i]['testcase_name']    = $row['testcase_name'];
    $run[$i]['project_id'] = $row['project_id'];
    $runid[$i]['testcase_execution_status'] = $row['testcase_execution_status'];
    $i++;
  }

  echo json_encode($run);
}
else
{
  http_response_code(404);
}
// Check connection
/* if($connection === false){
  die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Attempt select query execution
$sql = "SELECT run_id,project_id FROM experian_webautomationui.run";
if($result = mysqli_query($connection, $sql)){
  if(mysqli_num_rows($result) > 0){
      echo "<table>";
          echo "<tr>";
              echo "<th>id</th>";
              echo "<th>Project ID</th>";
              /*echo "<th>last_name</th>";
              echo "<th>email</th>";
          echo "</tr>";
      while($row = mysqli_fetch_array($result)){
          echo "<tr>";
              echo "<td>" . $row['run_id'] . "</td>";
              echo "<td>" . $row['project_id'] . "</td>";
              /*echo "<td>" . $row['last_name'] . "</td>";
              echo "<td>" . $row['email'] . "</td>";
          echo "</tr>";
      }
      echo "</table>";
      // Free result set
      mysqli_free_result($result);
  } else{
      echo "No records matching your query were found.";
  }
} else{
  echo "ERROR: Could not able to execute $sql. " . mysqli_error($connection);
} 
*/

// Close connection
mysqli_close($connection);
?>