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

    public function insertCustomerDetail($firstname, $lastname, $phonenumber, $facebook, $gmail, $address)
    {
        $query = "INSERT INTO customer_detail (first_name, last_name, phone_number, facebook, gmail, address) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssssss", $firstname, $lastname, $phonenumber, $facebook, $gmail, $address);
        $stmt->execute();
        $result = $stmt->insert_id;
        $stmt->close();
        return $result;
    }

    public function insertTransaction($cd_id, $status_id, $user_id, $order_deadline, $note, $unixNow)
    {
        $query = "INSERT INTO transaction_detail ( `customer_id`,`status`,`user_id`,`deadline`,`note`, `order_date`) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("iiissi", $cd_id, $status_id, $user_id, $order_deadline, $note, $unixNow);
        $stmt->execute();
        $result = $stmt->insert_id;
        $stmt->close();
        return $result;
    }

    public function insertOrder($brand, $type, $size, $color, $quantity, $td_id, $design_id, $status)
    {
        $query = "INSERT INTO orders (`brand`, `type`, `color`, `size`,`quantity`,`transaction_id`, `status` , `design_id`) VALUES (?,?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("iiiiiiii", $brand, $type, $color, $size, $quantity, $td_id, $status, $design_id);
        $stmt->execute();
        $result = $stmt->insert_id;
        $stmt->close();
        return $result;
    }

    public function getOrder()
    {
        $query = "
            SELECT
            c.color_name AS color,
            s.size_name AS size,
            b.brand_name AS brand,
            od.quantity AS quantity,
            d.design_name AS design_name,
            d.design_id AS design_number,
            cd.first_name AS customer_firstname,
            cd.last_name AS customer_lastname,
            td.note AS note,
            td.created_at AS date
            FROM order_detail od
            JOIN color c ON od.color_id = c.color_id
            JOIN size s ON od.size_id = s.size_id
            JOIN brand b ON od.brand_id = b.brand_id
            JOIN design d ON od.design_id = d.design_id
            JOIN transaction_detail td ON od.td_id = td.td_id
            JOIN customer_detail cd ON td.cd_id = cd.cd_id
            WHERE cd.id = ? ";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        $stmt->close();
        return $result;
    }

    public function getTransaction()
    {
        $query = "SELECT 
            cd.first_name AS firstname,
            cd.last_name AS lastname,
            cd.phone_number AS phonenumber,
            cd.facebook AS facebook,
            cd.gmail AS gmail,
            cd.address AS address,

            u.firstname AS user_firstname,
            u.lastname AS user_lastname,

            DATE_FORMAT(FROM_UNIXTIME(td.deadline), '%M %d, %Y') AS deadline,
            td.note AS note,
            DATE_FORMAT(FROM_UNIXTIME(td.order_date), '%M %d, %Y') AS order_date,
            td.td_id AS transaction_id,

            s.status_name AS status
            FROM transaction_detail td
            JOIN customer_detail cd ON cd.cd_id = td.customer_id
            JOIN user u ON u.user_id = td.user_id
            JOIN status s ON s.status_id = td.status
            ORDER BY td.deadline DESC";



        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        $stmt->close();
        return $result;
    }

    public function getCustomer()
    {
        $query = "SELECT * FROM customer_detail";

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
        $query = "SELECT * FROM logs order by timestamp desc";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
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
        i.qty AS qty, 
        i.price AS price
        FROM inventory i 
        INNER JOIN brand b ON i.brand = b.brand_id 
        INNER JOIN type t ON i.type = t.type_id 
        INNER JOIN color c ON i.color = c.color_id 
        INNER JOIN size s ON i.size = s.size_id 
        WHERE i.price != 0 AND i.qty != 0
        ORDER BY i.inventory_id DESC;";

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
                i.qty AS qty,
                i.price AS price

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

    public function insertLog($detail, $inventory_id, $new_value, $old_value, $unixNow)
    {
        $this->conn->begin_transaction();
        try {
            $query = "insert into logs (`detail`, `inventory_id`, `new_value`, `old_value`, `timestamp`) values (?, ?, ?, ?, ?)";
            $stmt = $this->conn->prepare($query);
            $stmt->bind_param("siiis", $detail, $inventory_id, $new_value, $old_value, $unixNow);
            $stmt->execute();
            $result = $stmt->insert_id;
            $stmt->close();
            $this->conn->commit();
            return $result;
        } catch (Exception $e) {
            $this->conn->rollback();
            return false;
        }
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
        try {
            $query = "delete FROM `$table` where `$column` = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->affected_rows;
            $stmt->close();
            return $result;
        } catch (Exception $e) {
            return (["message" => 'fk']);
        }
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
        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        $stmt->close();
        return $result;
    }

    public function subtractInventory($order_id, $quantity)
    {
        $query = "UPDATE inventory SET qty = qty - ? WHERE inventory_id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ii", $quantity, $order_id);
        $stmt->execute();
        $result = $stmt->affected_rows;
        $stmt->close();
        return $result;
    }

    public function fetchCustomerOrder($id)
    {
        $query = "SELECT
        cd.first_name as firstname,
        cd.last_name as lastname,
        cd.phone_number as phonenumber,
        cd.facebook as facebook,
        cd.gmail as gmail,
        cd.address as address,
        b.brand_name as brand,
        c.color_name as color,
        t.type_name as type,
        s.size_name as size,
        o.quantity as quantity,
        o.design_id as design,
        o_st.status_name as status,
        td_st.status_name as transaction_status,
        o.order_id as order_id,
        td.td_id as transaction_id,
        td.note as note,
        td.customer_id as customer_id
        
        FROM transaction_detail td 
        join customer_detail cd on cd.cd_id = td.customer_id 
        join orders o on o.transaction_id = td.td_id
        join brand b on b.brand_id = o.brand
        join color c on c.color_id = o.color
        join size s on s.size_id = o.size
        join type t on t.type_id = o.type
        join status o_st on o_st.status_id = o.status
        join status td_st on td_st.status_id = td.status
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

        $clean = preg_replace('/^0?9/', '', $phonenumber);
        $recipient = '+63' . $clean;

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

    public function selectCustom($select, $from, $whereclause)
    {
        $select = implode(", ", $select);
        $whereclause = implode("AND", $whereclause);
        $query = "SELECT $select FROM `$from` WHERE $whereclause";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $data = $stmt->get_result();
        $result = $data->fetch_object();

        return $result;
    }
    public function insertCustom($insert, $column, $values)
    {
        $column = implode(", ", $column);
        $marksArray = array();
        $vars = array();
        foreach ($values as $value) {
            array_push($marksArray, "?");
            if (is_numeric($value)) {
                array_push($vars, "i");
            } else {
                array_push($vars, "s");
            }
        }
        $marks = implode(", ", $marksArray);
        $values = implode(", ", $values);
        $vars =implode("", $vars);

        $query = "INSERT INTO $insert ($column) VALUES ($marks)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param($vars, $values);
        $stmt->execute();
        $result = $stmt->insert_id;
        $stmt->close();
        $this->conn->commit();
        return $result;
    }
}

$db = new Database("localhost", "root", "", "fabrik");
$unixNow = strtotime("now");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['action'])) {
        $action = $_GET['action'];
        switch ($action) {
            case 'getCustomer':
                $result = $db->getCustomer();
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
        // case 'submitInventory':
        //     submitInventory($db, $data, $unixNow);
        //     break;
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
        case 'addQuantity':
            updateQuantity($db, $data);
            break;
        case 'setStatus':
            setStatus($db, $data);
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
        default:
            echo json_encode(['message' => 'Invalid action']);
            break;
    }
}

function doHistory() {}

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

        //inventory_id
        //remove
        //0
        //0
        //0
        //user_id
        //$text = reason item was no longer available

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

function setStatus($db, $data)
{
    $id = $data['id'];
    $table = $data['table'];
    $status = $data['status'];

    $result = $db->updateStatus($id, $table, $status);

    echo json_encode($result);
}

function updateQuantity($db, $data)
{
    $brand_id = $data['brand'];
    $type_id = $data['type'];
    $color_id = $data['color'];
    $size_id = $data['size'];
    $option = $data['option'];
    $value = $data['value'];
    $whereclause = array();
    array_push($whereclause, "brand = $brand_id", "type = $type_id", "color = $color_id", "size = $size_id");
    $inventory = $db->getInventoryID($whereclause);

    // $prevQty = $db->selectCustom(["qty"], "inventory", ["inventory_id = $inventory->inventory_id"]);
    $result = $db->updateInventory($inventory->inventory_id, $value);
    // $newQty = $db->selectCustom(["qty"], "inventory", ["inventory_id = $inventory->inventory_id"]);
    
    // if ($result) {
    //     $addHistory = array();
    //     $changedQty = $prevQty + $value;
    //     $insert = "logs";
    //     $column = array();
    //     $values = array();
    //     array_push($column, "detail", "inventory_id", "new_value", "old_value", "timestamp");
    //     $db->insertCustom($insert, $column, $values);
    // }
    echo json_encode($result);
}

function deleteInventory($db, $data)
{
    $id = $data['id'];
    $result = $db->deleteRowWithID("inventory", "inventory_id", $id);
    echo json_encode($result);
}

function setPrice($db, $data)
{
    $brand_id = $data['brand'];
    $type_id = $data['type'];
    $color_id = $data['color'];
    $size_id = $data['size'];
    $value = $data['value'];
    $whereclause = array();
    array_push($whereclause, "brand = $brand_id", "type = $type_id", "color = $color_id", "size = $size_id");

    $inventory_id = $db->getInventoryID($whereclause);

    $result = $db->insertPrice($value, $inventory_id->inventory_id);
    echo json_encode($result);
}

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
    $brand = $data['brand'] ?? null;
    $type = $data['type'] ?? null;
    $color = $data['color'] ?? null;

    $column = array();
    $value = array();

    if ($hex) {
        $returned_id = $db->insertColor($val, $hex);
    } else {
        $returned_id = $db->insertOption($table, $val);
    }

    if ($table === "type" && $returned_id) {
        array_push($column, 'brand', 'type');
        array_push($value, $brand, $returned_id);
        $returned_id = $db->insertInventory($column, $value);
    } elseif ($table === "color" && $returned_id) {
        array_push($column, 'brand', 'type', 'color');
        array_push($value, $brand, $type, $returned_id);
        $returned_id = $db->insertInventory($column, $value);
    } elseif ($table === "size" && $returned_id) {
        array_push($column, 'brand', 'type', 'color', 'size');
        array_push($value, $brand, $type, $color, $returned_id);
        $returned_id = $db->insertInventory($column, $value);
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

    $firstname = $data['customerDetail']['firstname'];
    $lastname = $data['customerDetail']['lastname'];
    $phonenumber = $data['customerDetail']['phonenumber'];
    $facebook = $data['customerDetail']['facebook'];
    $gmail = $data['customerDetail']['gmail'];
    $address = $data['customerDetail']['address'];

    $user_id = $data['transaction']['user_id'];
    $order_deadline = strtotime($data['transaction']['deadline']);
    $note = $data['transaction']['note'];
    // $printType = $data['transaction']['printType'];


    $cd_id = $db->selectCustomerWithNumber(substr($phonenumber, 1));

    if (!$cd_id) {
        $cd_id = $db->insertCustomerDetail($firstname, $lastname, $phonenumber, $facebook, $gmail, $address);
    } else {
        foreach ($cd_id as $item) {
            $cd_id = $item['cd_id'];
        }
    }

    $td_id = $db->insertTransaction($cd_id, 1, $user_id, $order_deadline, $note, $unixNow);

    foreach ($data['order'] as $order) {
        $brand = $db->getSubTableID("brand", $order['brand']);
        $type = $db->getSubTableID("type", $order['type']);
        $size = $db->getSubTableID("size", $order['size']);
        $color = $db->getSubTableID("color", $order['color']);
        $quantity = $order['qty'];
        $order_id = $order['id'];
        $design_id = null;

        $affected_row = $db->subtractInventory($order_id, $quantity);
        if ($affected_row) {
            $result = $db->insertOrder($brand[0]["brand_id"], $type[0]["type_id"], $size[0]["size_id"], $color[0]["color_id"], $quantity, $td_id, $design_id, 1);
        } else {
            echo json_encode(['message' => 'Not enough inventory']);
            return;
        }
        // $existing = $db->existingInventory($brand, $type, $color, $size);
        // $result = $db->insertLog("Add Quantity", $inventory_id, $new_value, $old_value, $unixNow);
    }
    echo json_encode($result);
}

// function  submitInventory($db, $data, $unixNow)
// {
//     foreach ($data['form'] as $form) {
//         $brand = $form['brand'];
//         $type = $form['type'];
//         $color = $form['color'];
//         $size = $form['size'];
//         $qty = $form['qty'];
//         $printType = $form['printType'];
//         $existing = $db->existingInventory($brand, $type, $color, $size, $printType);

//         if ($existing) {
//             foreach ($existing as $item) {
//                 $inventory_id = $item['inventory_id'];
//                 $old_value = $item['qty'];
//                 $new_value = $old_value + $qty;
//                 $result = $db->addQuantity($inventory_id, $qty);
//                 $result = $db->insertLog("Add Quantity", $inventory_id, $new_value, $old_value, $unixNow);
//             }
//         } else {
//             $column = array();
//             $value = array();
//             array_push($column, 'brand', 'type', 'color', 'size', 'qty');
//             array_push($value, $brand, $type, $color, $size, $qty);
//             $cd_id = $db->insertInventory($column, $value);
//             $result = $db->insertLog("Add Inventory", $cd_id, 0, 0, $unixNow);
//         }
//         echo json_encode($result);
//     }
// }
