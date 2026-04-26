<?php

declare(strict_types=1);

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';

header('Content-Type: application/json; charset=utf-8');



function withRskSettings() {
    $subdomain = $_GET['subdomain'] ?? '';

    if ($subdomain !== '' && !preg_match('/^[a-z0-9-]+$/i', $subdomain)) {
        http_response_code(400);
        echo json_encode([
            'error' => 'Invalid subdomain parameter',
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        exit;
    }

    $settingsFile = __DIR__ . '/settings.example.json';

    if ($subdomain !== '') {
        $specificSettingsFile = __DIR__ . '/settings.' . strtolower($subdomain) . '.json';

        if (is_file($specificSettingsFile)) {
            $settingsFile = $specificSettingsFile;
        }
    }

    if (!is_file($settingsFile)) {
        http_response_code(404);
        echo json_encode([
            'error' => 'Settings file not found',
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        exit;
    }

    $settingsJson = @file_get_contents($settingsFile);

    if ($settingsJson === false) {
        http_response_code(404);
        echo json_encode([
            'error' => 'Settings file not found',
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        exit;
    }

    $settings = json_decode($settingsJson, true);

    if (!is_array($settings)) {
        http_response_code(500);
        echo json_encode([
            'error' => 'Invalid JSON in settings file',
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        exit;
    }

    http_response_code(200);
    echo json_encode([
        'result' => [
            'data' => $settings
        ],
        'status' => 'OK',
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

    exit;
}

if ($path === '/') {
    withRskSettings();
}
if ($path === '/rsk-configs') {
    withRskSettings();
}

http_response_code(404);

echo json_encode([
    'error' => 'Not Found',
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
