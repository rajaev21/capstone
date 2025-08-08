<?php

$phonenumber = $argv[1] ?? '';
$message = $argv[2] ?? '';

$clean = preg_replace('/^0?9/', '', $phonenumber);
$recipient = '+63'.$clean;

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
