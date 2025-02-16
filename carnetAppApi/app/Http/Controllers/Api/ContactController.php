<?php

namespace App\Http\Controllers\Api;

use App\Models\Contact;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContactController extends Controller
{
    public function index(){
        $contacts = Contact::orderBy('noms', 'ASC')->get();
        return response()->json([
            'statut' => '200',
            'message' => "Liste des tous les contacts",
            'myData' => $contacts
        ],200);
    }
}
