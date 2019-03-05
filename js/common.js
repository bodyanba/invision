var checkbox   = document.getElementById('checkbox');
var row        = document.getElementById('row');
var switchWrap = document.getElementById('switch-wrap');

checkbox.addEventListener('change', function() {
	row.classList.toggle("active");
	switchWrap.classList.toggle("active");
});
document.getElementById('monthly').addEventListener('click', function() {
	checkbox.checked = false;
	row.classList.remove("active");
	switchWrap.classList.remove("active");
});
document.getElementById('yearly').addEventListener('click', function() {
	checkbox.checked = true;
	row.classList.add("active");
	switchWrap.classList.add("active");
});