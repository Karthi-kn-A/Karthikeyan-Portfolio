
$(document).ready(function () 
{
  $('.check').validate
    (
        {
            rules: 
            {
                namee: 
                {
                    required: true,
                    minlength: 5,
                    maxlength: 13,
                },
                mobilee:
                {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                },
                emaill: 
                {
                    required:true,
                },
                textt:
                {
                    required:true,
                }
            },
            messages:
            {
                namee:
                {
                    required:"Please Enter Your Name",
                }
            },
            submitHandler: function(form) 
            {
                $('.success').fadeIn();
                form.reset();
                setTimeout(function()
                {
                    $('.success').fadeOut();
                 }, 4000);
            }
        }  
    )
})