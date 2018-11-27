<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Restaurant</title>
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  <!-- Latest compiled JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>

<style type="text/css">
  .well {
      background: none;
      height: 320px;
  }

  .table-scroll tbody {
      position: absolute;
      overflow-y: scroll;
      height: 250px;
  }

  .table-scroll tr {
      width: 100%;
      table-layout: fixed;
      display: inline-table;
  }

  .table-scroll thead > tr > th {
      border: none;
  }
</style>

   <body>
    <div class="jumbotron text-center container=fluid">
      <H1>Showing <%= c.length %> Products</H1>
<p><a href=/shoppingcart>shopping cart</a></p>
<ol>
  <% c.forEach(function(cafe) { %>
  <li><%= cafe.name %></li>
  <% });                        %>
</ol>
<p>User: <%= name %></p>
      </div>
   </body>
</html>
