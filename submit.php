<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');
date_default_timezone_set('Asia/Manila');

class Database
{
  private $conn;

  public function __construct($host, $user, $password, $database)
  {
    $this->conn = new mysqli($host, $user, $password, $database);
    if ($this->conn->connect_error) {
      die("Connection failed: " . $this->conn->connect_error);
    }
  }

  public function userLogin($username)
  {
    $query = "SELECT * FROM user WHERE username=?";
    $stmt = $this->conn->prepare($query);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_assoc();
    $stmt->close();
    return $result;
  }

  public function userRegister($username, $password, $firstname, $lastname, $phonenumber, $role)
  {
    $query = "INSERT INTO `user`(`username`, `password`, `number`, `role`, `firstname`, `lastname`) VALUES (?,?,?,?,?,?)";
    $stmt = $this->conn->prepare($query);
    $stmt->bind_param("ssiiss", $username, $password, $phonenumber, $role, $firstname, $lastname);
    $stmt->execute();
    $user_id = $this->conn->insert_id;
    $stmt->close();
    return $user_id;
  }

  public function insertCustomerDetail($firstname, $lastname, $phonenumber,  $address)
  {
    $query = "INSERT INTO customer_detail (first_name, last_name, phone_number, address) VALUES (?, ?, ?, ?)";
    $stmt = $this->conn->prepare($query);
    $stmt->bind_param("ssss", $firstname, $lastname, $phonenumber, $address);
    $stmt->execute();
    $result = $stmt->insert_id;
    $stmt->close();
    return $result;
  }

  public function insertTransaction($cd_id, $status_id, $user_id, $order_deadline, $note, $unixNow, $discount)
  {
    $query = "INSERT INTO transaction_detail ( `customer_id`,`status`,`user_id`,`deadline`,`note`, `order_date`, `discount`) VALUES (?,?,?,?,?,?,?)";
    $stmt = $this->conn->prepare($query);
    $stmt->bind_param("iiiisii", $cd_id, $status_id, $user_id, $order_deadline, $note, $unixNow, $discount);
    $stmt->execute();
    $result = $stmt->insert_id;
    $stmt->close();
    return $result;
  }

  public function insertOrder($InventoryID, $quantity, $td_id, $status, $total, $designName, $price)
  {
    $query = "INSERT INTO orders (`inventory_id`, `quantity`, `transaction_id`, `status`, `total`, `price`, `design_name`) VALUES (?,?,?,?,?,?,?)";
    $stmt = $this->conn->prepare($query);
    $stmt->bind_param("iiiiiis", $InventoryID, $quantity, $td_id, $status, $total, $price, $designName);
    $stmt->execute();
    $result = $stmt->insert_id;
    $stmt->close();
    return $result;
  }

  public function getTransaction()
  {
    $query = "SELECT 
        CONCAT(COALESCE(cd.first_name, ''), ' ', COALESCE(cd.last_name, '')) AS fullname, 
        CONCAT(u.firstname, ' ', u.lastname) AS created_by,
        DATE_FORMAT(FROM_UNIXTIME(td.deadline), '%M %d, %Y') AS deadline,
        DATE_FORMAT(FROM_UNIXTIME(td.order_date), '%M %d, %Y') AS order_date,
        td.td_id AS transaction_id,
        s.status_name AS status,
        td.discount as discount

        FROM transaction_detail td
        JOIN customer_detail cd ON cd.cd_id = td.customer_id
        JOIN user u ON u.user_id = td.user_id
        JOIN status s ON s.status_id = td.status
        ORDER BY td.deadline ASC;";



    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $result;
  }

  public function getCustomers()
  {
    $query = "SELECT *
            FROM customer_detail
            WHERE phone_number IS NOT NULL AND phone_number != ''
            GROUP BY phone_number";

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $result;
  }

  public function insertInventory($column, $value)
  {
    $column = implode(",", $column);
    $value = implode(",", $value);

    $query = "INSERT INTO inventory ($column) VALUES ($value)";
    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $result = $stmt->insert_id;
    $stmt->close();
    return $result;
  }

  public function getLogs()
  {
    $query = "SELECT 
                l.id AS id, 
                l.detail AS detail, 
                l.inventory_id AS inventory_id, 
                COALESCE(b.brand_name, 'no brand') AS brand, 
                COALESCE(t.type_name, 'no type') AS type, 
                COALESCE(c.color_name, 'no color') AS color, 
                COALESCE(s.size_name, 'no size') AS size, 
                l.new_value AS new_value, 
                l.old_value AS old_value, 
                l.changed_value AS changed_value, 
                DATE_FORMAT(FROM_UNIXTIME(l.timestamp), '%h:%i %p') AS time, 
                DATE_FORMAT(FROM_UNIXTIME(l.timestamp), '%M %d %Y') AS date,
                l.remarks AS remarks
              FROM logs l 
              INNER JOIN inventory i ON l.inventory_id = i.inventory_id 
              INNER JOIN brand b ON i.brand = b.brand_id 
              INNER JOIN type t ON i.type = t.type_id 
              INNER JOIN color c ON i.color = c.color_id 
              INNER JOIN size s ON i.size = s.size_id 
              ORDER BY l.timestamp DESC;";

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $result;
  }

  public function getDeadlineToday()
  {
    $query = "SELECT COUNT(td_id) AS transactionDeadline
                FROM transaction_detail
                WHERE DATE_FORMAT(FROM_UNIXTIME(deadline), '%Y-%m-%d') = CURDATE()
                AND status IN (1,2)";

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_object();
    $stmt->close();
    return $result;
  }
  public function getWeeklyOrders($day)
  {
    $query = "select 
                date(from_unixtime(td.order_date)) as order_date, 
                sum(o.quantity) as quantity,
                WEEKDAY(DATE(FROM_UNIXTIME(td.order_date))) as weekday

                from transaction_detail td
                join orders o on td.td_id = o.transaction_id
                where week(date(from_unixtime(td.order_date))) = week('$day')
                group by DATE(FROM_UNIXTIME(td.order_date))
                order by order_date";

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $result;
  }
  public function getMonthOrder($year)
  {
    $query = "select 
                date(from_unixtime(td.order_date)) as order_date, 
                sum(o.quantity) as quantity,
                monthname(DATE(FROM_UNIXTIME(td.order_date))) as monthname,
                month(DATE(FROM_UNIXTIME(td.order_date))) as month

                from transaction_detail td
                join orders o on td.td_id = o.transaction_id
                where year(date(from_unixtime(td.order_date))) = $year
                group by monthname(DATE(FROM_UNIXTIME(td.order_date)))
                order by order_date";

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $result;
  }

  public function topSales()
  {
    $query = "select 
				sum(o.quantity) as quantity,
				i.inventory_id as inventory_id,
                concat(b.brand_name, ' ', t.type_name,' ', c.color_name,' ', s.size_name) as inventory_name
                
                from orders o
                join inventory i on o.inventory_id = i.inventory_id
                join brand b on i.brand = b.brand_id
                join type t on i.type = t.type_id
                join color c on i.color = c.color_id
                join size s on i.size = s.size_id
                group by i.inventory_id
                order by quantity DESC limit 5;";

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $result;
  }
  public function getOrdersFinishedToday()
  {
    $query = "SELECT sum(o.quantity) as quantity
                FROM transaction_detail td
                join orders o on td.td_id = o.transaction_id
                WHERE DATE(last_updated) = CURDATE() and o.status = 3";

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_object();
    $stmt->close();
    return $result;
  }
  public function getOrdersToday()
  {
    $query = "SELECT SUM(o.quantity) AS quantity
                FROM transaction_detail td
                JOIN orders o ON td.td_id = o.transaction_id
                WHERE DATE(FROM_UNIXTIME(td.order_date)) = CURDATE();
                ";

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_object();
    $stmt->close();
    return $result;
  }

  public function getTasksToday()
  {
    $query = "SELECT count(td_id) AS transactions
                FROM transaction_detail
                WHERE status in (1,2)";

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_object();
    $stmt->close();
    return $result;
  }


  public function getInventory()
  {
    $query = "SELECT 
        i.inventory_id AS id, 
        b.brand_name AS brand, 
        t.type_name AS type, 
        c.color_name AS color, 
        s.size_name AS size, 
        i.qty AS qty
        FROM inventory i 
        INNER JOIN brand b ON i.brand = b.brand_id 
        INNER JOIN type t ON i.type = t.type_id 
        INNER JOIN color c ON i.color = c.color_id 
        INNER JOIN size s ON i.size = s.size_id 
        WHERE i.qty > 0
        ORDER BY i.inventory_id DESC";

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $result;
  }

  public function getAllInventory()
  {
    $query = "SELECT 
                i.inventory_id AS id,
                COALESCE(b.brand_name, null) AS brand, 
                COALESCE(t.type_name, null) AS type,
                COALESCE(c.color_name, null) AS color,
                COALESCE(s.size_name, null) AS size,
                i.qty AS qty

                FROM inventory i
                LEFT JOIN brand b ON i.brand = b.brand_id
                LEFT JOIN type t ON i.type = t.type_id
                LEFT JOIN color c ON i.color = c.color_id
                LEFT JOIN size s ON i.size = s.size_id
                ORDER BY i.inventory_id DESC";

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $result;
  }

  public function existingInventory($brand, $type, $color, $size,)
  {
    $query = "SELECT inventory_id, qty FROM inventory where brand = ? and type = ? and color = ? and size = ?";
    $stmt = $this->conn->prepare($query);
    $stmt->bind_param("iiii", $brand, $type, $color, $size);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $result;
  }

  public function updateInventory($id, $value)
  {
    try {
      $query = "UPDATE inventory SET qty = qty + ? WHERE inventory_id = ?";
      $stmt = $this->conn->prepare($query);
      $stmt->bind_param("ii", $value, $id);
      $stmt->execute();
      $result = $stmt->affected_rows;
      $stmt->close();
      return $result;
    } catch (Exception $e) {
      return ($e);
    }
  }

  public function returnItem($id, $value)
  {
    try {
      $query = "UPDATE inventory SET qty = qty - ? WHERE inventory_id = ?";
      $stmt = $this->conn->prepare($query);
      $stmt->bind_param("ii", $value, $id);
      $stmt->execute();
      $result = $stmt->affected_rows;
      $stmt->close();
      return $result;
    } catch (Exception $e) {
      return ($e);
    }
  }

  public function getAll($table)
  {
    $query = "SELECT * FROM `$table`";
    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $result;
  }

  public function insertOption($table, $value)
  {
    $column = $table . "_name";
    $query = "insert into `$table` (`$column`) values (?)";
    $stmt = $this->conn->prepare($query);
    $stmt->bind_param("s", $value);
    $stmt->execute();
    $result = $stmt->insert_id;
    $stmt->close();
    $this->conn->commit();
    return $result;
  }

  public function insertColor($value, $hex)
  {
    $query = "insert into color (`color_name`, `hex` ) values (?, ?)";
    $stmt = $this->conn->prepare($query);
    $stmt->bind_param("ss", $value, $hex);
    $stmt->execute();
    $result = $stmt->insert_id;
    $stmt->close();
    $this->conn->commit();
    return $result;
  }

  public function deleteRowWithID($table, $column, $id)
  {
    $query = "delete FROM `$table` where `$column` = ?";
    $stmt = $this->conn->prepare($query);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->affected_rows;
    $stmt->close();
    return $result;
  }

  public function insertPrice($value, $id)
  {
    $query = "update inventory set price = ? where inventory_id = ?";
    $stmt = $this->conn->prepare($query);
    $stmt->bind_param('ii', $value, $id);
    $stmt->execute();
    $result = $stmt->affected_rows;
    $stmt->close();
    return $result;
  }

  public function selectInventoryWithID($id)
  {
    $query = "SELECT * FROM inventory where inventory_id = ?";
    $stmt = $this->conn->prepare($query);
    $stmt->bind_param('i', $id);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $result;
  }

  public function selectCustomerWithNumber($phonenumber)
  {
    $query = "SELECT * FROM customer_detail where phone_number = ?";
    $stmt = $this->conn->prepare($query);
    $stmt->bind_param('s', $phonenumber);
    $stmt->execute();
    $data = $stmt->get_result();
    $result = $data->fetch_object();
    $stmt->close();
    return $result;
  }

  public function fetchCustomerOrder($id)
  {
    $query = "SELECT
        CONCAT(COALESCE(cd.first_name, ''), ' ', COALESCE(cd.last_name, '')) AS fullname, 
        COALESCE(cd.phone_number, '') AS phonenumber,
        COALESCE(cd.address, '') AS address,
        td.td_id AS transaction_id,
        std.status_name AS transactionStatus,
        DATE_FORMAT(FROM_UNIXTIME(td.deadline), '%M %d, %Y') as deadline,
        DATE_FORMAT(FROM_UNIXTIME(td.order_date), '%M %d, %Y') AS orderDate,
        td.note AS note,
        td.subTotal ,
        td.discount ,
        td.grand_total ,
        o.order_id as orderID,
        o.quantity as quantity,
        os.status_name as orderStatus,
        o.total as total,
        o.design_name as designName,
        b.brand_name as brand,
        t.type_name as type,
        c.color_name as color,
        s.size_name as size,
        o.inventory_id as inventoryID
        
        FROM orders o
        join inventory i on i.inventory_id = o.inventory_id
        join transaction_detail td on td.td_id = o.transaction_id
        join status std on std.status_id = td.status
		join status os  on os.status_id  = o.status
        join brand b on b.brand_id = i.brand
        join type t on t.type_id = i.type
        join color c on c.color_id = i.color
        join size s on s.size_id = i.size
        join customer_detail cd on cd.cd_id = td.customer_id
        where td_id = ?";

    $stmt = $this->conn->prepare($query);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $result;
  }

  function updateStatus($id, $table, $status)
  {
    if ($table == "orders") {
      $query = "update orders set status = ? where order_id = ?";
      $stmt = $this->conn->prepare($query);
      $stmt->bind_param("ii", $status, $id);
      $stmt->execute();
      $result = $stmt->affected_rows;
      $stmt->close();
      return $result;
    }
    if ($table == "transaction_detail") {
      $query = "update transaction_detail set status = ? where td_id = ?";
      $stmt = $this->conn->prepare($query);
      $stmt->bind_param("ii", $status, $id);
      $stmt->execute();
      $result = $stmt->affected_rows;
      $stmt->close();
      return $result;
    }
  }

  function checkStatus()
  {
    $query = "SELECT * FROM transaction_detail where status = 1 or status = 2";
    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    return $result;
  }

  function getSubTableID($table, $name)
  {
    $id = $table . "_id";
    $colname = $table . "_name";
    $query = "SELECT `$id` FROM `$table` where `$colname` = ?";
    $stmt = $this->conn->prepare($query);
    $stmt->bind_param("s", $name);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $result;
  }

  function finishOrder($id)
  {
    $query = "UPDATE transaction_detail SET status = 3 WHERE td_id = ?";
    $stmt = $this->conn->prepare($query);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->affected_rows;

    return $result;
  }

  function selectCustomerWithID($id)
  {

    $query = "SELECT * FROM customer_detail WHERE cd_id = ?";
    $stmt = $this->conn->prepare($query);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $data = $stmt->get_result();
    $result = $data->fetch_object();

    return $result;
  }

  function sendFinishOrder($message, $phonenumber)
  {

    $recipient = cleanPhoneNumber($phonenumber);

    $BASE_URL = "https://api.textbee.dev/api/v1";
    $API_KEY = "f79ea1de-a93f-454d-a2c1-c5548a2d9ecf";
    $DEVICE_ID = "688f88c86cd203ecb5910f3a";


    $url = $BASE_URL . "/gateway/devices/" . $DEVICE_ID . "/send-sms";

    $data = [
      "recipients" => [$recipient],
      "message" => $message
    ];

    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
      "Content-Type: application/json",
      "x-api-key: $API_KEY"
    ]);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

    $response = curl_exec($ch);

    if (curl_errno($ch)) {
      echo "cURL Error: " . curl_error($ch);
    } else {
      echo "Response: " . $response;
    }

    curl_close($ch);

    return $response;
  }

  public function getInventoryID($whereclause)
  {
    $whereclause = implode(" AND ", $whereclause);
    $query = "SELECT inventory_id FROM `inventory` WHERE $whereclause";
    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $data = $stmt->get_result();
    $result = $data->fetch_object();

    return $result;
  }

  public function selectCustomFetchAll($select, $from, $whereclause)
  {
    $select = implode(" , ", $select);
    $whereclause = implode(" AND ", $whereclause);
    $query = "SELECT $select FROM `$from` WHERE $whereclause";
    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    $data = $stmt->get_result();
    $result = $data->fetch_all(MYSQLI_ASSOC);

    return $result;
  }
  public function selectCustom($select, $from, $whereclause)
  {
    try {
      $select = implode(" , ", $select);
      $whereclause = implode(" AND ", $whereclause);
      $query = "SELECT $select FROM `$from` WHERE $whereclause";
      $stmt = $this->conn->prepare($query);
      $stmt->execute();
      $data = $stmt->get_result();
      $result = $data->fetch_object();
      return $result;
    } catch (Exception $e) {
      return $e;
    }
  }
  public function insertLogs($detail, $inventory_id, $newValue, $oldValue, $changedValue, $timestamp, $remarks)
  {
    $query = "INSERT INTO `logs` (`detail`, `inventory_id`, `new_value`, `old_value`, `changed_value`, `timestamp`, `remarks`) 
        VALUES (?,?,?,?,?,?,?)";
    $stmt = $this->conn->prepare($query);
    $stmt->bind_param("siiiiis", $detail, $inventory_id, $newValue, $oldValue, $changedValue, $timestamp, $remarks);
    $stmt->execute();
    $result = $stmt->insert_id;
    $stmt->close();
    $this->conn->commit();
    return $result;
  }

  public function setCustom($table, $values, $whereclause)
  {
    $whereclause = implode(" AND ", $whereclause);
    $values = implode(" , ", $values);
    $query = "UPDATE $table SET $values WHERE $whereclause";
    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    return $stmt->affected_rows;
  }

  public function getIdByName($table, $value)
  {
    $id = $table . "_id";
    $name = $table . "_name";
    try {
      $query = "SELECT `$id` FROM `$table` WHERE `$name` = ?";
      $stmt = $this->conn->prepare($query);
      $stmt->bind_param("s", $value);
      $stmt->execute();
      $data = $stmt->get_result();
      $result = $data->fetch_object();

      return $result;
    } catch (Exception $e) {
      return null;
    }
  }
}



$db = new Database("localhost", "root", "", "fabrik");
$unixNow = strtotime("now");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  if (isset($_GET['action'])) {
    $action = $_GET['action'];
    switch ($action) {
      case 'getCustomers':
        $result = $db->getCustomers();
        echo json_encode($result);
        break;
      case 'topSales':
        $result = $db->topSales();
        echo json_encode($result);
        break;
      case 'getMonthOrder':
        $year = $_GET['year'];
        $result = $db->getMonthOrder($year);
        echo json_encode($result);
        break;
      case 'getWeeklyOrders':
        $day = $_GET['day'];
        $result = $db->getWeeklyOrders($day);
        echo json_encode($result);
        break;
      case 'getDeadlineToday':
        $result = $db->getDeadlineToday();
        echo json_encode($result);
        break;
      case 'getOrdersFinishedToday':
        $result = $db->getOrdersFinishedToday();
        echo json_encode($result);
        break;
      case 'getTasksToday':
        $result = $db->getTasksToday();
        echo json_encode($result);
        break;
      case 'getOrdersToday':
        $result = $db->getOrdersToday();
        echo json_encode($result);
        break;
      case 'getStatus':
        $result = $db->getAll("status");
        echo json_encode($result);
        break;
      case 'getTransaction':
        $result = $db->getTransaction();
        echo json_encode($result);
        break;
      case 'getInventory':
        $result = $db->getInventory();
        echo json_encode($result);
        break;
      case 'getAllInventory':
        $result = $db->getAllInventory();
        echo json_encode($result);
        break;
      case 'getLogs':
        $result = $db->getLogs();
        echo json_encode($result);
        break;
      case 'getBrand':
        $result = $db->getAll("brand");
        echo json_encode($result);
        break;
      case 'getColor':
        $result = $db->getAll("color");
        echo json_encode($result);
        break;
      case 'getSize':
        $result = $db->getAll("size");
        echo json_encode($result);
        break;
      case 'getType':
        $result = $db->getAll("type");
        echo json_encode($result);
        break;
      case 'getPlacement':
        $result = $db->getAll("placement");
        echo json_encode($result);
        break;
      case 'getInventoryCheck':
        $result = $db->getAll("inventory");
        echo json_encode($result);
        break;
      case 'getCustomerDetails':
        $id = $_GET['id'];
        $result = $db->fetchCustomerOrder($id);
        echo json_encode($result);
        break;
      default:
        echo json_encode(['message' => 'Invalid action']);
        break;
    }
  }
}
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);
  if ($data == null) {
    echo json_encode(['message' => 'Invalid JSON']);
    exit;
  }

  $action = $data['action'];
  switch ($action) {
    case 'login':
      Login($db, $data);
      break;
    case 'register':
      Register($db, $data);
      break;
    case 'submitOrder':
      submitOrder($db, $data, $unixNow);
      break;
    case 'saveSettings':
      saveSetting($db, $data);
      break;
    case 'insertOption':
      insertShirtOption($db, $data);
      break;
    case 'deleteOption':
      deleteOption($db, $data);
      break;
    case 'setPrice':
      setPrice($db, $data);
      break;
    case 'deleteInventory':
      deleteInventory($db, $data);
      break;
    case 'returnItem':
      updateQuantity($db, $data, $unixNow);
      break;
    case 'addQuantity':
      updateQuantity($db, $data, $unixNow);
      break;
    case 'setStatus':
      setStatus($db, $data, $unixNow);
      break;
    case 'finishOrder':
      finishOrder($db, $data);
      break;
    case 'insertBrandType':
      insertBrandType($db, $data);
      break;
    case 'insertBrandTypeColor':
      insertBrandType($db, $data);
      break;
    case 'insertBrandTypeColorSize':
      insertBrandType($db, $data);
      break;
    case 'deleteBrand':
      deleteBrand($db, $data);
      break;
    case 'deleteType':
      deleteBrandType($db, $data);
      break;
    case 'deleteColor':
      deleteBrandType($db, $data);
      break;
    case 'deleteSize':
      deleteBrandType($db, $data);
      break;
    case 'setTransactionExpired':
      setTransactionExpired($db, $data,  $unixNow);
      break;
    case 'addOrder':
      addOrder($db, $data, $unixNow);
      break;
    case 'cancelTransaction':
      cancelTransaction($db, $data, $unixNow);
      break;
    case 'extendDeadline':
      extendDeadline($db, $data, $unixNow);
      break;
    case 'directBuy':
      directBuy($db, $data, $unixNow);
      break;
    case 'addSize':
      addOption($db, $data);
      break;
    case 'addType':
      addType($db, $data);
      break;
    case 'addStocks':
      addStocks($db, $data, $unixNow);
      break;
    default:
      echo json_encode(['message' => 'Invalid action']);
      break;
  }
}




function addStocks($db, $data, $unixNow)
{
  $stocks = $data['stock'];
  $detail = "Add Stock";

  foreach ($stocks as $stock) {
    $stock_id = $stock['id'];
    $stock_value = $stock['value'];
    $oldValue = $db->selectCustom(["qty"], "inventory", ["inventory_id = $stock_id"]);
    $insertedStock = $db->updateInventory($stock_id, $stock_value);
    $newValue = $db->selectCustom(["qty"], "inventory", ["inventory_id = $stock_id"]);
    $note = "Stocks added in $stock_id";
    $db->insertLogs($detail, $stock_id, $newValue->qty, $oldValue->qty, $stock_value, $unixNow, $note);
  }

  echo json_encode($stock_id);
}
function addType($db, $data)
{
  $brand = $data['brand'];
  $colors = $data['colors'];
  $sizes = $data['sizes'];
  $type = $data['type'];
  $brand = $db->getIdByName('brand', $brand);
  $selectedTypeID = $db->getIdByName('type', $type);
  if (!$selectedTypeID) {
    $type = $db->insertOption('type', $type);
  } else {
    $type = $selectedTypeID->type_id;
  }

  $column = array();
  array_push($column, 'brand', 'type', 'color', 'size');
  foreach ($colors as $color) {
    foreach ($sizes as $size) {
      $value = array();
      array_push($value, $brand->brand_id, $type, $color['color_id'], $size['size_id']);
      $returned_id = $db->insertInventory($column, $value);
    }
  }
  echo json_encode($sizes);
}
function addOption($db, $data)
{
  $action = $data['action'];

  if ($action === "addSize") {
    $value = $data['value'];
    $inserted_id = $db->insertOption('size', $value);
    return $inserted_id;
  }
  return "error";
}
function directBuy($db, $data, $unixNow)
{
  $orders = [$data['order']];
  $note = "shirt only buy no print";
  $detail = "direct order";
  $transactionID = 0;
  $designName = "";
  $discount = $data['discount'];

  $transactionID = $db->insertTransaction(0, 3, 4, $unixNow, $note, $unixNow, $discount);
  $ordersArray = insertOrders($db, $orders, $transactionID, $note, $detail, $unixNow, $designName, 3, $discount);

  echo json_encode($ordersArray);
}

function extendDeadline($db, $data, $unixNow)
{
  $isReorder = $data['isReorder'] ?? false;
  $isDeadlineExtension = $data['deadlineExtension'] ?? false;
  $transactionID = $data['transactionID'];
  $deadline = $data['deadline'];
  $note = $isReorder ? "reorder transaction id number $transactionID" : "deadline extention transaction id number $transactionID";
  $detail = $isReorder ? "reorder" : "deadline extention";
  $orders = $db->selectCustomFetchAll(["*"], "orders", ["transaction_id = '$transactionID'", "status in (1,2,4)"]);

  if ($isDeadlineExtension) {
    $db->setCustom('transaction_detail', ["deadline = $deadline", "status = '2'"], ["td_id = '$transactionID'"]);
    echo json_encode("Transaction $transactionID deadline changed");
    return;
  }

  foreach ($orders as $order) {
    $order_id = $order['order_id'];
    $inventoryID = $order['inventory_id'];
    $quantity = $order['quantity'];
    $inventory = $db->selectCustom(["*"], "inventory", ["inventory_id = '$inventoryID'"]);

    if ($inventory->qty < $quantity) {
      echo json_encode("Not enough stocks for order $order_id");
      return;
    }
    $oldValue = $db->selectCustom(["qty"], "inventory", ["inventory_id = '$inventoryID'"]);
    $db->returnItem($inventoryID, $quantity);
    $newValue = $db->selectCustom(["qty"], "inventory", ["inventory_id = '$inventoryID'"]);
    $db->setCustom("orders", ["status = '1'"], ["order_id = '$order_id'"]);
    $logs = $db->insertLogs($detail, $inventoryID, $newValue->qty, $oldValue->qty, $quantity, $unixNow, $note);
    echo json_encode($logs);
  }

  $db->setCustom('transaction_detail', ["deadline = $deadline", "status = '2'"], ["td_id = '$transactionID'"]);
}

function cancelTransaction($db, $data, $unixNow)
{
  $transactionID = $data['transactionID'];
  $fullname = $data['fullname'];
  $phonenumber = $data['phonenumber'];
  $discount = $data['discount'];

  $db->setCustom("transaction_detail", ["status = 4"], ["td_id = $transactionID"]);
  $orders = $db->selectCustomFetchAll(["*"], "orders", ["transaction_id = '$transactionID'", "status in (1,2)"]);
  $detail = "cancel transaction";
  $note = "$transactionID transaction cancelled";

  $result = count($orders) > 0 ? removeOrders($db, $orders, $note, $detail, $unixNow, $discount) : "no orders ongoing";

  if ($fullname) {
    $message = "Hi $fullname! This is FABRIK SALES JARO , your order is ready for pickup. You can collect it at your our store during business hours. Thank you for shopping with us!";
    $db->sendFinishOrder($message, $phonenumber);
  }
  echo json_encode($result);
}

function addOrder($db, $data, $unixNow)
{
  $transactionID = $data['transactionID'];
  $orders = $data['order'];
  $designName = $data['design'];
  $price = $data['price'];
  $detail = "additional order";
  $note = "additional order to $transactionID";
  $discount = $data['discount'];

  $result = insertOrders($db, $orders, $transactionID, $note, $detail, $unixNow, $designName, 2, $price, $discount);
  $db->setCustom("transaction_detail", ["discount = discount + '$discount'"], ["td_id = '$transactionID'"]);
  echo json_encode($result);
}

function setTransactionExpired($db, $data,  $unixNow)
{
  $transactionID = $data['id'];
  $note = "transaction expired";
  $detail = "order expired";
  $discount = $data['discount'];

  $db->setCustom("transaction_detail", ["status = '5'"], ["td_id = '$transactionID'"]);
  $orders = $db->selectCustomFetchAll(["*"], "orders", ["transaction_id = '$transactionID'", "status in (1,2)"]);
  $result = removeOrders($db, $orders, $note, $detail, $unixNow, $discount);
  echo json_encode($result);
}

function deleteBrandType($db, $data)
{
  $action = $data['action'];
  $brand_id = $data['brand']['brand_id'] ?? null;
  $type_id = $data['type']['type_id'] ?? null;
  $color_id = $data['color']['color_id'] ?? null;
  $size_id = $data['size']['size_id'] ?? null;

  $whereclause = array();
  if ($brand_id) {
    array_push($whereclause, "brand = $brand_id");
  }
  if ($type_id) {
    array_push($whereclause, "type = $type_id");
  }
  if ($color_id) {
    array_push($whereclause, "color = $color_id");
  }
  if ($size_id) {
    array_push($whereclause, "size = $size_id");
  }

  $inventory = $db->getInventoryID($whereclause);

  if ($inventory) {
    $result = $db->deleteRowWithID("inventory", "inventory_id", $inventory->inventory_id);

    if ($action === "deleteType") {
      $db->deleteRowWithID("type", "type_id", $type_id);
    }
    if ($action === "deleteColor") {
      $db->deleteRowWithID("color", "color_id", $color_id);
    }
    if ($action === "deleteSize") {
      $db->deleteRowWithID("size", "size_id", $size_id);
    }
  }

  echo json_encode($result);
}

function deleteBrand($db, $data)
{
  $id = $data['id'];
  $result = $db->deleteRowWithID("brand", "brand_id", $id);
  echo json_encode($result);
}

function insertBrandType($db, $data)
{
  $action = $data['action'];

  $column = array();
  $value = array();

  if ($action == "insertBrandType") {
    array_push($column, 'brand', 'type');
    array_push($value, $data['brand'], $data['type']);
  } elseif ($action == "insertBrandTypeColor") {
    array_push($column, 'brand', 'type', 'color');
    array_push($value, $data['brand'], $data['type'], $data['color']);
  } elseif ($action == "insertBrandTypeColorSize") {
    array_push($column, 'brand', 'type', 'color', 'size');
    array_push($value, $data['brand'], $data['type'], $data['color'], $data['size']);
  }

  $result = $db->insertInventory($column, $value);

  echo json_encode($result);
}

function finishOrder($db, $data)
{
  $id = $data['id'];
  $customer_id = $data['customer_id'];

  $result = $db->finishOrder($id);

  if ($customer_id) {
    $customer = $db->selectCustomerWithID($customer_id);
    $fullname = ucwords($customer->first_name . " " . $customer->last_name);
    $phonenumber = $customer->phone_number;

    $message = "Hi $fullname! This is FABRIK SALES JARO , your order is ready for pickup. You can collect it at your our store during business hours. Thank you for shopping with us!";
    $result = $db->sendFinishOrder($message, $phonenumber);
  }
  echo json_encode($result);
}

function setStatus($db, $data, $unixNow)
{
  $id = $data['id'];
  $table = $data['table'];
  $status = $data['orderStatus'];
  $title = $data['title'];
  $InventoryID = $data['inventoryID'];

  $total = $data['total'];
  $transactionID = $data['transactionID'];

  $result = $db->updateStatus($id, $table, $status);
  if ($title == "cancel") {
    $qty = $data['qty'];
    $oldValue = $db->selectCustom(["qty"], "inventory", ["inventory_id = $InventoryID"]);
    $result = $db->updateInventory($InventoryID, $qty);
    $newValue = $db->selectCustom(["qty"], "inventory", ["inventory_id = $InventoryID"]);
    $db->setCustom("transaction_detail", ["subtotal = subtotal - '$total'", "grand_total = grand_total - '$total'"], ["td_id = '$transactionID'"]);
    $note =  "item voided";
    $detail = "void order";
  }

  if ($title == "reorder") {
    $qty = $data['qty'];
    $oldValue = $db->selectCustom(["qty"], "inventory", ["inventory_id = $InventoryID"]);
    $db->returnItem($InventoryID, $qty);
    $newValue = $db->selectCustom(["qty"], "inventory", ["inventory_id = $InventoryID"]);
    $db->setCustom("transaction_detail", ["subtotal = subtotal + '$total'", "grand_total = grand_total + '$total'"], ["td_id = '$transactionID'"]);
    $note = "item reorder";
    $detail = "reorder";
  }

  if ($title == "cancel" || $title == "reorder") {
    $result = $db->insertLogs($detail, $InventoryID, $newValue->qty, $oldValue->qty, $qty, $unixNow, $note);
  }
  echo json_encode($result);
}


function updateQuantity($db, $data, $unixNow)
{
  $action = $data['action'];
  $brand_id = $data['brand'];
  $type_id = $data['type'];
  $color_id = $data['color'];
  $size_id = $data['size'];
  $remarks = $data['remarks'];
  $value = $data['value'];
  $detail = $data['detail'];
  $whereclause = array();
  array_push($whereclause, "brand = $brand_id", "type = $type_id", "color = $color_id", "size = $size_id");
  $inventory = $db->getInventoryID($whereclause);

  $oldValue = $db->selectCustom(["qty"], "inventory", ["inventory_id = $inventory->inventory_id"]);
  if ($action === "returnItem") {
    $result = $db->returnItem($inventory->inventory_id, $value);
  } else {
    $result = $db->updateInventory($inventory->inventory_id, $value);
  }
  $newValue = $db->selectCustom(["qty"], "inventory", ["inventory_id = $inventory->inventory_id"]);
  $insertCustom = $db->insertLogs($detail, $inventory->inventory_id, $newValue->qty, $oldValue->qty, $value, $unixNow, $remarks);

  echo json_encode($insertCustom);
}

function deleteInventory($db, $data)
{
  $id = $data['id'];
  $result = $db->deleteRowWithID("inventory", "inventory_id", $id);
  echo json_encode($result);
}

// function setPrice($db, $data)
// {
//   $brand_id = $data['brand'];
//   $type_id = $data['type'];
//   $color_id = $data['color'];
//   $size_id = $data['size'];
//   $value = $data['value'];
//   $whereclause = array();
//   array_push($whereclause, "brand = $brand_id", "type = $type_id", "color = $color_id", "size = $size_id");

//   $inventory_id = $db->getInventoryID($whereclause);

//   $result = $db->insertPrice($value, $inventory_id->inventory_id);
//   echo json_encode($result);
// }

function deleteOption($db, $data)
{
  $table = $data['table'];
  $column = $data['table'] . '_id';
  $id = $data['id'];
  $result = $db->deleteRowWithID($table, $column, $id);
  echo json_encode($result);
}

function insertShirtOption($db, $data)
{
  $table = $data["table"];
  $val = $data["value"];
  $hex = $data["hex"] ?? null;


  if ($hex) {
    $returned_id = $db->insertColor($val, $hex);
  } else {
    $returned_id = $db->insertOption($table, $val);
  }

  echo json_encode($returned_id);
}

function saveSetting($db, $data)
{
  $table = "brand";
  $brand = $data['settings']['brand'];
  $result = $db->insertOption($table, $brand);

  if ($result) {
    $db->saveSettings($result, $data);
  }

  echo json_encode($data);
}

function Login($db, $data)
{
  $result = $db->userLogin($data['username']);
  if ($result) {
    if (password_verify($data['password'], $result['password'])) {
      echo json_encode(['message' => 'isLoggedIn', 'account' => $result]);
    } else {
      echo json_encode(['message' => 'Invalid Password']);
    }
  } else {
    echo json_encode(['message' => 'User not found']);
  }
}

function Register($db, $data)
{
  try {
    $result = $db->userLogin($data['username']);
    if ($result) {
      echo json_encode(['message' => 'User already exists']);
      return;
    }

    $username = $data['username'];
    $hashed_password = password_hash($data['password'], PASSWORD_BCRYPT);
    $firstname = $data['firstname'];
    $lastname = $data['lastname'];
    $phonenumber = $data['phonenumber'];

    $result = $db->userRegister($username, $hashed_password, $firstname, $lastname, $phonenumber, 3);

    echo json_encode(['message' => 'Registration Complete']);
  } catch (Exception $e) {
    echo json_encode(['message' => 'Registration failed: ' . $e->getMessage()]);
  }
}

function submitOrder($db, $data, $unixNow)
{
  $quickOrder = $data['quickOrder'];
  $discount = $data['discount'];
  $firstname = $data['customerDetail']['firstname'];
  $lastname = $data['customerDetail']['lastname'];
  $phonenumber = $data['customerDetail']['phonenumber'];
  $address = $data['customerDetail']['address'];
  $user_id = $data['transaction']['user_id'];
  $order_deadline = strtotime($data['transaction']['deadline']);
  $designName = $data['transaction']['design'] ?? "";
  $orders = $data['order'];

  $exsisting_customer = $db->selectCustomerWithNumber($phonenumber);

  if ($quickOrder) {
    $cd_id = 0;
    $detail = "quick order";
    $note = "quick order no customer details";
  } elseif (!empty($exsisting_customer)) {
    $detail = "transaction order";
    $note = $data['transaction']['note'];
    $cd_id = $exsisting_customer->cd_id;
  } else {
    $detail = "transaction order";
    $note = $data['transaction']['note'];
    $cd_id = $db->insertCustomerDetail($firstname, $lastname, $phonenumber, $address);
  }

  $transactionID = $db->insertTransaction($cd_id, 1, $user_id, $order_deadline, $note, $unixNow, $discount);
  $arrayTotal = insertOrders($db, $orders, $transactionID, $note, $detail, $unixNow, $designName, 2, $discount);

  echo json_encode($arrayTotal);
}

function cleanPhoneNumber($phonenumber)
{
  $phonenumber = preg_replace('/\D/', '', $phonenumber);

  if (strpos($phonenumber, '63') === 0) {
    return '+' . $phonenumber;
  }

  if (strpos($phonenumber, '0') === 0) {
    $phonenumber = substr($phonenumber, 1);
  }

  if (strpos($phonenumber, '9') === 0) {
    return '+63' . $phonenumber;
  }

  if (strpos($phonenumber, '63') === 0) {
    return '+' . $phonenumber;
  }

  return '+63' . $phonenumber;
}

function insertOrders($db, $orders, $transactionID, $note, $detail, $unixNow, $designName, $status, $discount)
{
  $totalArray = array();
  foreach ($orders as $order) {
    $inventoryID = $order['id'];
    $quantity = $order['orderQty'];
    $price = $order['price'];
    if ($detail === "direct order") {
      $price += 10;
    }
    $total = $price * $quantity;


    $oldValue = $db->selectCustom(["qty"], "inventory", ["inventory_id = $inventoryID"]);
    $db->returnItem($inventoryID, $quantity);
    $newValue = $db->selectCustom(["qty"], "inventory", ["inventory_id = $inventoryID"]);

    $result = $db->insertOrder($inventoryID, $quantity, $transactionID, $status, $total, $designName, $price);
    $logs = $db->insertLogs($detail, $inventoryID, $newValue->qty, $oldValue->qty, $quantity, $unixNow, $note);
    array_push($totalArray, $total);
  }
  $subTotal = array_sum($totalArray);
  $grandTotal = $subTotal - (int)$discount;
  $resultInventory = $db->setCustom("transaction_detail", ["subtotal = subtotal + '$subTotal'", "grand_total = grand_total + '$grandTotal'"], ["td_id = '$transactionID'"]);
  return $resultInventory;
}

function removeOrders($db, $orders, $note, $detail, $unixNow, $discount)
{
  $totalArray = array();
  foreach ($orders as $order) {
    $order_id = $order['order_id'];
    $inventory_id = $order['inventory_id'];
    $transactionID = $order['transaction_id'];
    $quantity = $order['quantity'];
    $total = $order['total'];

    $oldValue = $db->selectCustom(["qty"], "inventory", ["inventory_id = $inventory_id"]);
    $db->updateInventory($inventory_id, $quantity);
    $newValue = $db->selectCustom(["qty"], "inventory", ["inventory_id = $inventory_id"]);

    $db->setCustom("orders", ["status = '1'"], ["order_id = '$order_id'"]);
    $logs = $db->insertLogs($detail, $inventory_id, $newValue->qty, $oldValue->qty, $quantity, $unixNow, $note);
    array_push($totalArray, $total);
  }

  $subTotal = array_sum($totalArray);
  $grandTotal = $subTotal - (int)$discount;
  $resultInventory = $db->setCustom("transaction_detail", ["subtotal = '$total'", "grand_total = '$grandTotal'"], ["td_id = '$transactionID'"]);
  return $orders;
}
