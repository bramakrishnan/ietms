app.controller('CarouselDemoCtrl', function ($scope) {
 $scope.myInterval = 3000;
    $scope.slides = [
        {
            image: 'img/slider1.jpg'
        },
        {
            image: 'img/slider2.jpg'
        },
        {
            image: 'img/slider3.jpg'
        },
        {
            image: 'img/slider4.jpg'
        }
    ];
});



 app.controller("signUpController", function($scope, Register) {

     $scope.newCompany = {};
     /* $scope.Company.company_name="twilio";
      $scope.Company.company_email="admin@twilio.com";
      $scope.Company.company_website="www.twilio";
      $scope.Company.company_phone_number="9962562635";
      $scope.Company.company_type="1";
      $scope.Company.company_mobile_code="1234";
      $scope.Company.created_by="1";
      $scope.Company.updated_by="1";
      $scope.Company.status_id="1";
      $scope.Company.user="twilio";
      $scope.Company.pass="twilio@123";*/

     /*    console.log($scope.Company);*/


     $scope.signUp = function (Company) {
         alert("hi");
         $scope.newCompany.company_name = Company.name;
         $scope.newCompany.company_email = Company.email;
         $scope.newCompany.company_website = Company.website;
         $scope.newCompany.company_phone_number = Company.phone;
         $scope.newCompany.company_type = "1";
         $scope.newCompany.company_mobile_code = "1234";
         $scope.newCompany.created_by = "1";
         $scope.newCompany.updated_by = "1";
         $scope.newCompany.status_id = "1";
         $scope.newCompany.username = Company.user;
         $scope.newCompany.password = Company.pass;

         console.log($scope.newCompany);
        Register.save($scope.newCompany);


     }
 });





app.controller('DropdownCtrl', function ($scope, $log) {
    $scope.status = {
        isopen: false
    };
    $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
    };
    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
});
app.controller("transportController", ['$scope', function($scope){
$scope.transports = [
      {name: 'Vinoth'},
      {name: 'Krishnan'}
    ];
}]);

/*
app.controller("transportController", function($scope, Register) {
    Register.query(function(data) {
        $scope.transports = data;
        console.log(data);
    });
});
*/



app.controller("ClientCompanyCtrl", ['$scope', function($scope){
$scope.ClientCompanys = [
      {name: 'CTS-Linked-SRC-VA-001'},
      {name: 'CTS-Linked-SRC-VA-002'},
      {name: 'CTS-Linked-SRC-VA-003'},
      {name: 'CTS-Linked-SRC-VA-004'}
    ];
}]);
app.controller("helpDeskController", ['$scope', function($scope){
$scope.helpdesks = [
      {name: 'Venki'},
      {name: 'Balaji'},
      {name: 'Vivek'}
    ];
}]);
app.controller("companyVendorController", ['$scope', function($scope){
$scope.companyVendors = [
      {name: 'SVS',status: 'accept'},
      {name: 'MFR',status: 'pending'}
    ];
}]);

app.controller("tripController", ['$scope', function($scope){
$scope.tripVendors = [
      {vendor: 'SVS',trip: '10',employee: '10',status: 'pickup',
        assginVendors: [{
            name: 'SVS'}, {            
            name: 'SRC'}, {   
            name: 'KPN'}, {   
            name: 'STC'
        }]},
      {vendor: 'SRC',trip: '12',employee: '20',status: 'delivery',
        assginVendors: [{
            name: 'SVS'}, {            
            name: 'SRC'}, {   
            name: 'KPN'}, {   
            name: 'STC'
        }]},
      {vendor: 'KPN',trip: '13',employee: '23',status: 'pickup',
        assginVendors: [{
            name: 'SVS'}, {            
            name: 'SRC'}, {   
            name: 'KPN'}, {   
            name: 'STC'
        }]},
      {vendor: 'STC',trip: '8',employee: '30',status: 'delivery',
        assginVendors: [{
            name: 'SVS'}, {            
            name: 'SRC'}, {   
            name: 'KPN'}, {   
            name: 'STC'
        }]}
    ];
}]);

app.controller("tripassignDriverController", ['$scope', function($scope){
$scope.tripassignDrivers = [
    {
        id: 'BHA-TI-01012015-001'}, {            
        id: 'BHA-TI-01012015-002'}, {   
        id: 'BHA-TI-01012015-003'}, {   
        id: 'BHA-TI-01012015-004'
    }];
}]);
app.controller("TripIdCtrl", ['$scope', function($scope){
$scope.TripIds = [
      {name: 'CTS-Linked-SRC-VA-001'},
      {name: 'CTS-Linked-SRC-VA-002'},
      {name: 'CTS-Linked-SRC-VA-003'},
      {name: 'CTS-Linked-SRC-VA-004'}
    ];
}]);


app.controller("vehiceCtrl", ['$scope', function($scope){
$scope.vehiceIds = [
    {
        id: 'Vehicle1'}, {            
        id: 'Vehicle2'}, {   
        id: 'Vehicle3'}, {   
        id: 'Vehicle4'
    }];
}]);

app.controller("TripIdCtrl", ['$scope', function($scope){
$scope.TripIds = [
      {name: 'CTS-Linked-SRC-VA-001'},
      {name: 'CTS-Linked-SRC-VA-002'},
      {name: 'CTS-Linked-SRC-VA-003'},
      {name: 'CTS-Linked-SRC-VA-004'}
    ];
}]);

app.controller("vendorVehicleController", ['$scope', function($scope){
$scope.occupancys = [
      {occupancy: 'one'},
      {occupancy: 'two'},
      {occupancy: 'three'},
      {occupancy: 'four'}
    ];
$scope.vehicetypes = [
      {type: 'type 1'},
      {type: 'type 2'},
      {type: 'type 3'},
      {type: 'type 4'}
    ];
}]);

app.controller("vehiceadminCtrl", ['$scope', function($scope){
$scope.vehiceadminIds = [
    {
        id: 'SRC-VA-001'}, {            
        id: 'SRC-VA-002'}, {   
        id: 'SRC-VA-003'}, {   
        id: 'SRC-VA-004'
    }];
}]);

app.controller("vendorCompanyontroller", ['$scope', function($scope){
$scope.vendorcompanies = [
    {
        name: 'Company 1'}, {            
        name: 'Company 2'}, {   
        name: 'Company 3'}, {   
        name: 'Company 4'
    }];
}]);

app.controller("vendorUserCreateCtrl", ['$scope', function($scope){
$scope.vendorUserCreates = [
    {
        id: 'Driver 1'}, {            
        id: 'Driver 2'}, {   
        id: 'Driver 3'}, {   
        id: 'Driver 4'
    }];
}]);

app.controller("vendorDriverController", ['$scope', function($scope){
$scope.driverviehcles = [
      {assign: 'one'},
      {assign: 'two'},
      {assign: 'three'},
      {assign: 'four'}
    ];
$scope.drivercompanies = [
      {assign: 'company 1'},
      {assign: 'company 2'},
      {assign: 'company 3'},
      {assign: 'company 4'}
    ];
}]);







/*app.controller('DemoCtrl', function($scope, $http) {
    $scope.disabled = undefined;

    $scope.enable = function() {
        $scope.disabled = false;
    };

    $scope.disable = function() {
        $scope.disabled = true;
    };

    $scope.clear = function() {
        $scope.person.selected = undefined;
        $scope.address.selected = undefined;
        $scope.country.selected = undefined;
    };

    $scope.person = {};
    $scope.people = [
        { name: 'Adam',      email: 'adam@email.com',      age: 10 },
        { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
        { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 }
    ];

    $scope.address = {};
    $scope.refreshAddresses = function(address) {
        var params = {address: address, sensor: false};
        return $http.get(
            'http://maps.googleapis.com/maps/api/geocode/json',
            {params: params}
        ).then(function(response) {
                $scope.addresses = response.data.results
            });
    };
});*/