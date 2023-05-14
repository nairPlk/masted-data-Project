<?php

namespace App\Controllers;

class Dashboard extends BaseController
{
    public function index()
    {
        echo  view('templates/header');
        echo  view('templates/sidebar');
        echo  view('dashboard');
        echo  view('templates/footer');
    }
}
