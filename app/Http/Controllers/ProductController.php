<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

class ProductController extends Controller
{

    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    public function index()
    {

        $products = Product::all()->toJson(JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        return view('products.index')->with('products', $products);
    }

    public function listAll()
    {
        return Product::all()->toArray();
    }

    public function datatable()
    {
        $retorno = DataTables::collection($this->model->get())->make(true);

        return $retorno;

    }
}
