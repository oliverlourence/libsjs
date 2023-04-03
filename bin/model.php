<?php

$liloo = [
    'name' => 'Felipe',
    'lastname' => 'Oliveira',
    'request' => $_REQUEST
];

echo json_encode($liloo, JSON_UNESCAPED_UNICODE);