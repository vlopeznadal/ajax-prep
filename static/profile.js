function submitProfile(evt) {
  evt.preventDefault();

  const formData = {
    name: $('#name-field').val(),
    age: $('#age-field').val(),
    occupation: $('#occupation-field').val(),
  };

  $.ajax({
    url: '/api/profile',
    method: 'POST',
    data: JSON.stringify(formData),
    contentType: 'application/json',
    success: response => {
      console.log(response);
      $('#profiles').append(`
        <li>${response.fullname} the ${response.occupation} is ${response.age}</li>
      `);
    },
  });
}

$('#profile-form').on('submit', submitProfile);
