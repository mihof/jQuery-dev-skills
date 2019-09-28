$(document).ready(function() {

  $(document).on("click", '#ul_skills li button', function() {
    $("#skill").remove();
});


$('#btn_createList').click(function() {
  let skill = $('#input_skill').val();
  $('#ul_skills').append(
    `<li id="skill">
      <button id="skill_delete" onClick="delete()">X</button>
      ${skill}
    </li>`
  );
})})