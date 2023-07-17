$(document).ready(function () {
    var table = $('#example').DataTable({
      ordering: false,
      // dom: '<"top"i>rt<"bottom"flp><"clear">'
    });
  
    $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
      var selectedDate = moment($('#dateFilter').val(), 'DD/MM/YYYY', true);
      var currentDate = moment(data[2], 'DD.MM.YYYY', true); 
      // If no date filter is selected or the selected date is invalid, show all rows
      if (!selectedDate.isValid()) {
        return true;
      }
  
      // Perform the comparison for date filtering
      if (selectedDate.isSame(currentDate, 'day')) {
        return true;
      }
  
      return false;
    });
  
    $('#stationFilter, #dateFilter, #monthFilter, #locationFilter').on('change', function() {
      var station = $('#stationFilter').val();
      var date = $('#dateFilter').val();
      var month = $('#monthFilter').val();
      var location = $('#locationFilter').val();
  
      table
        .column(table.column($(table.column(1).header()).filter(':contains("Station")')).index())
        .search(station)
        .column(table.column($(table.column(4).header()).filter(':contains("Month")')).index())
        .search(month)
        .column(table.column($(table.column(5).header()).filter(':contains("Place of Occurrence")')).index())
        .search(location)
        .draw();
    });
  });
  