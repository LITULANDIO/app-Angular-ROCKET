
app.controller('estructuraController', function ($scope, alerts) {
  $scope.articles = alerts.estructuraFactory
})

app.controller('canalController', function ($scope, alerts1) {
  $scope.articles = alerts1.canalFactory
})

app.controller('rocketController', function ($scope, alerts2) {
  $scope.articles = alerts2.rocketFactory
})

app.controller('editorController', function ($scope, alerts3) {
  $scope.articles = alerts3.editorFactory
})

