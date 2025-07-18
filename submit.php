<?php
header("Access-Control-Allow-Origin: *");
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

    public function insertOrder($brand, $type, $size, $color, $quantity, $td_id, $design_id)
    {
        $query = "INSERT INTO orders (`brand`, `type`, `color`, `size`,`quantity`,`transaction_id`, `design_id`) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("iiiiiii", $brand, $type, $color, $size, $quantity, $td_id, $design_id);
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

    public function insertDesign($designName)
    {
        $query = "INSERT INTO design (design_name) VALUES (?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("s", $designName);
        $stmt->execute();
        $result = $stmt->insert_id;
        $stmt->close();
        return $result;
    }

    public function getTransaction()
    {
        $query = "select 
            cd.first_name as firstname,
            cd.last_name as lastname,
            cd.phone_number as phonenumber,
            cd.facebook as facebook,
            cd.gmail as gmail,
            cd.address as address,

            u.firstname as user_firstname,
            u.lastname as user_lastname,

            td.deadline as deadline,
            td.note as note,
            td.order_date as order_date,
            td.td_id as transaction_id,

            s.status_name as status
            
            from transaction_detail td
            join customer_detail cd on cd.cd_id = td.customer_id
            join user u on u.user_id = td.user_id
            join status s on s.status_id = td.status
            order by deadline desc
            ";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        $stmt->close();
        return $result;
    }

    public function getCustomer()
    {
        $query = "select * from customer_detail";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        $stmt->close();
        return $result;
    }

    public function insertInventory($brand, $type, $color, $size, $qty)
    {
        $query = "INSERT INTO inventory (brand, `type`, color, `size`, qty) VALUES (?, ?, ?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("iiiii", $brand, $type, $color, $size, $qty);
        $stmt->execute();
        $result = $stmt->insert_id;
        $stmt->close();
        return $result;
    }

    public function getLogs()
    {
        $query = "select * from logs order by timestamp desc";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        $stmt->close();
        return $result;
    }

    public function getInventory()
    {
        $query = "Select 
        i.inventory_id as id,
        b.brand_name as brand, 
        t.type_name as type,
        c.color_name as color,
        s.size_name as size,
        i.qty as qty,
        i.price as price
        
        from inventory i
        inner join brand b on i.brand = b.brand_id
        inner join type t on i.type = t.type_id
        inner join color c on i.color = c.color_id
        inner join size s on i.size = s.size_id
        order by i.inventory_id desc";

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
        $query = "select inventory_id, qty from inventory where brand = ? and type = ? and color = ? and size = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("iiii", $brand, $type, $color, $size);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        $stmt->close();
        return $result;
    }

    public function addQuantity($cd_id, $qty)
    {
        $query = "UPDATE inventory SET qty = qty + ? WHERE inventory_id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ii", $qty, $cd_id);
        $stmt->execute();
        $result = $stmt->affected_rows;
        $stmt->close();
        return $result;
    }

    public function updateInventoryWithIDandValue($id, $value)
    {
        $query = "UPDATE inventory SET qty = ? WHERE inventory_id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ii", $value, $id);
        $stmt->execute();
        $result = $stmt->affected_rows;
        $stmt->close();
        return $result;
    }

    public function getAll($table)
    {
        $query = "select * from `$table`";
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

    public function deleteRowWithID($table, $column, $id)
    {
        try {
            $query = "delete from `$table` where `$column` = ?";
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
        $query = "select * from inventory where inventory_id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param('i', $id);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        $stmt->close();
        return $result;
    }

    public function selectCustomerWithNumber($phonenumber)
    {
        $query = "select * from customer_detail where phone_number = ?";
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

        $query = "select
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
        st.status_name as status,
        o.order_id as order_id,
        td.td_id as transaction_id
        
        from transaction_detail td 
        join customer_detail cd on cd.cd_id = td.customer_id 
        join orders o on o.transaction_id = td.td_id
        join brand b on b.brand_id = o.brand
        join color c on c.color_id = o.color
        join size s on s.size_id = o.size
        join type t on t.type_id = o.type
        join status st on st.status_id = o.status
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
        $query = "select * from transaction_detail where status = 1 or status = 2";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        return $result;
    }

    function getSubTableID($table, $name){
        $id = $table . "_id";
        $colname = $table . "_name";
        $query = "select `$id` from `$table` where `$colname` = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("s", $name);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        $stmt->close();
        return $result;
    }
}

$db = new Database("localhost", "root", "", "fabrik");
$unixNow = strtotime("now");

// $result = $db->checkStatus();
// if (count($result) > 0) {
//     foreach ($result as $row) {
//         if ($row['deadline'] < $unixNow) {
//             $id = $row['td_id'];
//             $table = "transaction_detail";
//             $status = 5;
//             $db->updateStatus($id, $table, $status);
//         }
//     }
// }

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
        case 'submitInventory':
            submitInventory($db, $data, $unixNow);
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
        case 'updateQuantity':
            updateQuantity($db, $data);
            break;
        case 'setStatus':
            setStatus($db, $data);
            break;
        default:
            echo json_encode(['message' => 'Invalid action']);
            break;
    }
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
    $id = $data['id'];
    $value = $data['value'];
    $result = $db->updateInventoryWithIDandValue($id, $value);
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
    $value = $data['value'];
    $id = $data['id'];
    $result = $db->insertPrice($value, $id);
    if ($result > 0) {
        $inventory = $db->selectInventoryWithID($id);
        if ($inventory) {
            foreach ($inventory as $item) {
                $brand = $item['brand'];
                $type = $item['type'];
                $color = $item['color'];
                $size = $item['size'];
                $qty = $item['qty'];
                $price = $item['price'];
            }
            $logResult = $db->insertLog($brand, $type, $color, $size, $qty, "Set Price", date('H:i:s'), date('Y-m-d'));
            if ($logResult) {
                echo json_encode($logResult);
            }
        }
    }
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
    $value = $data["value"];
    $result = $db->insertOption($table, $value);
    echo json_encode($result);
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
            $result = $db->insertOrder($brand[0]["brand_id"], $type[0]["type_id"], $size[0]["size_id"], $color[0]["color_id"], $quantity, $td_id, $design_id);
        } else {
            echo json_encode(['message' => 'Not enough inventory']);
            return;
        }
        // $existing = $db->existingInventory($brand, $type, $color, $size);
        // $result = $db->insertLog("Add Quantity", $inventory_id, $new_value, $old_value, $unixNow);
    }
    echo json_encode($result);
}

function  submitInventory($db, $data, $unixNow)
{
    foreach ($data['form'] as $form) {
        $brand = $form['brand'];
        $type = $form['type'];
        $color = $form['color'];
        $size = $form['size'];
        $qty = $form['qty'];
        $printType = $form['printType'];
        $existing = $db->existingInventory($brand, $type, $color, $size, $printType);

        if ($existing) {
            foreach ($existing as $item) {
                $inventory_id = $item['inventory_id'];
                $old_value = $item['qty'];
                $new_value = $old_value + $qty;
                $result = $db->addQuantity($inventory_id, $qty);
                $result = $db->insertLog("Add Quantity", $inventory_id, $new_value, $old_value, $unixNow);
            }
        } else {
            $cd_id = $db->insertInventory($brand, $type, $color, $size, $qty);
            $result = $db->insertLog("Add Inventory", $cd_id, 0, 0, $unixNow);
        }
        echo json_encode($result);
    }
}
