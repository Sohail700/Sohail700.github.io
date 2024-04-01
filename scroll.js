function openNav() {
  document.getElementById("mySidenav").style.height = "calc(100% - 70px)";
  document.getElementById("main").innerHTML = '<span style="font-size:50px;cursor:pointer;transition: all 0.7s ease-out;color: #818181;" onclick="closeNav()">×</span>';
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
  document.getElementById("main").innerHTML = '<span style="font-size:30px;cursor:pointer;transition: all 0.7s ease-out;color: #818181;" onclick="openNav()">☰</span>';
}