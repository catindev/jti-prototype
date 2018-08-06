// $('#dataList thead tr').clone(true).appendTo('#dataList thead');
// $('#dataList thead tr:eq(1) th').each(function (i) {
//     console.log(i)

//     var title = $(this).text();

//     if (i !== 0 && i !== rowsCol) {
//         $(this).html('<input type="text" class="form-control form-control-sm" placeholder="" />');
//     } else {
//         $(this).html('');
//     }
// });
$('#dataList').DataTable({
    "language": {
        "processing": "Подождите...",
        "search": "Поиск:",
        "lengthMenu": "Показать _MENU_ записей",
        "info": "Записи с _START_ до _END_ из _TOTAL_ записей",
        "infoEmpty": "Записи с 0 до 0 из 0 записей",
        "infoFiltered": "(отфильтровано из _MAX_ записей)",
        "infoPostFix": "",
        "loadingRecords": "Загрузка записей...",
        "zeroRecords": "Записи отсутствуют.",
        "emptyTable": "В таблице отсутствуют данные",
        "paginate": {
            "first": "Первая",
            "previous": "Предыдущая",
            "next": "Следующая",
            "last": "Последняя"
        },
        "aria": {
            "sortAscending": ": активировать для сортировки столбца по возрастанию",
            "sortDescending": ": активировать для сортировки столбца по убыванию"
        }
    },
    orderCellsTop: true,
    fixedHeader: true,

    columnDefs: [{
        orderable: false,
        className: 'select-checkbox',
        targets: 0
    }],
    select: {
        style: 'os',
        selector: 'td:first-child'
    },
    order: [[1, 'asc']]
});