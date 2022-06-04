

$(document).ready(function () {
    listaPromocoes = $('#product-table').DataTable({
        dom:
            "<'row'<'col-sm-6'><'col-sm-6'B>>" +
            "<'row'<'col-sm-6'f><'col-sm-6'l>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        "buttons": [
        ],
        "ajax": {
            url: datatable_path,
            data: function (d) { }
        },
        "processing": true,
        "serverSide": true,
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": false,
        "columns": [
            { "data": "name", "width": "30%", "name": "name" },
            { "data": "description", "width": "40%", "name": "description" },
            { "data": "price", "width": "20%", "name": "price" },
            {
                "data": "id", "width": "5%", "render": function (data, type, row) {
                    return '<a href="' + row['id'] + '" class="btn btn-default btn-xs"><span tkey="alterar">alterar</span></a>';
                }
            }
        ]
    });
});

/*
$(document).ready(function () {

    var dataSet = function () {
        var tmp = null;
        $.ajax({
            'async': false,
            'type': "GET",
            'global': false,
            'dataType': 'html',
            'url': "products/listAll",
            'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
            'success': function (data) {
                tmp = data;
            }
        });
        return tmp;
    }();

    alert(dataSet);

    $('#tableProducts').DataTable({
        data: dataSet,
        columns: [
            { title: 'Name' },
            { title: 'Description' },
            { title: 'Price' },
        ],
    });
});*/