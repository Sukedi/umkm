<?php
$token = "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";
$repo = "umkm";
$file_path = "decript.js";

$url = "https://api.github.com/repos/$repo/contents/$file_path";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: token $token",
    "User-Agent: request"
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
if (isset($data['content'])) {
    header("Content-Type: application/javascript");
    echo base64_decode($data['content']);
} else {
    http_response_code(404);
    echo "File not found";
}
?>
