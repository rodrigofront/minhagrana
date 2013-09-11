function myFinance ( $scope ) {

  if ( localStorage.getItem("myDados") == null ) {
    $scope.dados = [];
  }
  else {
    $scope.dados = [];
    $scope.dados = JSON.parse( localStorage.getItem("myDados") );
  }

  $scope.valueTotalMoney = 0;
  
  
  $scope.addTodo = function() {
    $scope.dados.push( 
      { 
        description:$scope.TextDescription, valor: $scope.textValor 
      });

    localStorage.setItem( "myDados", JSON.stringify( $scope.dados ) );
    $scope.TextDescription = '';
    $scope.textValor = '';

    var content = document.getElementById("content");
    var footer = document.getElementById("footer");
    var back = document.getElementById("back");

    content.style.display = "block"
    footer.style.display = "none"
  };


}


