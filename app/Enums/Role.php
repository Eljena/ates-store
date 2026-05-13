<?php

namespace App\Enums;

enum Role: string {
    case Admin = 'admin';
    case ProductManager = 'product_manager';
    case Customer = 'customer';
}