$(function(){
  let target = $('#quiz_area');
  let tempHTML = "";
  $.each(TEST, function(key, items){
    tempHTML = tempHTML + `<div class="q-div q-div-${items.num}" style="margin-bottom: 20px;">
    <h2>${items.num}. ${items.title}</h2>
    <ul>`;
    let subList = items.sub;
    for(let i = 0; i < subList.length; i++){
      tempHTML = tempHTML + `<li>
      <label class='label-${items.num}-${subList[i].num}' for="text_${items.num}_${subList[i].num}"><input id="text_${items.num}_${subList[i].num}" value="${subList[i].num}" name="test_${items.num}" type="radio">${subList[i].text}</label>
    </li>`;
    }
    tempHTML = tempHTML + `</ul>
  </div>`;
  });
  target.html(tempHTML);
});

$(document).on('click', '#btn_result', function(){
  let count = 0;
  $.each(TEST, function(key, items){
    let value = items.value;
    let r_val = $(`input[name="test_${items.num}"]:checked`).val();
    $(`.label-${items.num}-${value}`).addClass('answord');
    if(Number(value) === Number(r_val)){
      count = count + 1;
    }else{
      $(`.q-div-${items.num}`).addClass('x');
    }
  });
  $('.score').css('display', 'block');
  $('#result_count').text(count);
});